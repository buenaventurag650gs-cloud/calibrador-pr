/* Worker del Calibrador de perillas.

   Sirve el sitio estático (binding ASSETS) y agrega un único endpoint propio:

     GET /api/escudos                 → { n, escudos: { "<cantón>": "<url>" } }
     GET /api/escudos?canton=Liberia  → { canton, url, imagen }

   Para qué: la portada del PDF de los reglamentos lleva el escudo de la municipalidad.
   Los escudos viven en el CDN de munis.cr, que no manda cabeceras CORS y bloquea el
   hotlink, así que el navegador no puede ni mostrarlos ni —menos— meterlos en un canvas
   sin "ensuciarlo" (y un canvas sucio no se puede exportar a PDF). El Worker sí los puede
   pedir: corre en el borde de Cloudflare, sin esas restricciones. Devuelve la imagen ya
   convertida a base64, lista para incrustar en el documento.

   Es una copia del mismo endpoint que tiene el atlas de PlanoExactoCR, a propósito: cada
   aplicación trae el suyo para no depender de los permisos (Cloudflare Access) de la otra.
   La contra es que la base de escudos está duplicada; si se corrige un escudo hay que
   corregirlo en public/escudos.json de acá y en muni/escudos.json del atlas. */

const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "access-control-allow-headers": "content-type",
};

// Lista cerrada: el endpoint solo descarga imágenes de donde viven los escudos.
const HOSTS_ESCUDOS = new Set(["images.squarespace-cdn.com"]);

async function apiEscudos(url, request, env) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
  if (request.method !== "GET") return new Response("Solo GET", { status: 405, headers: CORS });

  const json = (obj, status = 200, maxAge = 86400) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { ...CORS, "content-type": "application/json", "cache-control": `public, max-age=${maxAge}` },
    });

  const doc = await env.ASSETS.fetch(new Request(new URL("/escudos.json", url.origin)))
    .then((r) => r.json())
    .catch(() => null);
  const escudos = (doc && doc.escudos) || {};

  const canton = url.searchParams.get("canton");
  if (!canton) return json({ n: Object.keys(escudos).length, escudos });

  const directo = escudos[canton];
  if (!directo) return json({ error: `Sin escudo para el cantón "${canton}"` }, 404, 0);

  let host = "";
  try { host = new URL(directo).hostname; } catch { /* queda vacío y se rechaza abajo */ }
  if (!HOSTS_ESCUDOS.has(host)) return json({ canton, url: directo, imagen: null });

  // La imagen se devuelve en base64 para que quien arme el PDF la incruste tal cual.
  let imagen = null;
  try {
    const r = await fetch(directo, { cf: { cacheTtl: 604800, cacheEverything: true } });
    if (r.ok) {
      const bytes = new Uint8Array(await r.arrayBuffer());
      let bin = "";
      // En trozos, porque String.fromCharCode(...bytes) revienta la pila con imágenes grandes.
      for (let i = 0; i < bytes.length; i += 8192) {
        bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 8192));
      }
      const tipo = r.headers.get("content-type") || "image/png";
      imagen = `data:${tipo};base64,${btoa(bin)}`;
    }
  } catch { /* se devuelve solo la url */ }

  return json({ canton, url: directo, imagen });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/escudos") return apiEscudos(url, request, env);
    return env.ASSETS.fetch(request);
  },
};

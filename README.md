# Calibrador de perillas · Plan regulador

Sitio estático (una sola página) para calibrar las perillas de un plan regulador por zona del transecto.
No necesita servidor ni base de datos: todo corre en el navegador y los escenarios se guardan en el navegador de cada persona.

## Contenido

- `public/index.html` — la herramienta.
- `public/reglamentos/textos.js` — **texto base de los reglamentos** (aquí se cargan los borradores).
- `public/reglamentos/motor.js` — conecta el texto con las perillas, el editor y la descarga en Word.
- `public/reglamentos/reglamentos.css` — estilos de la pestaña Reglamentos.
- `public/vendor/` — librerías incluidas (íconos Lucide, jsPDF, jsPDF-AutoTable, lz-string). No depende de CDN externos.
- `public/fonts/` — tipografía Public Sans incluida.
- `public/_headers` — cabeceras de seguridad y caché.
- `wrangler.jsonc` — configuración para Cloudflare Workers (static assets).

## Publicar en Cloudflare

### Opción A · GitHub + Cloudflare (recomendada, como PlanoExactoCR)
1. En GitHub, crea un repositorio vacío llamado `calibrador-pr`.
2. Sube esta carpeta al repositorio (Claude puede hacerlo si el repositorio existe).
3. En Cloudflare: **Workers & Pages → Create → Import a repository** → elige `calibrador-pr`.
   Deja el comando de despliegue por defecto (`npx wrangler deploy`).
4. Cada cambio que se suba al repositorio se publica solo.

### Opción B · Arrastrar y soltar, sin código
1. En Cloudflare: **Workers & Pages → Create → Pages → Upload assets**.
2. Nombre del proyecto: `calibrador-pr`.
3. Arrastra la carpeta `public` y pulsa **Deploy**.
4. Queda en `https://calibrador-pr.pages.dev`. Para actualizar, sube de nuevo la carpeta como nueva versión.

### Opción C · Línea de comandos
```
npx wrangler login
npx wrangler deploy
```

## Compartir

- **La herramienta:** comparte la URL del sitio.
- **Un escenario calibrado:** botón **Compartir enlace** en el encabezado. El enlace lleva el escenario completo (valores, zonas agregadas, tabla de usos y prácticas); quien lo abre lo ve cargado como un escenario nuevo, sin perder los suyos.
- **El documento:** botón **Booklet PDF**.

## Restringir el acceso (opcional)

Para que solo el equipo o la municipalidad la vean: Cloudflare **Zero Trust → Access → Applications → Add an application → Self-hosted**, con el dominio del sitio y una política por correo (por ejemplo, `@ecoplancr.com`). Es gratis hasta 50 usuarios.

## Dominio propio (opcional)

En el proyecto de Cloudflare: **Settings → Domains & Routes → Add custom domain** (por ejemplo `calibrador.tudominio.com`).

## Reglamentos (pestaña 7)

Cada reglamento del plan (00 Generalidades a 09 Audiencia Pública) tiene un borrador cuyo texto está **conectado a las perillas**: al calibrar, los artículos y tablas se actualizan solos.

- **Ver resultado:** el texto final con los valores. Los valores en dorado fueron calibrados (distintos al de partida), en rojo están las perillas sin definir y en amarillo el texto por completar.
- **Editar texto:** se puede cambiar la redacción, agregar o mover artículos y capítulos e insertar valores del calibrador. Los cambios se guardan en el navegador y viajan con el escenario.
- **Descargar Word:** genera un .docx tamaño carta con tablas.

Estado de los borradores:
- 01 Zonificación: adaptado del Reglamento de Zonificación y Forma Urbana de Liberia.
- Los demás: se puede crear un esqueleto desde las perillas mientras llega el texto base.

Formato del texto en `textos.js`: ver el comentario al inicio de `motor.js`.

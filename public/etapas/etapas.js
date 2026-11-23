/* Etapas del Plan Regulador — el proceso completo, de la preparación preliminar a la
   publicación en La Gaceta.

   DE DÓNDE SALE LA ESTRUCTURA

   No está escrita acá. Vive en el mundo público, en
   https://planoexactocr.com/data/estructura_pr.json, y la leen tanto este calibrador como
   el atlas (atlas.planoexactocr.com). La razón es sencilla: si cada herramienta guardara su
   propia lista de etapas y su propia numeración de mapas, se desincronizarían, y el
   expediente que llega al INVU no cuadraría consigo mismo. Un solo archivo, dos lectores.

   Ese archivo se genera con scripts/construir_estructura_pr.py del repositorio
   planoexactocr, a partir del desglose de entregables del Plan Regulador (Ley 4240,
   MAPRIOT 2025 del INVU y DE 44710-MINAE).

   QUÉ GUARDA ESTE MÓDULO

   Solo el avance: qué productos están marcados como hechos. Vive en el estado del
   calibrador (S.etapas), que se guarda en este navegador. A propósito NO va dentro del
   escenario: un mismo plan regulador puede tener varios escenarios calibrados, y el avance
   de las etapas es del plan, no de un escenario, así que cambiar de escenario no debe
   mover la lista de pendientes.
   La estructura en sí no se guarda nunca: se vuelve a leer, para que una corrección en la
   norma llegue sola.

   REPARTO DEL TRABAJO

   Cada producto y cada mapa declara quién lo resuelve:
     atlas       → atlas.planoexactocr.com arma la lámina
     calibrador  → se hace acá
     equipo      → lo hace el equipo consultor a mano (campo, laboratorio, trámite)
*/
(function () {
  'use strict';

  const URL_ESTRUCTURA = 'https://planoexactocr.com/data/estructura_pr.json';
  const URL_ATLAS = 'https://atlas.planoexactocr.com/';

  // El cantón que está cargado en el calibrador, para que el atlas abra el mismo.
  function cantonActual() {
    const C = window.CAL;
    return (C && C.S && C.S.datos && C.S.datos.canton) ? String(C.S.datos.canton).trim() : '';
  }

  /* Enlace al atlas: lleva el cantón y el mapa, así el botón abre ese mapa de ese cantón y
     no la portada. Si el mapa todavía no se puede dibujar, el atlas abre su estructura
     cartográfica en esa fila, que es donde dice qué insumo le falta. */
  function enlaceAtlas(m) {
    const p = new URLSearchParams();
    const canton = cantonActual();
    if (canton) p.set('canton', canton);
    if (m && m.atlas) p.set('mapa', m.atlas);
    const q = p.toString();
    return URL_ATLAS + (q ? '?' + q : '');
  }

  let E = null;          // la estructura leída
  let error = null;      // por qué no se pudo leer, si pasó
  let pedida = false;    // ya se salió a buscarla al menos una vez
  let abiertas = {};     // qué etapas están desplegadas
  let mostrarMapas = {}; // qué etapas muestran su índice de mapas

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  // Nombre de clase CSS seguro: sin tildes ni espacios ("Elaboración" -> "elaboracion").
  const slug = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '-');

  // El avance vive en el estado del calibrador, para que viaje con el escenario.
  function hechos() {
    const C = window.CAL;
    if (!C || !C.S) return {};
    if (!C.S.etapas) C.S.etapas = {};
    return C.S.etapas;
  }
  function estaHecho(cod) { return !!hechos()[cod]; }
  function marcar(cod, v) {
    const h = hechos();
    if (v) h[cod] = true; else delete h[cod];
    if (window.CAL && window.CAL.save) window.CAL.save();
  }

  const ETIQUETA_QUIEN = {
    atlas: 'atlas', calibrador: 'acá', equipo: 'equipo consultor'
  };
  function chipQuien(quien) {
    return `<span class="et-quien ${quien}">${ETIQUETA_QUIEN[quien] || quien}</span>`;
  }

  // ---------- lectura ----------
  async function cargar() {
    pedida = true;
    try {
      const r = await fetch(URL_ESTRUCTURA, { cache: 'no-cache' });
      if (!r.ok) throw new Error('respuesta ' + r.status);
      const d = await r.json();
      if (!d || !Array.isArray(d.etapas) || !d.etapas.length) throw new Error('sin etapas');
      E = d;
      error = null;
    } catch (e) {
      E = null;
      error = e && e.message ? e.message : 'no se pudo leer';
    }
  }

  // ---------- piezas ----------
  function avanceDe(codigos) {
    const total = codigos.length;
    const listos = codigos.filter(estaHecho).length;
    return { total, listos, pct: total ? Math.round((listos / total) * 100) : 0 };
  }

  function barra(a) {
    return `<div class="et-prog" role="img" aria-label="${a.listos} de ${a.total}">` +
           `<span style="width:${a.pct}%"></span></div>`;
  }

  function filaProducto(p) {
    const hecho = estaHecho(p.codigo);
    return `<tr class="${hecho ? 'hecho' : ''}">` +
      `<td class="et-check"><input type="checkbox" id="et-${esc(p.codigo)}" ` +
        `data-prod="${esc(p.codigo)}"${hecho ? ' checked' : ''} ` +
        `aria-label="Marcar ${esc(p.codigo)} como hecho"></td>` +
      `<td class="et-cod"><label for="et-${esc(p.codigo)}">${esc(p.codigo)}</label></td>` +
      `<td><div class="et-act">${esc(p.actividad)}</div>` +
        `<div class="et-ent">Entrega: ${esc(p.entregable)}</div>` +
        `<div class="et-con">${esc(p.contenido)}</div></td>` +
      `<td class="et-resp">${esc(p.responsable)}<br>${chipQuien(p.resuelve)}</td></tr>`;
  }

  function tablaEntregables(lista) {
    if (!lista.length) return '';
    return '<div class="et-sub">Entregables formales que cierran o cruzan esta etapa</div>' +
      '<table class="et-tabla entregables"><tbody>' + lista.map((d) => {
        const hecho = estaHecho('D' + d.numero);
        // Un hito puede cubrir varios entregables (el P7 cubre el 9, el 10 y el 11): se dice,
        // para que no parezca que el mismo pago está repetido.
        const otros = (d.hito_cubre || []).filter((n) => n !== d.numero);
        const comparte = otros.length
          ? ` <span class="et-comparte">junto con #${otros.join(' y #')}</span>` : '';
        const pago = d.hito
          ? `<span class="et-pago">${esc(d.hito)} · mes ${d.mes} · ${d.porcentaje}%</span>${comparte}`
          : '<span class="et-pago sin">sin hito de pago</span>';
        const dep = d.depende && d.depende.length
          ? `<div class="et-dep">Depende de: ${d.depende.map((n) => '#' + n).join(', ')}</div>` : '';
        return `<tr class="${hecho ? 'hecho' : ''}">` +
          `<td class="et-check"><input type="checkbox" id="et-D${d.numero}" ` +
            `data-prod="D${d.numero}"${hecho ? ' checked' : ''} ` +
            `aria-label="Marcar entregable ${d.numero} como entregado"></td>` +
          `<td class="et-cod"><label for="et-D${d.numero}">#${d.numero}</label></td>` +
          `<td><div class="et-act">${esc(d.nombre)} ${pago}</div>` +
            `<div class="et-con">${esc(d.componentes)}</div>${dep}</td>` +
          `<td class="et-resp">${esc(d.revisa)}<br><span class="et-norma">${esc(d.norma)}</span></td>` +
          '</tr>';
      }).join('') + '</tbody></table>';
  }

  function tablaMapas(lista) {
    if (!lista.length) return '';
    return '<table class="et-tabla mapas"><thead><tr><th>Código</th><th>Mapa</th>' +
      '<th>Lo resuelve</th></tr></thead><tbody>' + lista.map((m) => {
        const marcas = (m.guia_invu ? '<span class="et-marca guia">Guía INVU</span>' : '')
          + (m.condicion ? `<span class="et-marca cond">${esc(m.condicion)}</span>` : '')
          + (m.sintesis ? '<span class="et-marca sint">síntesis</span>' : '');
        const enlace = m.resuelve === 'atlas'
          ? ` <a class="et-link" href="${enlaceAtlas(m)}" target="_blank" rel="noopener"` +
            ` title="Abre este mapa de ${esc(cantonActual() || 'el cantón')} en el atlas">abrir atlas</a>` : '';
        return `<tr><td class="et-cod">${esc(m.codigo)}</td>` +
          `<td>${esc(m.nombre)} ${marcas}` +
          (m.observacion ? `<div class="et-obs">${esc(m.observacion)}</div>` : '') + '</td>' +
          `<td class="et-resp">${chipQuien(m.resuelve)}${enlace}</td></tr>`;
      }).join('') + '</tbody></table>';
  }

  // Matriz C: compatibilidad de la zona propuesta con la clase IFA. Es trabajo del
  // calibrador (Fase II del EsIVA), así que se muestra dentro de la etapa ambiental.
  function matrizCompatibilidad() {
    const m = E.matriz_compatibilidad;
    if (!m) return '';
    const leyenda = Object.entries(m.leyenda)
      .map(([k, v]) => `<span class="et-leg"><b class="c-${k}">${k}</b> ${esc(v)}</span>`).join('');
    const clases = E.clases_ifa;
    return '<div class="et-sub">Matriz C · compatibilidad de la zona propuesta con la clase IFA</div>' +
      `<div class="et-leyenda">${leyenda}</div>` +
      '<table class="et-tabla matriz"><thead><tr><th>Zona propuesta</th>' +
      clases.map((c) => `<th title="${esc(c.fragilidad)}"><span class="et-ifa" ` +
        `style="background:${c.color}"></span>${esc(c.numeral)}</th>`).join('') +
      '</tr></thead><tbody>' +
      m.filas.map((f) => `<tr><td>${esc(f.zona)}</td>` +
        f.clases.map((v) => `<td class="c-${v}">${v}</td>`).join('') + '</tr>').join('') +
      '</tbody></table>' +
      `<p class="et-nota">${esc(m.nota)}</p>`;
  }

  // Matriz D: de la condicionante ambiental al artículo que la gestiona.
  function matrizCondicionantes() {
    if (!E.condicionantes || !E.condicionantes.length) return '';
    return '<div class="et-sub">Matriz D · de la condicionante ambiental a la norma</div>' +
      '<table class="et-tabla matriz-d"><thead><tr><th>Condicionante</th><th>Ámbito</th>' +
      '<th>Norma que la gestiona</th><th>Reglamento</th><th>Control</th></tr></thead><tbody>' +
      E.condicionantes.map((c) => `<tr><td><b>${esc(c.condicionante)}</b></td>` +
        `<td>${esc(c.ambito)}</td><td>${esc(c.norma)}</td>` +
        `<td>${esc(c.reglamento)}</td><td>${esc(c.control)}</td></tr>`).join('') +
      '</tbody></table>';
  }

  function tarjetaEtapa(et) {
    const prods = E.productos.filter((p) => p.etapa === et.numero);
    const ents = E.entregables.filter((d) => d.etapa === et.numero);
    const mapas = E.mapas.filter((m) => m.etapa === et.numero);
    const codigos = prods.map((p) => p.codigo).concat(ents.map((d) => 'D' + d.numero));
    const a = avanceDe(codigos);
    const abierta = !!abiertas[et.numero];
    const verMapas = !!mostrarMapas[et.numero];

    let cuerpo = '';
    if (abierta) {
      cuerpo += '<div class="et-cuerpo">';
      cuerpo += `<p class="et-cierra"><b>Cierra con:</b> ${esc(et.cierra)}</p>`;
      if (prods.length) {
        /* La etapa 3 numera sus pasos A1 a A9 y no E3.1 en adelante: así los numera el
           desglose, porque son la ruta procedimental del EsIVA ante SETENA, no productos
           del plan. Se dice en pantalla para que la diferencia no parezca un error. */
        cuerpo += `<div class="et-sub">${et.numero === 3
          ? 'Ruta procedimental del EsIVA (pasos A1 a A9 del desglose)'
          : 'Productos de la etapa'}</div>`;
        cuerpo += '<table class="et-tabla"><thead><tr><th></th><th>Cód.</th>' +
          '<th>Actividad y entregable</th><th>Responsable</th></tr></thead><tbody>' +
          prods.map(filaProducto).join('') + '</tbody></table>';
      } else {
        cuerpo += '<p class="et-nota">Esta etapa no tiene productos propios en el ' +
          'desglose: la cierran sus entregables formales.</p>';
      }
      cuerpo += tablaEntregables(ents);
      if (et.numero === 3) { cuerpo += matrizCompatibilidad(); cuerpo += matrizCondicionantes(); }
      if (mapas.length) {
        cuerpo += `<div class="et-sub">Mapas de esta etapa ` +
          `<button class="et-toggle" data-mapas="${et.numero}">` +
          `${verMapas ? 'ocultar' : 'ver los ' + mapas.length}</button></div>`;
        if (verMapas) cuerpo += tablaMapas(mapas);
      }
      cuerpo += '</div>';
    }

    return `<section class="et-card ${abierta ? 'abierta' : ''}" data-etapa="${et.numero}">` +
      `<header class="et-head" data-abrir="${et.numero}" role="button" tabindex="0" ` +
        `aria-expanded="${abierta}">` +
        `<span class="et-num">${et.numero === 10 ? '—' : et.numero}</span>` +
        '<div class="et-tit">' +
          `<h3>${esc(et.nombre)}</h3>` +
          `<p>Lidera ${esc(et.lidera)} · revisa ${esc(et.revisa)}</p>` +
        '</div>' +
        `<span class="et-bloque ${slug(et.bloque)}">${esc(et.bloque)}</span>` +
        `<div class="et-avance"><span>${a.listos}/${a.total}</span>${barra(a)}</div>` +
        `<i data-lucide="${abierta ? 'chevron-up' : 'chevron-down'}" class="ic"></i>` +
      '</header>' + cuerpo + '</section>';
  }

  function resumen() {
    const todos = E.productos.map((p) => p.codigo)
      .concat(E.entregables.map((d) => 'D' + d.numero));
    const a = avanceDe(todos);
    const porQuien = { atlas: 0, calibrador: 0, equipo: 0 };
    E.productos.forEach((p) => { porQuien[p.resuelve] = (porQuien[p.resuelve] || 0) + 1; });
    const entHechos = E.entregables.filter((d) => estaHecho('D' + d.numero)).length;
    return '<div class="et-resumen">' +
      `<div class="et-kpi"><b>${a.pct}%</b><span>del proceso marcado</span>${barra(a)}</div>` +
      `<div class="et-kpi"><b>${entHechos}/${E.entregables.length}</b>` +
        '<span>entregables formales</span></div>' +
      `<div class="et-kpi"><b>${E.etapas.length}</b><span>etapas del MAPRIOT 2025</span></div>` +
      `<div class="et-kpi"><b>${E.mapas.length}</b><span>mapas en el índice maestro</span></div>` +
      `<div class="et-kpi chips"><span class="et-quien calibrador">${porQuien.calibrador} acá</span>` +
        `<span class="et-quien atlas">${porQuien.atlas} en el atlas</span>` +
        `<span class="et-quien equipo">${porQuien.equipo} del equipo</span></div>` +
      '</div>';
  }

  /* Avance de un recorte de etapas (Insumos, Trámite). No repite los indicadores del
     proceso completo: solo cuánto de estas etapas está marcado y quién las resuelve. */
  function avanceDeVista(etapas) {
    const nums = etapas.map((e) => e.numero);
    const prods = E.productos.filter((p) => nums.includes(p.etapa));
    const ents = E.entregables.filter((d) => nums.includes(d.etapa));
    const mapas = E.mapas.filter((m) => nums.includes(m.etapa));
    const a = avanceDe(prods.map((p) => p.codigo).concat(ents.map((d) => 'D' + d.numero)));
    const porQuien = { atlas: 0, calibrador: 0, equipo: 0 };
    prods.forEach((p) => { porQuien[p.resuelve] = (porQuien[p.resuelve] || 0) + 1; });
    const chips = ['calibrador', 'atlas', 'equipo']
      .filter((q) => porQuien[q])
      .map((q) => `<span class="et-quien ${q}">${porQuien[q]} ${ETIQUETA_QUIEN[q]}</span>`).join('');
    return '<div class="et-resumen">' +
      `<div class="et-kpi"><b>${a.pct}%</b><span>de estas etapas marcado</span>${barra(a)}</div>` +
      `<div class="et-kpi"><b>${etapas.length}</b><span>etapa${etapas.length > 1 ? 's' : ''}</span></div>` +
      (mapas.length ? `<div class="et-kpi"><b>${mapas.length}</b><span>mapas</span></div>` : '') +
      (chips ? `<div class="et-kpi chips">${chips}</div>` : '') +
      '</div>';
  }

  function transversales() {
    if (!E.transversales || !E.transversales.length) return '';
    return '<section class="et-card plano"><h3 class="et-solo">Procesos transversales</h3>' +
      '<p class="et-nota">No son etapas: atraviesan todas.</p><ul class="et-lista">' +
      E.transversales.map((t) => `<li><b>${esc(t.proceso)}.</b> ${esc(t.descripcion)}</li>`).join('') +
      '</ul></section>';
  }

  function verificar() {
    if (!E.verificar || !E.verificar.length) return '';
    return '<section class="et-card plano aviso"><h3 class="et-solo">Puntos a verificar antes de firmar unos TdR</h3>' +
      '<ul class="et-lista check">' +
      E.verificar.map((v) => `<li>${esc(v)}</li>`).join('') + '</ul></section>';
  }

  function normas() {
    if (!E.normas || !E.normas.length) return '';
    return '<section class="et-card plano"><h3 class="et-solo">Marco normativo</h3>' +
      '<table class="et-tabla"><thead><tr><th>Instrumento</th><th>Qué fija</th>' +
      '<th>Estado</th></tr></thead><tbody>' +
      E.normas.map((n) => `<tr><td><b>${esc(n.instrumento)}</b></td><td>${esc(n.fija)}</td>` +
        `<td>${esc(n.estado)}</td></tr>`).join('') + '</tbody></table></section>';
  }

  /* ---------- vistas ----------
     La misma estructura se muestra en varias secciones del calibrador, cada una con su
     recorte de etapas. Se declara acá para no duplicar ni la lectura ni el pintado:
       etapas   → el proceso completo, con resumen, transversales, normas y verificación
       insumos  → lo que entra antes de la propuesta (etapas 1 a 5)
       tramite  → lo que viene después (etapas 8 a 10)
       audiencia→ solo la etapa 7, incrustada en la sección de Participación ciudadana */
  const VISTAS = {
    etapas: {
      caja: 'v-etapas', nums: null, titulo: 'Etapas del Plan Regulador', completa: true
    },
    insumos: {
      caja: 'v-insumos', nums: [1, 2, 3, 4, 5], titulo: 'Insumos del plan',
      intro: 'Lo que tiene que estar listo antes de calibrar la propuesta: la preparación ' +
        'preliminar, el mapa base, la evaluación ambiental, el diagnóstico y el pronóstico. ' +
        'Casi todo lo resuelve el atlas o el equipo consultor; acá se lleva el avance.'
    },
    tramite: {
      caja: 'v-tramite', nums: [8, 9, 10], titulo: 'Trámite y adopción',
      intro: 'Lo que sigue después de la audiencia pública: la revisión del INVU, la ' +
        'adopción por el Concejo con su publicación en La Gaceta, y el seguimiento posterior.'
    },
    audiencia: {
      caja: 'et-audiencia', nums: [7], titulo: null
    }
  };

  // ---------- pintado ----------
  function render(id) {
    const vista = VISTAS[id] || VISTAS.etapas;
    const caja = $(vista.caja);
    if (!caja) return;
    const h2 = vista.titulo ? `<h2>${esc(vista.titulo)}</h2>` : '';

    if (!E && !pedida) {
      caja.innerHTML = '<div class="card">' + h2 +
        '<p class="hint">Leyendo la estructura compartida del Plan Regulador…</p></div>';
      return;
    }

    if (!E) {
      caja.innerHTML = '<div class="card et-error">' + h2 +
        '<p>No se pudo leer la estructura compartida del Plan Regulador' +
        (error ? ' (' + esc(error) + ')' : '') + '.</p>' +
        '<p class="hint">La estructura vive en planoexactocr.com y la comparten este ' +
        'calibrador y el atlas. Si no carga, puede ser que no haya conexión o que el ' +
        'sitio esté publicándose en este momento.</p>' +
        `<button class="btn primary" data-reintentar="${esc(id || 'etapas')}">Volver a intentar</button></div>`;
      const b = caja.querySelector('[data-reintentar]');
      if (b) b.onclick = async () => { await cargar(); render(id); };
      return;
    }

    const etapas = vista.nums
      ? E.etapas.filter((e) => vista.nums.includes(e.numero))
      : E.etapas;

    const cabecera = vista.completa
      ? '<div class="card et-cab">' + h2 +
          `<p class="hint">${esc(E.nota)} Fuente: ${esc(E.fuente)}.</p>` +
          resumen() +
          '<p class="hint et-pie">El avance se guarda en este navegador y es del plan, no de ' +
          'un escenario: cambiar de escenario calibrado no lo mueve. La estructura se lee de ' +
          'planoexactocr.com cada vez, para que una corrección en la norma llegue sola.</p>' +
        '</div>'
      : (vista.titulo
          ? '<div class="card et-cab">' + h2 +
            (vista.intro ? `<p class="hint">${esc(vista.intro)}</p>` : '') +
            avanceDeVista(etapas) + '</div>'
          : '');

    caja.innerHTML = cabecera + etapas.map(tarjetaEtapa).join('') +
      (vista.completa ? transversales() + normas() + verificar() : '');

    caja.querySelectorAll('[data-abrir]').forEach((h) => {
      const abrir = () => {
        const n = Number(h.dataset.abrir);
        abiertas[n] = !abiertas[n];
        render(id);
      };
      h.addEventListener('click', (ev) => {
        if (ev.target.closest('input,button,a,label')) return;
        abrir();
      });
      h.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); abrir(); }
      });
    });
    caja.querySelectorAll('[data-mapas]').forEach((b) => {
      b.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const n = Number(b.dataset.mapas);
        mostrarMapas[n] = !mostrarMapas[n];
        render(id);
      });
    });
    caja.querySelectorAll('[data-prod]').forEach((c) => {
      c.addEventListener('change', () => {
        marcar(c.dataset.prod, c.checked);
        render(id);
      });
    });
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }

  window.ETAPAS = {
    async init() { await cargar(); },
    // render('etapas' | 'insumos' | 'tramite' | 'audiencia'); sin argumento, el proceso completo.
    render,
    // La estructura leída, para que otros módulos (participación) no la vuelvan a pedir.
    estructura() { return E; },
    // Para las pruebas: inyectar una estructura sin salir a la red.
    _usar(d) { E = d; error = d ? null : 'inyectada vacía'; }
  };
})();

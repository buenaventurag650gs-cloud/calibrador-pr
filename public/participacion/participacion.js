/* Participación ciudadana en el Plan Regulador.

   POR QUÉ ES UNA SECCIÓN Y NO UNA ETAPA

   La estructura compartida del Plan Regulador (planoexactocr.com/data/estructura_pr.json) la
   declara como proceso transversal: «Talleres por etapa; el MAPRIOT 2025 la trata como
   proceso continuo, no solo como la audiencia final». O sea que atraviesa todas las etapas,
   y la Audiencia Pública del artículo 17 de la Ley 4240 es su hito formal, no su totalidad.
   Por eso acá conviven las dos cosas: el plan de talleres etapa por etapa, y el trámite de
   la audiencia con su registro de observaciones.

   QUÉ SALE DE LA NORMA Y QUÉ ES GUÍA

   - La etapa 7 (Audiencia Pública) y sus productos se leen de la estructura compartida: son
     los del desglose de entregables. Los pinta etapas.js dentro de #et-audiencia.
   - El plan de talleres de abajo NO está en la norma con ese detalle: el MAPRIOT fija el
     principio de participación continua, pero no una lista cerrada de talleres. Lo de acá es
     una guía de trabajo, pensada para que el equipo la ajuste al cantón. Se marca como tal
     en pantalla para que nadie la cite como si fuera obligación legal.

   QUÉ SE GUARDA

   En S.pc, dentro del estado del calibrador (este navegador). A propósito queda FUERA del
   escenario, igual que el avance de las etapas: un mismo plan puede tener varios escenarios
   calibrados, y los talleres y las observaciones recibidas son del plan, no de un escenario.
*/
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  /* Guía de talleres por etapa. Cada uno dice en qué etapa cae, qué se busca y qué deja por
     escrito, porque sin producto documentado la participación no se puede demostrar después
     ante el INVU. Es guía, no norma: ver el encabezado del archivo. */
  const TALLERES = [
    {
      id: 'T1', etapa: 1, momento: 'Preparación preliminar',
      titulo: 'Mapeo de actores y representación comunal',
      busca: 'Identificar quién vive, trabaja y decide en el cantón: asociaciones de desarrollo, ' +
        'comités de barrio, cámaras, cooperativas, grupos ambientales, territorios indígenas si los hay.',
      deja: 'Mapa de actores y acuerdo del Concejo que integra representación comunal a la Comisión del PR'
    },
    {
      id: 'T2', etapa: 2, momento: 'Mapa Base',
      titulo: 'Validación comunal de nombres y límites',
      busca: 'Que la gente corrija los nombres de barrios, caseríos y caminos, y señale dónde ' +
        'los límites oficiales no coinciden con lo que se vive en el territorio.',
      deja: 'Listado de correcciones al mapa base, con la fuente comunal de cada una'
    },
    {
      id: 'T3', etapa: 4, momento: 'Diagnóstico',
      titulo: 'Talleres de diagnóstico por distrito',
      busca: 'Levantar los problemas tal y como los nombra la gente: inundaciones, falta de agua, ' +
        'calles sin salida, actividades que molestan, lugares que se valoran y se quieren proteger.',
      deja: 'Sistematización por distrito, con lista de asistencia y mapas marcados a mano'
    },
    {
      id: 'T4', etapa: 4, momento: 'Diagnóstico',
      titulo: 'Devolución del diagnóstico',
      busca: 'Contarle a la comunidad qué encontró el estudio, antes de pasar a los escenarios. ' +
        'Sirve para corregir lecturas erradas mientras todavía se puede.',
      deja: 'Acta de la sesión de devolución y ajustes incorporados al documento de diagnóstico'
    },
    {
      id: 'T5', etapa: 5, momento: 'Pronóstico',
      titulo: 'Taller de escenarios',
      busca: 'Poner a discusión los tres escenarios (tendencial, deseable y posible) para que la ' +
        'comunidad diga hacia cuál quiere ir y qué está dispuesta a cambiar para llegar.',
      deja: 'Registro de la discusión y justificación del modelo territorial elegido'
    },
    {
      id: 'T6', etapa: 6, momento: 'Propuesta',
      titulo: 'Devolución de la zonificación y los reglamentos',
      busca: 'Explicar en lenguaje llano qué se podrá hacer y qué no en cada zona, antes de la ' +
        'audiencia formal. Es el momento de bajar las sorpresas, no el día de la audiencia.',
      deja: 'Memoria del taller y ajustes a la propuesta previos a la audiencia'
    },
    {
      id: 'T7', etapa: 7, momento: 'Audiencia Pública',
      titulo: 'Convocatoria amplia a la audiencia',
      busca: 'Que la convocatoria llegue de verdad: además de La Gaceta, medios locales, redes, ' +
        'asociaciones de desarrollo y perifoneo donde haga falta.',
      deja: 'Comprobantes de convocatoria por cada medio usado'
    },
    {
      id: 'T8', etapa: 10, momento: 'Seguimiento',
      titulo: 'Rendición de cuentas',
      busca: 'Volver a la comunidad a contar cómo se está aplicando el plan y qué resultados dio, ' +
        'de cara a la revisión recomendada cada cinco años.',
      deja: 'Informe de seguimiento presentado públicamente'
    }
  ];

  const ESTADOS = ['pendiente', 'acogida', 'parcial', 'no acogida'];

  // ---------- estado ----------
  function pc() {
    const C = window.CAL;
    if (!C || !C.S) return { talleres: {}, obs: [] };
    if (!C.S.pc || typeof C.S.pc !== 'object') C.S.pc = {};
    const d = C.S.pc;
    if (!d.talleres || typeof d.talleres !== 'object') d.talleres = {};
    if (!Array.isArray(d.obs)) d.obs = [];
    return d;
  }
  function guardar() { if (window.CAL && window.CAL.save) window.CAL.save(); }
  const cantonActual = () => {
    const C = window.CAL;
    return (C && C.S && C.S.datos && C.S.datos.canton) ? String(C.S.datos.canton).trim() : '';
  };

  // ---------- piezas ----------
  function barra(listos, total) {
    const pct = total ? Math.round((listos / total) * 100) : 0;
    return `<div class="pc-prog" role="img" aria-label="${listos} de ${total}">` +
           `<span style="width:${pct}%"></span></div>`;
  }

  function cabecera() {
    const d = pc();
    const listos = TALLERES.filter((t) => d.talleres[t.id]).length;
    const obs = d.obs.length;
    const resueltas = d.obs.filter((o) => o.estado && o.estado !== 'pendiente').length;
    const canton = cantonActual();
    return '<div class="card pc-cab">' +
      '<h2>Participación ciudadana</h2>' +
      '<p class="hint">El MAPRIOT 2025 la trata como un proceso continuo y no solo como la ' +
      'audiencia final: hay talleres en cada etapa, y la Audiencia Pública del artículo 17 de ' +
      'la Ley 4240 es su hito formal. Acá se lleva el avance de ambas cosas' +
      (canton ? ` para el cantón de ${esc(canton)}` : '') + '.</p>' +
      '<div class="pc-resumen">' +
        `<div class="pc-kpi"><b>${listos}/${TALLERES.length}</b><span>momentos de participación</span>` +
          `${barra(listos, TALLERES.length)}</div>` +
        `<div class="pc-kpi"><b>${obs}</b><span>observaciones registradas</span></div>` +
        `<div class="pc-kpi"><b>${resueltas}/${obs || 0}</b><span>con respuesta dada</span></div>` +
      '</div>' +
      '<p class="hint pc-pie">El avance y las observaciones se guardan en este navegador y son ' +
      'del plan, no de un escenario: cambiar de escenario calibrado no los mueve.</p>' +
      '</div>';
  }

  function tarjetaTaller(t) {
    const hecho = !!pc().talleres[t.id];
    return `<tr class="${hecho ? 'hecho' : ''}">` +
      `<td class="pc-check"><input type="checkbox" id="pc-${t.id}" data-taller="${t.id}"` +
        `${hecho ? ' checked' : ''} aria-label="Marcar ${esc(t.titulo)} como hecho"></td>` +
      `<td class="pc-cod"><label for="pc-${t.id}">${t.id}</label>` +
        `<span class="pc-etapa">etapa ${t.etapa}</span></td>` +
      `<td><div class="pc-tit">${esc(t.titulo)}</div>` +
        `<div class="pc-busca">${esc(t.busca)}</div>` +
        `<div class="pc-deja">Deja por escrito: ${esc(t.deja)}</div></td>` +
      `<td class="pc-momento">${esc(t.momento)}</td></tr>`;
  }

  function seccionTalleres() {
    return '<section class="card pc-sec">' +
      '<h3>Momentos de participación, etapa por etapa</h3>' +
      '<p class="hint">Guía de trabajo, no lista obligatoria: el MAPRIOT fija el principio de ' +
      'participación continua, pero cada cantón arma sus talleres según su realidad. Lo que sí ' +
      'conviene no saltarse es dejar constancia escrita de cada uno, porque es lo que después se ' +
      'presenta como respaldo del proceso.</p>' +
      '<table class="pc-tabla"><thead><tr><th></th><th>Cód.</th>' +
      '<th>Qué se hace y qué deja</th><th>Cuándo</th></tr></thead><tbody>' +
      TALLERES.map(tarjetaTaller).join('') + '</tbody></table></section>';
  }

  // La etapa 7 completa, leída de la estructura compartida y pintada por etapas.js.
  function seccionAudiencia() {
    return '<section class="card pc-sec">' +
      '<h3>Audiencia Pública · artículo 17 de la Ley 4240</h3>' +
      '<p class="hint">Esta es la etapa 7 del proceso, tal como la trae el desglose de ' +
      'entregables. Se lee de la estructura compartida con el atlas, así que si cambia la norma, ' +
      'cambia acá sola.</p></section>' +
      '<div id="et-audiencia"></div>';
  }

  function filaObs(o, i) {
    const sel = ESTADOS.map((e) => `<option value="${e}"${o.estado === e ? ' selected' : ''}>${e}</option>`).join('');
    return `<tr data-obs="${i}" class="est-${esc(o.estado || 'pendiente').replace(/\s+/g, '-')}">` +
      `<td class="pc-n">${i + 1}</td>` +
      `<td><input class="pc-in" data-campo="quien" data-i="${i}" value="${esc(o.quien || '')}" ` +
        'placeholder="Nombre u organización" aria-label="Quién observa"></td>' +
      `<td><textarea class="pc-in pc-ta" data-campo="que" data-i="${i}" rows="2" ` +
        `placeholder="Qué observa" aria-label="Observación">${esc(o.que || '')}</textarea></td>` +
      `<td><input class="pc-in" data-campo="sobre" data-i="${i}" value="${esc(o.sobre || '')}" ` +
        'placeholder="Zona, mapa o reglamento" aria-label="Sobre qué"></td>' +
      `<td><textarea class="pc-in pc-ta" data-campo="respuesta" data-i="${i}" rows="2" ` +
        `placeholder="Respuesta de la Municipalidad" aria-label="Respuesta">${esc(o.respuesta || '')}</textarea></td>` +
      `<td><select class="pc-sel" data-campo="estado" data-i="${i}" aria-label="Estado">${sel}</select></td>` +
      `<td class="pc-del"><button class="ib" data-quitar="${i}" title="Quitar esta fila" ` +
        'aria-label="Quitar esta observación">×</button></td></tr>';
  }

  function seccionMatriz() {
    const d = pc();
    const filas = d.obs.length
      ? d.obs.map(filaObs).join('')
      : '<tr class="pc-vacia"><td colspan="7">Todavía no hay observaciones registradas. ' +
        'Con el botón de abajo se agrega la primera.</td></tr>';
    return '<section class="card pc-sec">' +
      '<h3>Matriz de respuestas a las observaciones</h3>' +
      '<p class="hint">Es el documento que cierra la audiencia: cada observación recibida con la ' +
      'respuesta de la Municipalidad y si se acogió o no. Se llena acá y se copia al expediente ' +
      'que va al INVU.</p>' +
      '<div class="pc-tw"><table class="pc-tabla matriz"><thead><tr><th>#</th><th>Quién</th>' +
      '<th>Qué observa</th><th>Sobre qué</th><th>Respuesta</th><th>Estado</th><th></th>' +
      '</tr></thead><tbody>' + filas + '</tbody></table></div>' +
      '<div class="bar" style="margin-top:10px">' +
        '<button class="btn primary" id="pcAdd">Agregar observación</button>' +
        '<button class="btn" id="pcCopy">Copiar la matriz</button>' +
      '</div></section>';
  }

  // La matriz como texto con tabulaciones: se pega directo en Word o en una hoja de cálculo.
  function matrizTexto() {
    const d = pc();
    const enc = ['#', 'Quién', 'Qué observa', 'Sobre qué', 'Respuesta', 'Estado'];
    const limpio = (s) => String(s || '').replace(/\s+/g, ' ').trim();
    const filas = d.obs.map((o, i) => [i + 1, limpio(o.quien), limpio(o.que), limpio(o.sobre),
      limpio(o.respuesta), limpio(o.estado) || 'pendiente'].join('\t'));
    return [enc.join('\t')].concat(filas).join('\n');
  }

  // ---------- pintado ----------
  function render() {
    const caja = $('v-participacion');
    if (!caja) return;
    caja.innerHTML = cabecera() + seccionTalleres() + seccionAudiencia() + seccionMatriz();

    // La etapa 7 la pinta el módulo de etapas dentro del contenedor que acaba de crearse.
    if (window.ETAPAS) window.ETAPAS.render('audiencia');

    caja.querySelectorAll('[data-taller]').forEach((c) => {
      c.addEventListener('change', () => {
        const d = pc();
        if (c.checked) d.talleres[c.dataset.taller] = true;
        else delete d.talleres[c.dataset.taller];
        guardar();
        render();
      });
    });

    /* Los campos de la matriz se guardan al salir del campo, no en cada tecla: volver a
       pintar en cada letra haría perder el foco a media palabra. */
    caja.querySelectorAll('[data-campo]').forEach((el) => {
      const escribir = () => {
        const d = pc();
        const i = Number(el.dataset.i);
        if (!d.obs[i]) return;
        d.obs[i][el.dataset.campo] = el.value;
        guardar();
        // El estado pinta el color de la fila, así que ese sí se refleja de una.
        if (el.dataset.campo === 'estado') render();
      };
      el.addEventListener('change', escribir);
      el.addEventListener('blur', escribir);
    });

    caja.querySelectorAll('[data-quitar]').forEach((b) => {
      b.addEventListener('click', () => {
        const d = pc();
        d.obs.splice(Number(b.dataset.quitar), 1);
        guardar();
        render();
      });
    });

    const add = $('pcAdd');
    if (add) add.onclick = () => {
      pc().obs.push({ quien: '', que: '', sobre: '', respuesta: '', estado: 'pendiente' });
      guardar();
      render();
      // El cursor va al primer campo de la fila nueva, para poder escribir de una.
      const campos = caja.querySelectorAll('[data-campo="quien"]');
      if (campos.length) campos[campos.length - 1].focus();
    };

    const copy = $('pcCopy');
    if (copy) copy.onclick = () => {
      const C = window.CAL;
      if (!pc().obs.length) { if (C && C.toast) C.toast('No hay observaciones que copiar'); return; }
      if (C && C.copyText) C.copyText(matrizTexto(), 'Matriz copiada');
      else if (C && C.toast) C.toast('No se pudo copiar');
    };

    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }

  window.PART = { render, _talleres: TALLERES };
})();

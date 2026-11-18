/* Prueba de la pestaña "Etapas del Plan Regulador" en un navegador simulado (jsdom).

   Verifica que la pestaña se arma a partir de la estructura COMPARTIDA con el atlas
   (planoexactocr.com/data/estructura_pr.json) y no de una copia propia, que el avance se
   guarda en el estado del calibrador, y que si la estructura no carga la pestaña lo dice en
   lugar de quedarse en blanco.

   Necesita jsdom:  npm install jsdom
   Correr desde la raíz del repo:  node scripts/probar_etapas.mjs
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const RAIZ = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const lee = (f) => fs.readFileSync(path.join(RAIZ, 'public', f), 'utf8');

const fallos = [];
const ok = [];
function afirmar(cond, msg) { (cond ? ok : fallos).push(msg); }

/* Estructura de prueba: la forma real del archivo compartido, recortada. Si el formato
   cambia en planoexactocr y acá no, estas pruebas lo avisan. */
const ESTRUCTURA = {
  version: '1.0',
  nota: 'Estructura compartida de prueba.',
  fuente: 'Desglose de entregables (prueba)',
  normas: [{ instrumento: 'Ley 4240', fija: 'Contenido mínimo', estado: 'Vigente' }],
  clases_ifa: [
    { valor: 1, numeral: 'I', fragilidad: 'Muy baja', color: '#3d983a', estrategia: 'Fomentar' },
    { valor: 2, numeral: 'II', fragilidad: 'Baja', color: '#94d180', estrategia: 'Controlar' },
    { valor: 3, numeral: 'III', fragilidad: 'Moderada', color: '#ffff33', estrategia: 'Condicionar' },
    { valor: 4, numeral: 'IV', fragilidad: 'Alta', color: '#ff7f00', estrategia: 'Restringir' },
    { valor: 5, numeral: 'V', fragilidad: 'Muy alta', color: '#e41a1c', estrategia: 'Prohibir' }
  ],
  etapas: [
    { numero: 1, nombre: 'Preparación preliminar', bloque: 'Elaboración', lidera: 'Municipalidad', revisa: 'Concejo', cierra: 'Expediente de inicio' },
    { numero: 3, nombre: 'Evaluación ambiental', bloque: 'Elaboración', lidera: 'Proponente', revisa: 'SETENA', cierra: 'EsIVA' },
    { numero: 7, nombre: 'Audiencia Pública', bloque: 'Trámite', lidera: 'Municipalidad', revisa: 'Art. 17', cierra: 'Acta' }
  ],
  productos: [
    { codigo: 'E1.1', etapa: 1, actividad: 'Designar la Comisión', entregable: 'Acuerdo del Concejo', contenido: 'Integrantes y funciones', responsable: 'Concejo', resuelve: 'equipo' },
    { codigo: 'E1.2', etapa: 1, actividad: 'Delimitar el Área', entregable: 'Croquis', contenido: 'Límites y exclusiones', responsable: 'Municipalidad', resuelve: 'atlas' },
    { codigo: 'A4', etapa: 3, actividad: 'Fase II: AAA', entregable: 'Informe AAA', contenido: 'Matriz de compatibilidad', responsable: 'Equipo ambiental', resuelve: 'calibrador' }
  ],
  entregables: [
    { numero: 0, etapa: 1, nombre: 'Expediente de inicio', componentes: 'Comisión, TdR', norma: 'MAPRIOT 2025', revisa: 'Concejo', depende: [], hito: null, mes: null, porcentaje: null },
    { numero: 3, etapa: 3, nombre: 'EsIVA Fase I', componentes: 'Informe IFA', norma: 'DE 44710', revisa: 'Comisión', depende: [2], hito: 'P3', mes: 7, porcentaje: 15 }
  ],
  bloques: [{ codigo: '1', nombre: 'Variable ambiental', etapa: 3, icono: '🌱', descripcion: 'IFA' }],
  componentes: [{ codigo: '1.1', bloque: '1', nombre: 'Geoaptitud' }],
  mapas: [
    { codigo: 'M1.1.90', nombre: 'IFA Geoaptitud', bloque: '1', componente: '1.1', correlativo: '90', etapa: 3, resuelve: 'atlas', atlas: 'geo_integrado', guia_invu: false, condicion: null, observacion: '', sintesis: true },
    { codigo: 'M1.9.04', nombre: 'Capacidad de carga por sector', bloque: '1', componente: '1.9', correlativo: '04', etapa: 3, resuelve: 'calibrador', atlas: null, guia_invu: true, condicion: 'si aplica', observacion: 'El calibrador ya calcula agua', sintesis: true }
  ],
  matriz_compatibilidad: {
    leyenda: { P: 'compatible', C: 'condicionado', R: 'restringido', X: 'incompatible' },
    columnas: ['I', 'II', 'III', 'IV', 'V'],
    filas: [{ zona: 'Centro urbano', clases: ['P', 'P', 'C', 'X', 'X'] }],
    nota: 'Toda celda C o R debe tener su condición escrita en el RDS.'
  },
  condicionantes: [
    { condicionante: 'Fallas activas', ambito: 'Protocolo', norma: 'Franja de retiro', reglamento: 'Zonificación', control: 'Permiso' }
  ],
  reglamentos: [],
  transversales: [{ proceso: 'Participación ciudadana', descripcion: 'Talleres por etapa' }],
  verificar: ['Texto íntegro del Anexo 1 del DE 44710.']
};

// ---------- montaje ----------
function montar({ sinEstructura = false } = {}) {
  const dom = new JSDOM(lee('index.html'),
    { runScripts: 'outside-only', url: 'https://calibrador.planoexactocr.com/' });
  const w = dom.window;
  const pedidos = [];
  w.fetch = async (url) => {
    pedidos.push(String(url));
    if (sinEstructura) return { ok: false, status: 503, json: async () => null };
    return { ok: true, status: 200, json: async () => ESTRUCTURA };
  };
  w.lucide = { createIcons() {} };
  // El estado real del calibrador no hace falta: etapas.js solo usa window.CAL.S y .save.
  let guardados = 0;
  w.CAL = { S: { view: 'etapas' }, save() { guardados++; } };
  w.eval(lee('etapas/etapas.js'));
  return { w, pedidos, cuentaGuardados: () => guardados };
}

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- 1. la pestaña existe y está declarada ----------
const html = lee('index.html');
afirmar(/id="tab-etapas"/.test(html), 'la pestaña "Etapas del PR" está en la barra de pasos');
afirmar(/id="v-etapas"/.test(html), 'existe el panel v-etapas');
afirmar(/VIEWS=\['etapas',/.test(html), 'etapas es la primera vista del recorrido');
afirmar(/etapas\/etapas\.js/.test(html) && /etapas\/etapas\.css/.test(html),
  'index.html carga el módulo de etapas y sus estilos');
afirmar(/ETAPAS\.init\(\)/.test(html), 'la estructura se pide al arrancar');
afirmar(/etapas:\(\)=>\{ if\(window\.ETAPAS\) ETAPAS\.render\(\); \}/.test(html),
  'al abrir la pestaña se pinta el módulo');

// ---------- 2. la estructura viene del mundo público, no de una copia ----------
const js = lee('etapas/etapas.js');
afirmar(/https:\/\/planoexactocr\.com\/data\/estructura_pr\.json/.test(js),
  'lee la estructura de planoexactocr.com, la misma que el atlas');
afirmar(!/"etapas"\s*:\s*\[/.test(js) && !/const ETAPAS_FIJAS/.test(js),
  'no guarda una copia propia de las etapas');

// ---------- 3. pintado con la estructura cargada ----------
const { w, pedidos, cuentaGuardados } = montar();
await w.ETAPAS.init();
w.ETAPAS.render();
await esperar(50);

const $ = (id) => w.document.getElementById(id);
const todos = (s) => [...w.document.querySelectorAll(s)];
const texto = () => $('v-etapas').textContent;

afirmar(pedidos.some((u) => u.includes('estructura_pr.json')),
  'sale a buscar la estructura compartida');
afirmar(todos('#v-etapas .et-card[data-etapa]').length === ESTRUCTURA.etapas.length,
  `pinta una tarjeta por etapa (${todos('#v-etapas .et-card[data-etapa]').length})`);
afirmar(texto().includes('Preparación preliminar') && texto().includes('Audiencia Pública'),
  'las etapas salen con su nombre');
afirmar(texto().includes('Lidera Municipalidad'), 'cada etapa dice quién lidera y quién revisa');
afirmar(todos('#v-etapas .et-bloque').some((e) => e.className.includes('elaboracion')),
  'el bloque del proceso se marca sin tildes en la clase CSS');
// ---------- 4. desplegar una etapa muestra sus productos ----------
const cab1 = w.document.querySelector('.et-head[data-abrir="1"]');
cab1.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
afirmar(texto().includes('Designar la Comisión') && texto().includes('Delimitar el Área'),
  'al desplegar una etapa salen sus productos');
afirmar(texto().includes('Cierra con:'), 'la etapa dice con qué entregable cierra');
afirmar(texto().includes('Expediente de inicio'),
  'la etapa lista sus entregables formales');

// Cada producto dice quién lo resuelve.
const quienes = todos('#v-etapas .et-quien').map((e) => e.className);
afirmar(quienes.some((c) => c.includes('atlas')) && quienes.some((c) => c.includes('equipo')),
  'cada producto dice si lo resuelve el atlas, el calibrador o el equipo');

// ---------- 5. marcar avance ----------
const casilla = w.document.querySelector('[data-prod="E1.1"]');
afirmar(!!casilla, 'cada producto tiene su casilla para marcarlo hecho');
casilla.checked = true;
casilla.dispatchEvent(new w.Event('change', { bubbles: true }));
afirmar(w.CAL.S.etapas && w.CAL.S.etapas['E1.1'] === true,
  'marcar un producto lo guarda en el estado del calibrador');
afirmar(cuentaGuardados() > 0, 'marcar un producto dispara el guardado');
afirmar($('v-etapas').textContent.includes('del proceso marcado'),
  'el resumen de avance se mantiene a la vista');
const marcada = w.document.querySelector('tr.hecho');
afirmar(!!marcada, 'la fila marcada se ve distinta');

// Desmarcar lo quita, no lo deja en false.
const casilla2 = w.document.querySelector('[data-prod="E1.1"]');
casilla2.checked = false;
casilla2.dispatchEvent(new w.Event('change', { bubbles: true }));
afirmar(!('E1.1' in w.CAL.S.etapas),
  'desmarcar borra la marca en vez de guardarla en falso');

// ---------- 6. la etapa ambiental trae las matrices del EsIVA ----------
const cab3 = w.document.querySelector('.et-head[data-abrir="3"]');
cab3.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
afirmar(texto().includes('Matriz C'), 'la etapa ambiental trae la matriz de compatibilidad');
afirmar(todos('#v-etapas .et-tabla.matriz td.c-X').length > 0,
  'la matriz marca las combinaciones incompatibles');
afirmar(todos('#v-etapas .et-ifa').length === 5,
  'la matriz encabeza con las cinco clases del IFA y sus colores');
const colores = todos('#v-etapas .et-ifa').map((e) => e.getAttribute('style'));
afirmar(colores.some((c) => c.includes('#3d983a')) && colores.some((c) => c.includes('#e41a1c')),
  'los colores del IFA vienen de la estructura compartida, no escritos acá');
afirmar(texto().includes('Matriz D') && texto().includes('Fallas activas'),
  'la etapa ambiental trae las condicionantes y su norma');
afirmar(texto().includes('P3') && texto().includes('mes 7') && texto().includes('15%'),
  'los entregables formales muestran su hito de pago, mes y porcentaje');
afirmar(texto().includes('Depende de: #2'),
  'los entregables muestran de qué otro entregable dependen');

// ---------- 7. los mapas de la etapa ----------
const btnMapas = w.document.querySelector('[data-mapas="3"]');
afirmar(!!btnMapas, 'la etapa ofrece ver los mapas que le toca producir');
btnMapas.dispatchEvent(new w.MouseEvent('click', { bubbles: true }));
afirmar(texto().includes('M1.1.90'), 'los mapas salen con su código del índice maestro');
const enlaces = todos('#v-etapas .et-link');
afirmar(enlaces.length > 0 && enlaces[0].href.includes('atlas.planoexactocr.com'),
  'los mapas del atlas enlazan al atlas');
const filaCalib = todos('#v-etapas .et-tabla.mapas tbody tr')
  .find((r) => r.textContent.includes('Capacidad de carga'));
afirmar(filaCalib && !filaCalib.querySelector('.et-link'),
  'un mapa que resuelve el calibrador no manda al atlas');

// ---------- 8. transversales, normas y puntos a verificar ----------
afirmar(texto().includes('Procesos transversales') && texto().includes('Participación ciudadana'),
  'muestra los procesos que atraviesan todas las etapas');
afirmar(texto().includes('Marco normativo') && texto().includes('Ley 4240'),
  'muestra el marco normativo');
afirmar(texto().includes('Puntos a verificar') && texto().includes('Anexo 1'),
  'deja a la vista lo que falta confirmar antes de firmar unos TdR');

// ---------- 9. sin estructura, lo dice ----------
{
  const m2 = montar({ sinEstructura: true });
  await m2.w.ETAPAS.init();
  m2.w.ETAPAS.render();
  const t2 = m2.w.document.getElementById('v-etapas').textContent;
  afirmar(t2.includes('No se pudo leer la estructura compartida'),
    'sin estructura avisa en lugar de quedarse en blanco');
  afirmar(!!m2.w.document.getElementById('etReintentar'),
    'sin estructura ofrece volver a intentar');
  afirmar(t2.includes('503'), 'sin estructura dice por qué falló');
}

/* ---------- 10. contra la estructura de verdad, si está a mano ----------
   Las pruebas de arriba usan una estructura de prueba recortada. Esta comprueba que el
   archivo real —el que publica planoexactocr— tenga de verdad los campos que este módulo
   lee, y que ningún producto, entregable o mapa quede huérfano de etapa (saldría invisible
   en la pestaña y nadie se enteraría). Si el repositorio de planoexactocr no está al lado,
   se omite. */
{
  const candidatos = [
    path.join(RAIZ, '..', 'planoexactocr', 'data', 'estructura_pr.json'),
    path.join(RAIZ, 'public', 'data', 'estructura_pr.json')
  ];
  const ruta = candidatos.find((c) => fs.existsSync(c));
  if (!ruta) {
    ok.push('real: omitida (no se encontró data/estructura_pr.json al lado)');
  } else {
    const real = JSON.parse(fs.readFileSync(ruta, 'utf8'));
    const numeros = new Set(real.etapas.map((e) => e.numero));
    const huerfanos = [
      ...real.productos.filter((x) => !numeros.has(x.etapa)).map((x) => x.codigo),
      ...real.entregables.filter((x) => !numeros.has(x.etapa)).map((x) => '#' + x.numero),
      ...real.mapas.filter((x) => !numeros.has(x.etapa)).map((x) => x.codigo)
    ];
    afirmar(huerfanos.length === 0,
      `real: ningún producto, entregable o mapa queda sin etapa (${huerfanos.join(', ')})`);

    const campos = ['etapas', 'productos', 'entregables', 'mapas', 'bloques', 'componentes',
      'clases_ifa', 'matriz_compatibilidad', 'condicionantes', 'transversales', 'verificar',
      'normas'];
    const faltan = campos.filter((c) => !real[c]);
    afirmar(faltan.length === 0, `real: trae todas las secciones que el módulo lee (faltan: ${faltan.join(', ')})`);

    afirmar(real.clases_ifa.length === 5 && real.clases_ifa.every((c) => c.color && c.numeral),
      'real: las cinco clases del IFA traen numeral y color');

    const m3 = montar();
    m3.w.ETAPAS._usar(real);
    m3.w.ETAPAS.render();
    const casillasReales = [...m3.w.document.querySelectorAll('[data-prod]')].length;
    // Sin desplegar nada solo salen las casillas de las etapas abiertas: ninguna.
    afirmar(casillasReales === 0, 'real: arranca con todas las etapas plegadas');
    real.etapas.forEach((e) => {
      const h = m3.w.document.querySelector(`.et-head[data-abrir="${e.numero}"]`);
      if (h) h.dispatchEvent(new m3.w.MouseEvent('click', { bubbles: true }));
    });
    const tarjetas = [...m3.w.document.querySelectorAll('.et-card[data-etapa]')].length;
    afirmar(tarjetas === real.etapas.length,
      `real: pinta las ${real.etapas.length} etapas (${tarjetas})`);
    const casillas = [...m3.w.document.querySelectorAll('[data-prod]')].length;
    const esperadas = real.productos.length + real.entregables.length;
    afirmar(casillas === esperadas,
      `real: ofrece marcar los ${esperadas} productos y entregables (${casillas})`);
  }
}

// ---------- resultado ----------
console.log('\n=== PRUEBAS DE LAS ETAPAS DEL PR ===');
ok.forEach((m) => console.log('  ok  ' + m));
if (fallos.length) { console.log('\nFALLOS:'); fallos.forEach((m) => console.log('  XX  ' + m)); }
console.log(`\n${ok.length} ok, ${fallos.length} fallos`);
process.exit(fallos.length ? 1 : 0);

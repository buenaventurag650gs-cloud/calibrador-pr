# Calibrador de perillas · Plan regulador

Sitio estático (una sola página) para calibrar las perillas de un plan regulador por zona del transecto.
No necesita servidor ni base de datos: todo corre en el navegador y los escenarios se guardan en el navegador de cada persona.

## Contenido

- `public/index.html` — la herramienta.
- `public/etapas/etapas.js` — **pestaña 1, Etapas del PR**: el proceso completo del plan regulador.
- `public/etapas/etapas.css` — estilos de esa pestaña.
- `scripts/probar_etapas.mjs` — pruebas de la pestaña de etapas en un navegador simulado (necesita `npm install jsdom`).
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

## Etapas del Plan Regulador (pestaña 1)

El recorrido completo, de la preparación preliminar a la publicación en La Gaceta: las 9 etapas
del MAPRIOT 2025 más el seguimiento, con sus productos, sus 15 entregables formales (que sirven
de hitos de pago) y el índice maestro de mapas.

**La estructura no está escrita en este repositorio.** Se lee de
`https://planoexactocr.com/data/estructura_pr.json`, el mismo archivo que lee
atlas.planoexactocr.com. La razón: si cada herramienta guardara su propia lista de etapas y su
propia numeración de mapas, se desincronizarían, y el expediente que llega al INVU no cuadraría
consigo mismo. Un solo archivo, dos lectores. Se genera con
`scripts/construir_estructura_pr.py` del repositorio `planoexactocr`, a partir del desglose de
entregables (Ley 4240, MAPRIOT 2025 del INVU y DE 44710-MINAE).

Cada producto y cada mapa declara **quién lo resuelve**:

- `acá` — lo hace el calibrador (zonificación, escenarios, demanda de suelo, capacidad de carga, reglamentos).
- `atlas` — la lámina la arma el atlas (mapa base y los cuatro componentes del IFA).
- `equipo consultor` — a mano: campo, laboratorio, trámite.

La etapa 3 (variable ambiental) además trae la **Matriz C** de compatibilidad zona × clase IFA y
la **Matriz D** de condicionante → norma → reglamento, que son las Fases II y III del EsIVA y le
tocan a esta herramienta.

El avance marcado se guarda en el navegador y es **del plan, no de un escenario**: cambiar de
escenario calibrado no mueve la lista de pendientes.

## Reglamentos (pestaña 8)

Cada reglamento del plan (00 Generalidades a 09 Audiencia Pública) tiene un borrador cuyo texto está **conectado a las perillas**: al calibrar, los artículos y tablas se actualizan solos.

- **Ver resultado:** el texto final con los valores. Los valores en dorado fueron calibrados (distintos al de partida), en rojo están las perillas sin definir y en amarillo el texto por completar.
- **Editar texto:** se puede cambiar la redacción, agregar o mover artículos y capítulos e insertar valores del calibrador. Los cambios se guardan en el navegador y viajan con el escenario.
- **Descargar Word:** genera un .docx tamaño carta con tablas.
- **Descargar PDF:** genera un PDF tamaño carta a partir de la misma vista de «Ver resultado» (usa `vendor/html2canvas` + `vendor/jspdf`, paginado por artículo/tabla para no cortarlos a la mitad).

Estado de los borradores:
- 01 Zonificación: adaptado del Reglamento de Zonificación y Forma Urbana de Liberia.
- 02 Fraccionamiento y Urbanizaciones: adaptado del Reglamento de Fraccionamiento y Urbanización de Liberia.
- 03 Mapa Oficial: adaptado del Reglamento de Mapa Oficial de Liberia. Las tablas de inventario (bienes públicos, vialidad, zonas de interés municipal) son propias de cada cantón y quedan como `[[ ]]` para incorporarlas como anexo.
- 04 Renovación Urbana e Instrumentos de Gestión del Suelo: adaptado del reglamento homónimo de Liberia. El listado de proyectos de renovación urbana (RUA/RUV/RUU) es propio de cada cantón y queda como `[[ ]]`.
- Los demás: se puede crear un esqueleto desde las perillas mientras llega el texto base.

Nota de estilo: desde noviembre 2026 la pestaña de Reglamentos tiene un diseño más moderno (tarjetas, barra lateral con insignias, tablas con cebra, reglas de color en encabezados). Los estilos que usan `color-mix()` no se aplican en el host que arma `downloadPdf()` (ver `.rg-pdf-render` en `reglamentos.css`), porque `html2canvas` 1.4.1 no soporta esa función CSS.

Formato del texto en `textos.js`: ver el comentario al inicio de `motor.js`.

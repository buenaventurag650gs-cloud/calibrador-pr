# Calibrador de perillas · Plan regulador

Sitio estático (una sola página) para calibrar las perillas de un plan regulador por zona del transecto.
No necesita servidor ni base de datos: todo corre en el navegador y los escenarios se guardan en el navegador de cada persona.

## Contenido

- `public/index.html` — la herramienta.
- `public/etapas/etapas.js` — el proceso del plan regulador. Sirve tres secciones con el mismo código: **Etapas del PR** (todo), **Insumos** (etapas 1 a 5) y **Trámite** (8 a 10).
- `public/etapas/etapas.css` — estilos de esas secciones.
- `public/participacion/participacion.js` — **Participación ciudadana**: los momentos de participación por etapa, la audiencia pública y la matriz de respuestas.
- `public/participacion/participacion.css` — estilos de esa sección.
- `scripts/probar_etapas.mjs` — pruebas de la pestaña de etapas en un navegador simulado (necesita `npm install jsdom`).
- `public/reglamentos/textos.js` — **texto base de los reglamentos** (aquí se cargan los borradores).
- `public/reglamentos/motor.js` — conecta el texto con las perillas, el editor y la descarga en Word.
- `public/reglamentos/reglamentos.css` — estilos de la sección Reglamentos.
- `public/vendor/` — librerías incluidas (íconos Lucide, jsPDF, jsPDF-AutoTable, lz-string). No depende de CDN externos.
- `public/fonts/` — tipografía Public Sans incluida.
- `public/escudos.json` — escudos municipales de los 82 cantones (cantón → URL en el CDN de munis.cr). Lo usa la portada del PDF.
- `public/_headers` — cabeceras de seguridad y caché.
- `worker.js` — script del Worker: sirve el sitio y agrega el endpoint `/api/escudos`.
- `wrangler.jsonc` — configuración para Cloudflare Workers (static assets + el script de arriba).

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

## Cómo está organizada

La barra de arriba sigue el proceso de elaboración de un plan regulador, no una lista de herramientas. Son seis secciones:

| Sección | Qué trae | Etapas del proceso |
| --- | --- | --- |
| **Etapas del PR** | El proceso completo con su avance, los procesos transversales, el marco normativo y los puntos a verificar antes de firmar unos TdR. | 1 a 10 |
| **Insumos** | Lo que tiene que estar listo antes de calibrar: preparación, mapa base, evaluación ambiental, diagnóstico y pronóstico. Casi todo lo resuelve el atlas o el equipo; acá se lleva el avance. | 1 a 5 |
| **Propuesta** | Las herramientas de calibración, en una segunda fila: Perillas, Calibrar, Prácticas incentivables, Ficha del transecto, Gráficos y Reglamentos. | 6 |
| **Participación** | Los momentos de participación etapa por etapa, la audiencia pública del art. 17 y la matriz de respuestas a las observaciones. | transversal + 7 |
| **Trámite** | Revisión del INVU, adopción por el Concejo con publicación en La Gaceta, y seguimiento. | 8 a 10 |
| **Glosario** | Glosario general del proceso: términos de las etapas, el trámite y la participación, más los conceptos y fórmulas del sistema de perillas. | — |

Dos detalles de implementación que conviene saber:

- **Insumos y Trámite no son módulos aparte.** Son la misma estructura de `etapas.js` con otro recorte de etapas (ver `VISTAS` en ese archivo). Así, una corrección en la norma llega a las tres secciones a la vez.
- **El avance es del plan, no del escenario.** El avance de las etapas (`S.etapas`) y el de participación (`S.pc`) quedan fuera del escenario a propósito: un mismo plan puede tener varios escenarios calibrados, y cambiar de escenario no debe mover la lista de pendientes ni las observaciones recibidas.

### Participación ciudadana

La estructura compartida la declara como proceso transversal: «talleres por etapa; el MAPRIOT 2025 la trata como proceso continuo, no solo como la audiencia final». Por eso la sección tiene las dos cosas:

- **Momentos de participación por etapa.** Ocho momentos, de mapear actores en la preparación a rendir cuentas en el seguimiento, cada uno con qué busca y qué deja por escrito. Ojo: esto es **guía de trabajo, no norma**. El MAPRIOT fija el principio de participación continua pero no una lista cerrada de talleres; cada cantón arma los suyos. Está dicho así en pantalla para que nadie lo cite como obligación legal.
- **Audiencia Pública (art. 17 Ley 4240).** Es la etapa 7 y se lee de la estructura compartida, así que si cambia la norma cambia sola.
- **Matriz de respuestas.** Tabla editable con cada observación recibida, la respuesta de la Municipalidad y si se acogió, se acogió en parte o no. Se copia con un botón para pegarla en el expediente que va al INVU.

## Etapas del Plan Regulador

Desde cada mapa del índice maestro, el botón **abrir atlas** lleva a
`atlas.planoexactocr.com/?canton=…&mapa=…`: el atlas elige ese cantón y abre ese mapa. Si el
mapa todavía no se puede dibujar, el atlas abre su estructura cartográfica en esa fila, que
es donde dice qué insumo le falta.

Dos cosas de la numeración que parecen errores y no lo son:

- La etapa 3 numera sus pasos **A1 a A9**, no E3.1 en adelante. Así los numera el desglose,
  porque son la ruta procedimental del EsIVA ante SETENA, no productos del plan.
- Un **hito de pago puede cubrir varios entregables**: el P5 cubre el 5 y el 6, el P6 el 7 y
  el 8, y el P7 el 9, el 10 y el 11. Cada entregable dice con cuáles comparte el suyo.


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

## Reglamentos (dentro de Propuesta)

Cada reglamento del plan (00 Generalidades a 09 Audiencia Pública) tiene un borrador cuyo texto está **conectado a las perillas**: al calibrar, los artículos y tablas se actualizan solos.

- **Ver resultado:** el texto final con los valores. Los valores en dorado fueron calibrados (distintos al de partida), en rojo están las perillas sin definir y en amarillo el texto por completar.
- **Editar texto:** se puede cambiar la redacción, agregar o mover artículos y capítulos e insertar valores del calibrador. Los cambios se guardan en el navegador y viajan con el escenario.
- **Descargar Word:** genera un .docx tamaño carta con tablas.
- **Descargar PDF:** genera un PDF tamaño carta a partir de la misma vista de «Ver resultado» (usa `vendor/html2canvas` + `vendor/jspdf`, paginado por artículo/tabla para no cortarlos a la mitad). Lleva portada propia (ver abajo) y el PDF siempre sale en tema claro, sin importar el tema de la pantalla desde la que se genera. Mientras se arma muestra un aviso con el paso real (qué página va), una barra de avance y un botón para cancelar: un reglamento largo toma su rato y un botón girando no dice si algo está pasando o si se colgó. El número de páginas que anuncia al empezar es una estimación —un bloque más alto que la página se reparte en varias—, así que al final informa el número de verdad.

### Portada del PDF

La primera página siempre es una portada: nombre de la municipalidad, escudo del cantón, título del reglamento y crédito de PlanoExactoCR.

- **Escudo municipal:** se pide al endpoint propio `/api/escudos?canton=<cantón>` (ver `worker.js`), que lo devuelve en base64. Hace falta el rodeo porque el CDN de munis.cr, donde viven los escudos, no manda cabeceras CORS y bloquea el hotlink: el navegador no puede meterlo en un canvas sin "ensuciarlo", y un canvas sucio no se puede exportar a PDF. El Worker sí lo puede pedir, porque corre en el borde de Cloudflare. Si el cantón no está en la base o el endpoint no responde en 8s, la portada sigue sin escudo (círculo con la palabra "Escudo").
- **Logo de PlanoExactoCR:** el isotipo va incrustado como SVG directo en `motor.js` (constante `PE_LOGO_SVG`), sin depender de red.
- **Por qué una copia propia y no la del atlas:** el atlas de PlanoExactoCR tiene este mismo endpoint, pero está detrás de Cloudflare Access con su propia política. Una petición desde otro dominio no lleva la cookie de sesión de ese dominio, así que Access la intercepta y devuelve la pantalla de login en vez del escudo. Con el endpoint en el propio Worker la petición es del mismo origen y viaja con la sesión de Access que el usuario ya tiene abierta. La contra es que la base está duplicada: si se corrige un escudo hay que corregirlo en `public/escudos.json` de acá **y** en `muni/escudos.json` del atlas.

El texto de los borradores es propio: lo redactó el equipo y acá se conecta a las perillas. El campo `fuente` de cada reglamento no es una atribución: se usa solo cuando hay una advertencia que dar sobre el contenido, y queda vacío cuando no hace falta.

Estado de los borradores:
- 01 Zonificación: redactado.
- 02 Fraccionamiento y Urbanizaciones: redactado.
- 03 Mapa Oficial: redactado. Las tablas de inventario (bienes públicos, vialidad, zonas de interés municipal) son propias de cada cantón y quedan como `[[ ]]` para incorporarlas como anexo.
- 04 Renovación Urbana e Instrumentos de Gestión del Suelo: redactado. El listado de proyectos de renovación urbana (RUA/RUV/RUU) es propio de cada cantón y queda como `[[ ]]`.
- Los demás: se puede crear un esqueleto desde las perillas mientras llega el texto base.

Nota de estilo: desde noviembre 2026 la pestaña de Reglamentos tiene un diseño más moderno (tarjetas, barra lateral con insignias, tablas con cebra, reglas de color en encabezados). El host que arma `downloadPdf()` (clase `.rg-pdf-render` en `reglamentos.css`) fija su propia paleta clara —no hereda el tema oscuro de la pantalla— y reemplaza cada `color-mix()` por su color plano equivalente, porque `html2canvas` 1.4.1 no soporta ni el tema oscuro vía variables heredadas ni esa función CSS; sin esto el texto salía gris claro y las cajas oscuras eran ilegibles sobre el fondo blanco del PDF cuando se generaba desde una pantalla en modo oscuro.

Formato del texto en `textos.js`: ver el comentario al inicio de `motor.js`.

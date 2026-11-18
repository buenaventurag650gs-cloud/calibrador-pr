/* Borradores base de los reglamentos.
   Cada reglamento: {id, t, fuente, caps:[{t, x?, arts:[{id, t, x, pz?}]}]}
   El formato del texto está explicado al inicio de motor.js.
   01 Zonificación: adaptado del Reglamento de Zonificación y Forma Urbana del Plan Regulador de Liberia. */
window.REG_BASE = window.REG_BASE || {};

window.REG_BASE['01'] = {
id: '01',
t: 'Reglamento de Zonificación y Forma Urbana',
fuente: 'Borrador adaptado del Reglamento de Zonificación y Forma Urbana del Plan Regulador de Liberia. Los valores salen del calibrador.',
caps: [
{ t: 'Disposiciones generales',
  x: `Que la Municipalidad de {{canton}}, reconociendo la necesidad de reglamentar el uso del suelo y la infraestructura en su jurisdicción, dicta el presente Reglamento de Zonificación, que será aplicado en la totalidad del territorio del cantón de {{canton}}, de acuerdo con lo dispuesto en la Ley de Planificación Urbana N.º 4240 del 15 de noviembre de 1968, sin perjuicio de las facultades que la ley otorga al Ministerio de Salud y a la Dirección de Urbanismo del Instituto Nacional de Vivienda y Urbanismo.
Que este reglamento se complementa con el Mapa de Zonificación y con los mapas oficiales de vialidad y de restricciones, los cuales actúan como instrumentos técnicos de referencia y aplicación, así como con las demás normas legales vigentes relacionadas con el desarrollo urbano que no se opongan a su contenido.
Que algunos usos del suelo pueden generar molestias al entorno inmediato, por lo que resulta necesario el ejercicio de controles coordinados por parte de las entidades competentes, con el fin de mitigar impactos y favorecer la adecuada convivencia en zonas de uso mixto.
Que la clasificación de los usos según su impacto sobre las actividades vecinas facilita la gestión urbana y otorga claridad en la aplicación del Reglamento; no obstante, la incorporación de nuevos usos o la modificación de los existentes únicamente podrá realizarse mediante el procedimiento formal de reforma del Plan Regulador, conforme al artículo 17 de la Ley de Planificación Urbana N.º 4240. En consecuencia, únicamente serán permitidos los usos expresamente establecidos en la Tabla de Usos del Plan Regulador debidamente aprobado y publicado en el Diario Oficial.
Que la zonificación utiliza la metodología del código inteligente de zonificación (SmartCode), con el objetivo de designar las zonas del cantón no por su uso sino con base en sus características físicas, su relación con el medio ambiente y su impacto, desde las zonas más naturales hasta las más urbanas.
Que el concepto del transecto fue desarrollado por la firma Duany Plater-Zyberk y luego adaptado al Código Urbano Inteligente (SmartCode), herramienta de uso abierto y público, que en este reglamento se adapta al español y a las condiciones y términos locales de Costa Rica y del cantón de {{canton}}.
Que no se recomienda la urbanización total de los lotes, a fin de preservar áreas verdes que mitiguen los efectos de las lluvias sobre el sistema pluvial, contribuyan al equilibrio hidrológico y mejoren la calidad urbana y arquitectónica del entorno.
Que el desarrollo debe buscar un balance entre la altura y el espacio urbano, de tal manera que no existan sensaciones de cañones aislados y no se imposibilite la vista a las montañas y paisajes.
Que una construcción en altura puede garantizar una mayor densidad habitacional, con oferta de vivienda asequible que aproveche la infraestructura actual, concentrando medios de trabajo, estudio y recreación.
Que el retiro frontal o antejardín representa una transición entre el espacio urbano y el edificio, que amplía el campo visual, minimiza el impacto de la edificación sobre el peatón y ofrece nuevo espacio a la ciudad.`,
  arts: [
  { id: 'objetivos', t: 'Objetivos de planificación', x: `Son objetivos del presente reglamento:
a) Definir la extensión futura del área urbana y rural para coordinar la provisión programada de servicios básicos, equipamiento comunal, vivienda, usos del suelo y red vial, tanto por parte de la Municipalidad como de otras entidades públicas y de la inversión privada.
b) Proteger las áreas periféricas de los centros poblados del cantón frente a un desarrollo prematuro, dentro de una previsión razonable de expansión urbana, resguardando el uso agrícola y las áreas de reserva mediante el gradiente de zonas del transecto.
c) Promover y proteger la salud, seguridad, comodidad, economía y bienestar de la población.
d) Regular el crecimiento urbano del cantón, para evitar que la tierra sea empleada en usos inadecuados en relación con su vocación, potencialidad o medio físico natural.
e) Utilizar en forma racional el suelo urbano, actual y futuro, mediante la definición de factores de ocupación y de aprovechamiento y de prácticas de desarrollo orientado al transporte.
f) Promover el desarrollo de usos mixtos por medio de proyectos integrales que satisfagan varias necesidades de los habitantes.
g) Evitar la especulación del suelo contiguo al área urbana, mediante la delimitación del crecimiento urbano y la definición de los usos y destinos del suelo.
h) Optimizar el uso del suelo con aptitud urbana, priorizando la consolidación de áreas urbanas subutilizadas, de baja densidad u ociosas, a fin de aprovechar la infraestructura y el equipamiento existentes.
i) Proponer un crecimiento racional del suelo urbano por etapas progresivas, según las tendencias previstas de crecimiento poblacional, de reservas habitacionales y otras demandas de suelo urbano, con espacios públicos diseñados para una adecuada interacción social.` },
  { id: 'gentrificacion', t: 'Mitigación de la gentrificación', x: `Se faculta al Concejo Municipal a implementar políticas, planes y programas orientados a mitigar los efectos del proceso de gentrificación que conlleva el desarrollo urbano, pudiendo para ello:
a) Establecer políticas que promuevan la construcción de viviendas asequibles dentro del área intervenida.
b) Promover, en coordinación con otras instituciones públicas competentes, mecanismos de protección a la población arrendataria en áreas sujetas a procesos de transformación urbana, conforme al marco legal vigente en materia de arrendamientos.
c) Desarrollar instrumentos de planificación territorial que contemplen zonificación inclusiva, permitiendo viviendas mixtas que incluyan unidades habitacionales de distintos niveles socioeconómicos. La proporción de vivienda asequible exigida por zona es la siguiente:
{{tabla:J03|Zonificación inclusiva}}
d) Crear o fortalecer programas de acceso a la vivienda dirigidos a personas o familias de bajos ingresos, especialmente en sectores considerados en riesgo de gentrificación.
e) Promover inversiones en desarrollo comunitario, privilegiando las iniciativas lideradas por residentes locales, que fomenten la cohesión social y la participación de la comunidad.
f) Promover y coordinar con las instancias estatales competentes la aplicación de instrumentos fiscales y de política pública orientados a desincentivar la retención improductiva del suelo urbano y a incentivar su desarrollo conforme a la planificación territorial.` },
  { id: 'transecto', t: 'El transecto', x: `a) Las comunidades deben proveer opciones para la habitación y el asentamiento humano en distintos sectores con base en sus características físicas, su relación con el medio ambiente y su impacto, no basados únicamente en usos del suelo.
b) El transecto obedece a la necesidad de contar con un instrumento de planificación urbana flexible. Su implementación establece una gradación de parámetros urbanos y de disposición de usos de menor a mayor intensidad, desde las zonas más naturales hasta las más urbanas, incrementándose los usos del suelo según su impacto y en función de la escala de las edificaciones y su densidad.
c) Las zonas descritas en las tablas de configuración establecen los lineamientos urbanos del Plan Regulador y se refieren al carácter de cada uno de estos sectores.` },
  { id: 'canton', t: 'El cantón', x: `a) El cantón debe retener y mantener su infraestructura natural y el carácter visual que se deriva de sus condiciones topográficas, bosques de galería y corredores naturales de escorrentía.
b) Las estrategias de crecimiento deben promover primordialmente el desarrollo y la renovación urbana de las áreas centrales ya establecidas.
c) Los proyectos de vivienda asequible deben distribuirse de manera equitativa dentro del cantón, con especial énfasis en los corredores centrales y polos de desarrollo, con el fin de atraer y retener habitantes y empresas que buscan ubicarse cerca del capital humano.
d) Los corredores naturales deben ser utilizados para definir y conectar las áreas urbanizadas.
e) El cantón debe incluir infraestructura de transporte colectivo y sistemas peatonales y para bicicletas, con el fin de proveer alternativas al automóvil particular. Para esto la Municipalidad debe coordinar con las entidades competentes y con las municipalidades de los cantones colindantes.
f) Los corredores de transporte deben ser planificados y diseñados en coordinación con el uso del suelo adyacente y con los planes regionales vigentes. [[Mencionar los corredores o planes regionales propios del cantón.]]` },
  { id: 'comunidad', t: 'La comunidad, el vecindario y el barrio', x: `a) Con el fin de crear un cantón caminable, los vecindarios, barrios y áreas urbanizadas deben ser compactos, orientados al peatón y contener una mezcla adecuada de usos que genere calidad de vida, sin usos molestos ni peligrosos.
b) Los vecindarios y áreas ya urbanizadas deben ser el patrón de desarrollo urbano predominante, y no los distritos o áreas especializadas en un único uso.
c) Las actividades ordinarias de la vida diaria deben ocurrir a una distancia cercana de la mayoría de las viviendas, para dar independencia a las personas que no cuentan con automóvil, especialmente personas jóvenes y adultas mayores.
d) Una red interconectada de vías públicas debe ser diseñada y gestionada con el fin de reducir el impacto vehicular sobre las vías principales, promoviendo alternativas de desplazamiento y acortando la distancia de los viajes.
e) Con el fin de disminuir la gentrificación, dentro de los vecindarios debe desarrollarse un rango variado de tipos y tamaños de vivienda que atienda a personas y familias de distintas edades y capacidad adquisitiva.
f) Deben preverse densidades apropiadas de edificios y usos del suelo en la cercanía de las estaciones de transporte colectivo.
g) Los usos cívicos, institucionales y comerciales deben estar integrados a las áreas urbanas centrales y no aislados en complejos remotos.
h) Escuelas, colegios y centros de enseñanza superior deben ubicarse en lugares a los que niños y jóvenes puedan llegar caminando o en bicicleta, con una escala apropiada al contexto.
i) Una variedad de espacios abiertos y públicos debe distribuirse dentro de los vecindarios y el cantón en general, incluyendo la conservación y creación de plazas, plazoletas, parques urbanos y áreas de juegos infantiles.` },
  { id: 'edificio', t: 'El edificio', x: `a) Los edificios, jardines y arborización deben contribuir a la definición espacial de las vías y los espacios públicos.
b) El desarrollo inmobiliario debe acomodar adecuadamente al automóvil, respetando a la vez al peatón y la configuración espacial de la vía pública, teniendo en cuenta la pirámide de movilidad.
c) El diseño de calles y edificios debe promover ambientes seguros, sin afectar la accesibilidad a los terrenos individuales.
d) La arquitectura y el diseño paisajístico deben nacer de las condiciones climatológicas, topográficas, históricas y culturales locales.
e) Las edificaciones deben responder al clima local por medio de métodos bioclimáticos, preferiblemente pasivos, que reduzcan el consumo energético de sus habitantes y usuarios.
f) Las edificaciones de carácter cívico y los espacios de convivencia pública deben reforzar la identidad de la comunidad; por su papel en el tejido de la ciudad, deben ser distintivas.
g) La preservación y rehabilitación de edificaciones con valor histórico o patrimonial debe ser facilitada y gestionada, con el fin de afirmar la continuidad y evolución de la sociedad.
h) La evolución armónica y ordenada de las áreas urbanas y de expansión debe asegurarse mediante normativas basadas en la forma.` }
  ]
},
{ t: 'Generalidades',
  arts: [
  { id: 'existentes', t: 'Situaciones existentes o de derecho', x: `a) Las superficies y frentes mínimos estipulados en este reglamento para cada zona serán exigibles a los lotes o fincas nuevas, resultado de un fraccionamiento o urbanización, en el momento de otorgar los permisos correspondientes.
b) Los lotes o fincas existentes antes de la entrada en vigencia de esta normativa, cuyas superficies o frentes sean inferiores a los mínimos de su zona, podrán optar por permisos de construcción únicamente para vivienda unifamiliar, siempre que cumplan con las demás disposiciones urbanísticas y técnicas aplicables.
c) Dichos lotes podrán agruparse voluntariamente con predios colindantes, a fin de alcanzar o superar las dimensiones mínimas requeridas y desarrollar proyectos conforme a la normativa vigente.
d) Los requisitos de las construcciones (retiros, coberturas, altura, área de piso, estacionamiento u otros) serán exigibles a las construcciones futuras y al momento de solicitar permiso de construcción, remodelación o ampliación.
e) Las construcciones existentes que no cumplan con los requisitos podrán permanecer igual o adecuarse, siempre en el sentido de ajustarse a la normativa vigente, previo trámite del permiso correspondiente.
Las situaciones existentes en cada zona se tratarán según lo siguiente:
{{tabla:K03|Tratamiento de usos y edificaciones no conformes}}` },
  { id: 'certificado', t: 'Certificado de uso del suelo', x: `a) A solicitud de cualquier interesado, la Municipalidad emitirá un certificado de uso del suelo en el que se hará constar la zona que corresponde a determinado lote o finca.
b) Para los efectos de permisos de construcción, ampliación, remodelación o reconstrucción de edificios o urbanizaciones, el certificado de uso del suelo debe obtenerse de previo a cualquier tramitación.
c) La Municipalidad exigirá el certificado de uso del suelo que especifique la condición del predio para una determinada actividad o permiso de funcionamiento, para efectos de patentes, visados de escrituras o cualesquiera otros.` },
  { id: 'patentes', t: 'Permisos de construcción, patentes y visados', x: `No se concederán patentes ni permisos de uso para inmuebles cuando la actividad solicitada no sea conforme con la zonificación o con cualquier otra disposición de este reglamento. Se exceptúan las actividades que, a la fecha de entrada en vigencia de esta normativa, cuenten con licencia de funcionamiento o permiso de uso válidamente otorgado y vigente, las cuales mantendrán su derecho de funcionamiento. Para efectos de renovación, la Municipalidad no denegará la patente por su condición de uso no conforme y emitirá la resolución de ubicación correspondiente, dejando constancia expresa de dicha condición. Estas actividades no podrán ampliarse, intensificarse ni modificarse hacia usos de mayor impacto, salvo que se ajusten a la zonificación vigente.
El tipo de trámite que corresponde en cada zona es el siguiente:
{{tabla:K01,K02|Tipo de trámite y estudios requeridos}}` }
  ]
},
{ t: 'Parámetros urbanísticos',
  arts: [
  { id: 'parametros', t: 'Parámetros urbanísticos aplicados', x: `Los parámetros urbanísticos constituyen un conjunto de disposiciones y condiciones técnicas que regulan el desarrollo de fraccionamientos y edificaciones. Todo proyecto de desarrollo urbano deberá cumplir estrictamente con los requisitos aquí estipulados para la zona en que se ubique:
a) Densidad.
b) Área de manzana.
c) Área y frente mínimos de lote.
d) Cobertura y área permeable.
e) Altura y coeficiente de aprovechamiento.
f) Retiros.
g) Estacionamientos.` },
  { id: 'incentivos', t: 'Utilización de prácticas incentivables', x: `Con el propósito de promover un desarrollo urbano sostenible, resiliente y de mayor calidad, los proyectos ubicados en {{zonas:inc}} podrán acceder a incentivos urbanísticos mediante la incorporación de las prácticas incentivables establecidas en el Reglamento de Renovación Urbana.
La aplicación de estas prácticas podrá otorgar beneficios sobre los parámetros urbanísticos aplicables al predio, tales como incrementos en la altura, el coeficiente de aprovechamiento o la densidad, hasta los valores máximos con incentivos que este reglamento fija para cada zona.
Cuando un proyecto incorpore más de una práctica incentivable, los beneficios podrán acumularse, siempre que se demuestre el cumplimiento integral de los requisitos de cada una y que la sumatoria de los incentivos no exceda los límites máximos definidos para la zona correspondiente.
Las zonas que admiten edificabilidad adicional son las siguientes:
{{tabla:D06|Zonas con bonificaciones}}
{{practicas}}
La Municipalidad verificará el cumplimiento de las condiciones técnicas aplicables y determinará la procedencia de los incentivos solicitados como parte del proceso de aprobación del proyecto.` },
  { id: 'densidad', t: 'Número máximo de unidades habitacionales', x: `En los fraccionamientos y urbanizaciones de uso residencial, el número máximo de unidades habitacionales por hectárea dependerá de la densidad asignada a la zona correspondiente, según se indica en la siguiente tabla. La densidad bruta se calcula sobre la finca madre; la densidad neta descuenta las vías y las áreas de cesión.
{{tabla:C04,D04,C09|Densidades por zona}}
Para efectos de estimar la población, se utilizará un promedio de {{hpv}} habitantes por vivienda.` },
  { id: 'manzana', t: 'Área de manzana', x: `La dimensión máxima de cada manzana o la distancia máxima entre intersecciones, en nuevas urbanizaciones, se establece en la siguiente tabla:
{{tabla:F05|Tamaño máximo de manzana por zona}}` },
  { id: 'lote', t: 'Área y frente mínimos de lote', x: `Las dimensiones mínimas de superficie y de frente a vía pública de los lotes dependerán de la zona en que se ubique el predio, por lo que deberán cumplir con los valores de la siguiente tabla. El frente mínimo se entenderá como la longitud de la línea de propiedad que colinda con una vía pública legalmente constituida.
{{tabla:C01,C02,C03|Dimensiones mínimas de lote por zona}}
La relación entre el frente y el fondo del lote no podrá exceder el valor indicado para cada zona.
Toda parcela agrícola fraccionada como tal, según el Reglamento de Fraccionamiento y Urbanizaciones, no podrá ser menor a {{v:C01:T2a}} y su uso corresponderá a fines agrícolas.` },
  { id: 'cobertura', t: 'Cobertura y área permeable', x: `Las regulaciones de cobertura se definen por la lógica del costo del terreno y del modelo de ciudad compacta, y deben garantizar una porción del lote sin impermeabilizar. Los valores por zona son los siguientes:
{{tabla:D01,D05|Cobertura máxima y área permeable mínima}}
[[Si el plan lo requiere, indicar aquí la cobertura máxima con incentivos y la condición de saneamiento para alcanzarla (por ejemplo: base con tanque séptico; máxima con sistema de tratamiento de aguas residuales).]]
El sistema de saneamiento exigido en cada zona es el siguiente:
{{tabla:G02|Saneamiento según zona}}` },
  { id: 'alturas', t: 'Alturas y coeficiente de aprovechamiento', x: `Las regulaciones de altura se definen por la lógica del desarrollo orientado al transporte y del modelo de ciudad compacta. La altura de las edificaciones está definida por la altura base, que se obtiene por derecho, más la altura adicional que se consigue por medio de las prácticas incentivables, hasta el máximo de cada zona.
{{tabla:D03,D08,D02,D07|Alturas y coeficiente de aprovechamiento por zona}}
El coeficiente de aprovechamiento resulta de multiplicar la cobertura por la altura y expresa el área construible total respecto al área del lote.
[[Si el cantón tiene zonas de control aeroportuario u otras restricciones de altura, indicar aquí la entidad que las define y el umbral a partir del cual se requiere su aprobación.]]` },
  { id: 'retiros', t: 'Retiros', x: `Las regulaciones de retiros se definen por la lógica del desarrollo orientado al transporte y del modelo de ciudad compacta. Los valores para cada zona son los siguientes:
{{tabla:E01,E02|Retiros por zona}}
El retiro frontal deberá mantenerse como área verde y libre de construcciones permanentes. No se permitirá su utilización como área de estacionamiento ni la instalación de componentes de sistemas electromecánicos u otros elementos fijos que limiten su función urbana.
Se permite el acceso vehicular a la propiedad a través del retiro frontal para ingresar a las áreas de estacionamiento ubicadas dentro del lote. Los retiros podrán contar con cerramientos perimetrales conforme a la normativa vigente.
[[Indicar si el retiro lateral aumenta en edificaciones de más de cuatro u ocho pisos y en cuánto.]]
En ningún caso el retiro podrá ser ocupado por edificaciones o estructuras que contravengan los parámetros establecidos para la zona correspondiente.` },
  { id: 'retiros-adic', t: 'Predios frente a parques públicos, rutas nacionales o vías de travesía', x: `Los predios ubicados frente a parques públicos, rutas nacionales o vías de travesía deben cumplir con un retiro frontal adicional al de su zona, según la siguiente tabla:
|# Retiros frontales adicionales
| Frente a | Retiro adicional | Zonas en que aplica
| Parques públicos | [[1,5 m]] | {{zonas:cu}}
| Rutas nacionales | [[2 a 3 m]] | [[indicar zonas]]
| Vías de travesía | [[1,5 m]] | {{zonas:cu}}
[[Indicar las rutas nacionales y las vías de travesía del cantón a las que aplica este artículo.]]` },
  { id: 'adosamiento', t: 'Adosamiento selectivo', x: `Se permite el adosamiento selectivo de máximo dos lados en {{zonas:cu}}, con el objetivo de favorecer la compacidad, la eficiencia del uso del suelo y la integración con el tejido urbano existente. Esta disposición aplica únicamente para lotes con frente menor a [[15]] metros o fondo menor a [[30]] metros.
a) Adosamiento lateral. Se podrán adosar hasta dos de los linderos laterales, siempre que se compense el retiro de los lados no adosados trasladando esa distancia al retiro frontal, y que se garantice ventilación e iluminación natural mediante patios interiores, patios laterales, cubos de luz u otras soluciones arquitectónicas equivalentes. No se permitirán ventanas ni aberturas en la fachada adosada.
b) Adosamiento posterior. Se permite el adosamiento sobre el lindero posterior siempre que el edificio no tenga ventanas, balcones ni aberturas hacia ese lindero; que el lindero no colinde con áreas verdes públicas, quebradas, servidumbres ni vías públicas; y que el retiro posterior se compense hacia el frente del lote.` },
  { id: 'frentes', t: 'Tipo de frente de las edificaciones', x: `Con el fin de regular y armonizar la estética, la funcionalidad y la seguridad de los frentes de las edificaciones, se establecen las siguientes disposiciones según el tipo de frente:
a) Galería externa: debe mantenerse alineada con la fachada del edificio, ser accesible y segura, cumplir con los estándares de accesibilidad universal y no obstruir el paso de personas.
b) Toldo y vitrina: no deberán sobresalir de los límites de la propiedad ni interferir con el tránsito peatonal.
c) Tapia: debe construirse con materiales permeables que no comprometan la seguridad pública.
d) Pórtico: debe estar alineado con la fachada principal y no obstruir el acceso público.
e) Cerca: debe ser de materiales seguros que no interfieran con la visibilidad en la vía pública.
f) Puerta del sol: puerta esquinera de doble hoja que no deberá sobresalir de los límites de la propiedad, respetando los retiros establecidos.
|# Dimensiones para frentes de edificaciones
| Dimensión | Galería externa | Toldo | Vitrina | Tapia | Pórtico | Cerca
| Ancho | > 3,00 m | 1,50 m | NA | NA | > 2,00 m | NA
| Altura | > 2,40 m | > 2,40 m | > 2,20 m | 2,00 – 2,60 m | > 2,40 m | < 1,50 m
El tipo de frente y de cerramiento exigido en cada zona es el siguiente:
{{tabla:E05|Frente y cerramientos por zona}}
Cualquier modificación de los frentes de los edificios deberá ser previamente aprobada por la Municipalidad, que verificará el cumplimiento de la normativa vigente en seguridad, accesibilidad y armonización con el entorno urbano.` },
  { id: 'estacionamientos', t: 'Estacionamientos', x: `La cantidad y la ubicación del estacionamiento en el lote se regulan según la zona, conforme a la siguiente tabla:
{{tabla:E06|Estacionamiento por zona}}
La dotación mínima de estacionamientos por uso será la establecida en el Reglamento de Construcciones. Los espacios requeridos deberán ubicarse dentro del mismo lote donde se desarrolla la actividad. Excepcionalmente podrá autorizarse su localización en otro inmueble de propiedad privada, siempre que se encuentre dentro de un radio máximo de [[definir]] metros, se formalice mediante un instrumento legal que garantice su permanencia y se asegure el cumplimiento de la cantidad total exigida.
Los estacionamientos ubicados en el derecho de vía no podrán computarse para satisfacer las obligaciones derivadas del uso del suelo y se regirán por el Reglamento de Vialidad y Movilidad.` },
  { id: 'historicos', t: 'Tratamiento especial a inmuebles históricos', x: `Los inmuebles de valor histórico, arquitectónico o cultural podrán acogerse a condiciones urbanísticas especiales para incentivar su conservación y rehabilitación, de conformidad con el Reglamento de Espacio Público y Paisaje. Se consideran inmuebles de valor histórico: (i) los declarados patrimonio histórico-arquitectónico conforme a la Ley N.º 7555; (ii) los identificados en el inventario arquitectónico del cantón [[indicar el inventario de referencia]]; y (iii) los que cuenten con declaratoria municipal de valor histórico mediante acuerdo del Concejo Municipal.
Previa solicitud de la persona propietaria y criterio técnico favorable de la unidad municipal competente en materia de patrimonio, los incentivos podrán incluir:
a) Retiros: se podrá mantener la implantación existente, exonerando los retiros de la zona cuando sean incompatibles con la conservación del inmueble.
b) Estacionamientos: podrán flexibilizarse cuando su cumplimiento afecte la conservación del inmueble.
c) Uso y aprovechamiento: se permitirán los usos compatibles con la zona y ampliaciones o nuevas construcciones en el mismo predio, siempre que se conserve la edificación o los elementos identificados como patrimoniales.
d) Implantación y volumetría: las nuevas construcciones podrán concentrarse en las áreas libres del predio, diferenciándose de la edificación histórica sin imitarla ni alterar su lectura, y armonizando con ella en escala, altura y alineamiento.
La aplicación de estos incentivos estará condicionada a la conservación efectiva de los elementos que sustentan el valor patrimonial del inmueble. En caso de demolición, pérdida o alteración sustancial de dichos elementos, los incentivos quedarán sin efecto y se aplicarán los parámetros ordinarios de la zona, sin perjuicio de las sanciones que correspondan. Tratándose de inmuebles declarados, toda intervención requerirá además la autorización previa del Ministerio de Cultura y Juventud, conforme a la Ley N.º 7555.` }
  ]
},
{ t: 'Zonificación',
  arts: [
  { id: 'zonificacion', t: 'Zonificación por transecto', x: `La zonificación del cantón de {{canton}} se establece mediante la metodología del transecto como base para la organización territorial del Plan Regulador. El territorio se divide en las siguientes zonas:
{{zonas}}
Para la delimitación y asignación de las zonas, la Municipalidad deberá considerar, como criterios mínimos:
a) El catastro oficial municipal vigente.
b) Los casos de demanda de uso del suelo debidamente identificados.
c) Los proyectos de inversión en proceso o formalmente presentados ante la Administración.
d) Los procesos de fortalecimiento distrital definidos por la política municipal.
e) La visión técnica de la comisión del Plan Regulador.
f) Los resultados de los procesos de participación ciudadana realizados para tal efecto.
g) La codificación y principios establecidos en el SmartCode como instrumento técnico de referencia.
Las zonas definidas bajo esta metodología deberán representarse oficialmente en el Mapa de Zonificación del Plan Regulador del cantón de {{canton}}.` },
  { id: 'delimitacion', t: 'Delimitación de las zonas', x: `Cada zona deberá estar representada en el Mapa de Zonificación conforme a su designación específica y el color correspondiente. El Concejo Municipal adopta como herramienta de planificación el código inteligente de zonificación, que clasifica el territorio cantonal en función de sus características físicas, su relación con el medio ambiente y su grado de urbanización, mediante una escala progresiva desde las zonas más naturales hasta las más urbanizadas.
{{tabla:A02,A04,A06|Posición en el transecto, relación con el cuadrante urbano y criterios de delimitación}}
Fuera del cuadrante urbano, la delimitación considera además el valor y la presión de ocupación de cada zona:
{{tabla:A07,A08|Caracterización de valor y de presión}}` },
  { id: 'multiples', t: 'Fincas ubicadas en más de una zona', x: `La persona propietaria de una finca ubicada en más de una zona podrá solicitar a la Municipalidad acogerse a la zona de mayor intensidad, bajo las siguientes consideraciones:
a) En fincas con una superficie superior a una hectárea, que presenten un uso preponderante de al menos [[65 %]] de su área en la zona de mayor intensidad, podrá conferirse el uso del suelo con base en esa zona. De no alcanzarse dicho porcentaje, el uso del suelo se otorgará con base en la zona de menor intensidad.
b) En fincas con una superficie inferior a una hectárea, que presenten un uso preponderante de al menos [[50 %]], podrá conferirse el uso del suelo con base en la zona de mayor intensidad.
c) En cualquier caso, la finca podrá someterse a un proceso de fraccionamiento de tal forma que se aproveche la superficie ubicada en la zona de mayor intensidad.` },
  { id: 'zona', t: 'Zona {{z:codigo}} · {{z:nombre}}', pz: '*', x: `Toda intervención en la zona {{z:codigo}} ({{z:nombre}}) deberá cumplir con los parámetros establecidos en la tabla siguiente. La estrategia de gestión de esta zona es: {{z:A03}}.
{{ficha}}` },
  { id: 'emisoras', t: 'Contribución de las zonas emisoras a la renovación urbana', x: `Las zonas emisoras de derechos de desarrollo son {{zonas:emisoras}}, y las zonas receptoras son {{zonas:receptoras}}.
Se establece una contribución especial del [[0,2 %]] sobre el monto declarado en los permisos de construcción tramitados en las zonas emisoras, con el fin de financiar intervenciones en zonas de renovación urbana por medio del fondo de infraestructura. Esta contribución se aplicará a toda obra nueva, ampliación o urbanización que requiera permiso de construcción en dichas zonas, y deberá cancelarse antes de la emisión del permiso correspondiente.
Los recursos recaudados se destinarán exclusivamente a proyectos de infraestructura, espacio público, servicios básicos y equipamientos en las zonas de renovación urbana.
{{tabla:J01,J02,J04|Instrumentos de gestión por zona}}` },
  { id: 'costera', t: 'Inmuebles de propiedad privada en la franja costera', x: `[[Artículo solo para cantones costeros. Borrar si no aplica.]]
Los inmuebles ubicados dentro de los doscientos metros contados a partir de la línea de pleamar ordinaria, inscritos en el Registro Inmobiliario a nombre de particulares y excluidos de la aplicación de la Ley N.º 6043, Ley sobre la Zona Marítimo Terrestre, conforme a su artículo 6, se regirán por la zonificación y los parámetros de este Plan Regulador correspondientes a la zona continental colindante, según el Mapa de Zonificación. Si colindan con más de una zona, se aplicará aquella con la que tengan mayor longitud de colindancia.
Lo anterior se aplicará sin perjuicio de las áreas de protección, el Patrimonio Natural del Estado y las restricciones de la Ley Forestal N.º 7575, la Ley de Aguas N.º 276, la Ley de Conservación de la Vida Silvestre N.º 7317, la Ley Orgánica del Ambiente N.º 7554 y demás normativa sectorial aplicable, las cuales prevalecerán sobre los parámetros de la zona asignada.
Para el otorgamiento de certificados de uso del suelo, visados o permisos de construcción, el interesado deberá aportar certificación literal del Registro Inmobiliario y plano catastrado. La Municipalidad podrá verificar la ubicación del inmueble respecto del amojonamiento oficial de la zona marítimo terrestre.
Si por resolución administrativa o judicial firme se determina que el inmueble, total o parcialmente, forma parte de la zona marítimo terrestre, esa área quedará sujeta a la Ley N.º 6043 y su Reglamento, y deberá ordenarse mediante el plan regulador costero correspondiente.` }
  ]
},
{ t: 'Usos del suelo',
  arts: [
  { id: 'delim-usos', t: 'Delimitación de usos', x: `Los usos del suelo y las actividades relacionadas serán permitidos, condicionados o prohibidos de acuerdo con las características y disposiciones de cada zona establecidas en el {{art:zonificacion}} del presente reglamento.
Los usos del suelo se clasifican en 31 categorías, de las cuales se deriva un conjunto de actividades específicas detalladas en el Anexo: Tabla de Usos. Estas actividades estarán también sujetas a los requisitos establecidos en los demás reglamentos del Plan Regulador y en las regulaciones nacionales relacionadas.
{{usos}}` },
  { id: 'categorias', t: 'Definición de categorías de usos del suelo', x: `Con el objeto de establecer un marco normativo claro y uniforme para la regulación del uso del suelo y el desarrollo de actividades en el cantón, se definen las siguientes categorías, con fundamento en el Clasificador de Actividades Económicas de Costa Rica (CAECR) 2023:
- Agropecuaria: explotación de recursos vegetales y animales, incluidas las actividades de cultivo, cría y reproducción de animales, explotación de madera y recolección de otras plantas o productos animales, así como actividades conexas como el procesamiento y la comercialización de productos agropecuarios.
- Almacenaje: instalaciones destinadas al almacenamiento y depósito de todo tipo de productos, incluidos silos para granos, almacenes de mercancías, cámaras frigoríficas y tanques de almacenamiento.
- Comercio A: venta directa al consumidor final de bienes de consumo general y prestación de servicios personales de baja complejidad operativa, mínimo impacto urbano-ambiental e integración armónica con entornos residenciales o mixtos.
- Comercio B: comercialización de productos específicos y servicios asociados que requieren espacios de mediana escala y una logística operativa más estructurada.
- Comercio C: comercio formal y servicios que requieren infraestructura de mediana a alta capacidad, atención a un volumen significativo de público y mayores requerimientos logísticos, con un impacto urbano alto.
- Comunidad: infraestructura y servicios orientados al bienestar y la cohesión social, de carácter principalmente no lucrativo.
- Cultura: creación artística, artes escénicas, operación de instalaciones culturales y servicios de entretenimiento, educación y preservación del patrimonio.
- Deporte: explotación de instalaciones deportivas y actividades de organización, promoción o gestión de competiciones deportivas.
- Educación A: servicios educativos, de formación o de cuidado en instituciones de tamaño pequeño o especializado.
- Educación B: educación formal o especializada en instituciones de mayor envergadura.
- Educación C: educación superior y generación de conocimiento, investigación científica y tecnológica.
- Habitación: residencia en diferentes tipologías de vivienda, individuales o compartidas.
- Industria A: producción a pequeña escala en talleres de tamaño reducido, con alto componente de trabajo manual y bajo nivel de impacto.
- Industria B: transformación o procesamiento de materias primas en productos finales o semielaborados mediante procesos mecánicos, químicos o biológicos.
- Industria C: producción masiva con tecnología avanzada y automatización, orientada a mercados amplios.
- Ambiental: operación de parques y reservas naturales y servicios de conservación y mantenimiento de áreas protegidas.
- Recreación A: instalaciones y servicios recreativos diversos, como atracciones mecánicas y acuáticas, juegos, espectáculos y lugares para picnics.
- Recreación B: preparación y servicio de bebidas para consumo en el local, en recintos orientados a la convivencia y la socialización.
- Recreación C: establecimientos de esparcimiento de adultos en horario nocturno, con música, baile, espectáculos o juegos de azar.
- Salud A: atención en instituciones con o sin alojamiento y servicios sociales directos.
- Salud B: consulta y tratamiento médico, laboratorios y otras actividades de salud que no se realizan en hospitales.
- Salud C: actividades hospitalarias de diagnóstico y tratamiento, principalmente para pacientes internos.
- Servicios A: servicios especializados a la comunidad para necesidades de la vida cotidiana.
- Servicios B: servicios comerciales, administrativos o de asistencia especializada.
- Servicios C: servicios de reparación, mantenimiento, fabricación o asistencia técnica.
- Transporte A: espacios de estacionamiento o aparcamiento de vehículos de distintas escalas.
- Transporte B: infraestructura de apoyo al transporte, como energía, recarga o intercambio modal.
- Turismo A: servicios e infraestructura turística de servicio completo.
- Turismo B: servicios e infraestructura turística de servicio limitado.
- Turismo C: servicios e infraestructura turística de servicio mínimo o servicios auxiliares que complementan la experiencia turística.
- Varios: instalaciones relacionadas con procesos a gran escala que implican impactos importantes en el medio ambiente, social o económico.
[[Revisar que las categorías coincidan con las de la Tabla de Usos del cantón.]]` },
  { id: 'regulacion-usos', t: 'Regulación de usos', x: `Con el objetivo de regular las actividades que se desarrollan en el cantón y contribuir a la consolidación de ciertos usos, se definen los siguientes tipos de usos de la tierra:
a) Uso conforme: actividades y obras de edificación que cumplen con las disposiciones de este reglamento.
b) Uso no conforme: actividades y obras de edificación que no se pueden desarrollar en un lote por no cumplir con las disposiciones de este reglamento.
c) Uso no conforme existente: actividades y edificaciones existentes a la fecha de entrada en vigencia del presente reglamento que no son compatibles con sus disposiciones. No se permitirá el crecimiento de estas actividades, y solo se permitirán intervenciones en las construcciones existentes cuando se trate de obras de mantenimiento que no impliquen cambios en la estructura primaria; cuando el inmueble sea de valor histórico, cultural o patrimonial; cuando las remodelaciones sean para cumplir normas de seguridad e higiene; o cuando el inmueble sufra daños por siniestros, caso en el cual se deberá presentar la memoria de cálculo estructural elaborada por un profesional responsable.
La mezcla de usos y la escala máxima de actividad no residencial por zona son las siguientes:
{{tabla:B04,B05|Mezcla de usos y escala máxima de actividad}}
En el suelo rural se regulan además las actividades agropecuarias, el hospedaje y la vivienda por finca:
{{tabla:B06,B07,B08|Actividades en suelo rural, hospedaje y vivienda por finca}}` },
  { id: 'condiciones', t: 'Condiciones a los usos', x: `Todos los usos del suelo deberán cumplir con los requisitos definidos en el Anexo: Tabla de Usos del presente reglamento. Dichas condiciones comprenden los siguientes aspectos:
a) Dimensión de área: valores mínimos o máximos de superficie que cada uso deberá cumplir.
b) Vialidad: compatibilidad de cada uso con el tipo de vía que lo accede y exigencia de infraestructura complementaria, como zonas de carga y descarga o tipo de estacionamiento, según la zona en que se ubique el predio.
c) Control de emisiones contaminantes, incluyendo ruido, olores u otros agentes que puedan afectar la calidad ambiental del entorno inmediato.
d) Manejo adecuado de aguas pluviales, residuales y servidas, conforme a las disposiciones técnicas y ambientales vigentes.
e) [[Restricciones particulares del cantón, por ejemplo por cercanía a un aeropuerto.]]
f) Acatamiento de las disposiciones emitidas por otras autoridades competentes o regulaciones sectoriales aplicables al uso propuesto.
El cumplimiento integral de estas condiciones será necesario para otorgar los permisos de cualquier proyecto o actividad que se pretenda desarrollar en el territorio.` },
  { id: 'restricciones', t: 'Restricciones físico-ambientales y antrópicas', x: `Para la aplicación de la normativa se empleará paralelamente el Mapa de Restricciones, que indicará las condiciones particulares o las limitantes de uso. Las restricciones por zona son las siguientes:
{{tabla:H01,H02,H04,H05|Restricciones ambientales por zona}}
Se consideran, entre otras, las siguientes restricciones:
a) Áreas de protección de ríos y quebradas, según la tabla anterior y la Ley Forestal N.º 7575.
b) Área de protección de nacientes: [[100 m]].
c) Área de protección de pozos: [[30 m]].
d) Cuerpos de agua y humedales.
e) Bosque y corredores biológicos.
f) Pendientes mayores al [[30 %]].
g) Áreas susceptibles a deslizamientos, inundación, lahares y áreas de protección de fallas.
h) Áreas de protección eléctrica: [[15 m]].
i) Áreas de protección de sitios arqueológicos: [[500 m]].
[[Agregar las restricciones propias del cantón (proyectos de infraestructura, embalses, aeropuertos, etc.).]]
Los corredores biológicos que deben conservarse dentro de los predios se regulan según la zona:
{{tabla:H03|Conectividad ecológica}}` },
  { id: 'soporte', t: 'Condiciones de soporte para habilitar el desarrollo', x: `Fuera del cuadrante urbano, no se autorizarán fraccionamientos ni construcciones sin que estén garantizadas las condiciones de soporte que se indican para cada zona. La disponibilidad de agua define la capacidad de carga del territorio.
{{tabla:G06|Condiciones de soporte por zona}}` },
  { id: 'cne', t: 'Gestión del riesgo y coordinación con la Comisión Nacional de Emergencias', x: `En los sitios de riesgo, toda actividad, obra o proyecto deberá ser consultado a la Comisión Nacional de Prevención de Riesgos y Atención de Emergencias (CNE). Con la anuencia de la CNE y sus recomendaciones, la Municipalidad tramitará el permiso respectivo, siguiendo el marco de este reglamento y de los demás reglamentos del Plan Regulador.` },
  { id: 'setena', t: 'Gestión de la variable ambiental y coordinación con la SETENA', x: `Los parámetros establecidos para cada zona se recogen en la Tabla de Usos y en las tablas de parámetros urbanísticos de este reglamento. Se aplicarán las disposiciones emanadas por la SETENA en la viabilidad ambiental del Plan Regulador, incluidas las medidas derivadas de los Índices de Fragilidad Ambiental:
{{tabla:H08|Vinculación con los Índices de Fragilidad Ambiental}}` }
  ]
},
{ t: 'Disposiciones finales',
  arts: [
  { id: 'transitorio', t: 'Transitorio único', x: `La Municipalidad no otorgará permisos de nuevas construcciones, edificios o urbanizaciones que contravengan la zonificación o cualquiera de las disposiciones del presente reglamento. En el documento en que conste el permiso de construcción se establecerán los demás requisitos que afecten la obra.` },
  { id: 'vigencia', t: 'Vigencia', x: `Rige a partir de su publicación en el Diario Oficial La Gaceta.` }
  ]
}
]
};

/* 02 Fraccionamiento y Urbanizaciones: adaptado del Reglamento de Fraccionamiento y Urbanización del Plan Regulador de Liberia. */
window.REG_BASE['02'] = {
id: '02',
t: 'Reglamento de Fraccionamiento y Urbanizaciones',
fuente: 'Borrador adaptado del Reglamento de Fraccionamiento y Urbanización del Plan Regulador de Liberia. Los valores salen del calibrador.',
caps: [
{ t: 'Disposiciones generales',
  x: `Que el artículo 50 de la Constitución Política establece a favor de todos los habitantes de la República el derecho a un ambiente sano y ecológicamente equilibrado, que incluye la conservación, el uso y el manejo sostenible del medio ambiente, así como el cumplimiento de la función social de la propiedad.
Que la Municipalidad de {{canton}}, de conformidad con las facultades que le confieren el artículo 169 de la Constitución Política, el Código Municipal, la Ley de Planificación Urbana N.º 4240 y la Ley General de Caminos Públicos N.º 5060, promulga el presente Reglamento de Fraccionamiento y Urbanizaciones, uno de los reglamentos de desarrollo urbano previstos en el inciso 2) del artículo 21 de la Ley N.º 4240.
Que el diseño geométrico de todo fraccionamiento o urbanización debe ser acorde con las condiciones ecológicas del área, incluyendo la vegetación y el paisaje, considerando tanto el terreno a desarrollar como sus inmediaciones; los lotes resultantes deben tener acceso adecuado a la vía pública.
Que las zonas de carácter comunal deben ser accesibles a toda la población y contribuir con el mejoramiento de la imagen urbana y la calidad de vida de la comunidad, por lo que la Ley de Planificación Urbana obliga la cesión de áreas para uso público en las urbanizaciones.
Que el fraccionamiento sin planificación y sin control es perjudicial para la calidad de vida de los habitantes, pues promueve el hacinamiento y reduce las posibilidades de crear espacios libres y verdes.
Que, para los efectos del presente reglamento, el término Cuadrante Urbano definido por el Instituto Nacional de Vivienda y Urbanismo se equipara a {{zonas:cu}}, según lo establecido en el Reglamento de Zonificación y Forma Urbana.`,
  arts: [
  { id: 'objetivo', t: 'Objetivo', x: `Fijar los principios y elementos que deben considerarse para la división y habilitación urbana de los predios donde se proyecten fraccionamientos, urbanizaciones y conjuntos residenciales. Este reglamento establece los requisitos en relación con derechos de vía, acceso a la vía pública, lotificación, amanzanamiento, parcelamiento, cesión de áreas para uso público, accesos excepcionales para uso residencial, servidumbres agrícolas, pecuarias o forestales, y normas mínimas de vialidad.` },
  { id: 'alcance', t: 'Alcance', x: `El presente reglamento se aplica en todo el cantón de {{canton}}, de acuerdo con las disposiciones locales emitidas por el Gobierno Municipal en materia de fraccionamientos y urbanizaciones. Estas disposiciones deben complementarse con los lineamientos mínimos del Reglamento de Fraccionamiento y Urbanizaciones del INVU.` },
  { id: 'responsabilidad', t: 'Responsabilidad institucional', x: `Las personas funcionarias de la Municipalidad que intervienen en la tramitación de consulta y visado de planos en lo referido a este reglamento son responsables ante los órganos superiores.` },
  { id: 'infracciones', t: 'Infracciones', x: `Las infracciones a lo dispuesto en este reglamento se sancionan de conformidad con el artículo 401, inciso 5, del Código Penal, en tanto no sean aplicables las penas del Capítulo XXI de la Ley de Construcciones N.º 833. Estas acciones pueden ser antecedidas o complementadas por las medidas de policía de los artículos 87 y 88 de la Ley de Construcciones y el artículo 10, incisos 3 al 5, de la Ley de Planificación Urbana N.º 4240.
Las personas funcionarias municipales deben además dar cumplimiento a la Ley de Protección al Ciudadano del Exceso de Requisitos y Trámites Administrativos, N.º 8220, y a la Ley contra la Corrupción y el Enriquecimiento Ilícito en la Función Pública, N.º 8422.` }
  ]
},
{ t: 'Generalidades del fraccionamiento',
  arts: [
  { id: 'tipos-fraccionamiento', t: 'Tipos de fraccionamiento', x: `Los fraccionamientos se deben realizar por medio de alguna de las siguientes modalidades, reguladas en los capítulos siguientes de este reglamento:
a) Fraccionamiento simple.
b) Fraccionamiento con fines urbanísticos.
c) Fraccionamiento para uso residencial, mediante acceso excepcional.
d) Fraccionamiento con fines agrícolas, pecuarios, forestales o mixtos.
La modalidad de fraccionamiento admitida en cada zona depende de su estrategia de gestión y de su relación con el cuadrante urbano:
{{tabla:A03|Estrategia de gestión por zona}}
{{tabla:C06|Modalidades de fraccionamiento admitidas por zona}}
[[Precisar aquí, zona por zona, qué modalidades de fraccionamiento se admiten, siguiendo el criterio: el fraccionamiento simple y el acceso excepcional se reservan a {{zonas:cu}}; el fraccionamiento con fines agrícolas, pecuarios, forestales o mixtos se reserva a {{zonas:fuera}}.]]
Según las características y la ubicación del fraccionamiento, la Municipalidad debe verificar la aplicación de los artículos 10 y 36 de la Ley de Planificación Urbana para emitir el visado respectivo.` },
  { id: 'permisos-visados', t: 'Permisos de construcción, patentes y visados', x: `No se otorgará el visado del artículo 33 de la Ley de Planificación Urbana a lotes producto de un fraccionamiento o urbanización si las porciones resultantes no cumplen con los requisitos de este reglamento y de las normas generales. En caso de reunión de fincas, la Municipalidad podrá otorgar el respectivo visado.` },
  { id: 'derecho-via', t: 'Derecho de vía que enfrente la propiedad a fraccionar', x: `Para todo tipo de fraccionamiento, la Municipalidad solicitará a la persona que fracciona las mejoras que considere necesarias sobre la mitad de la calle a la que se enfrenten los lotes resultantes, incluidas su extensión y la habilitación de los servicios públicos indispensables, según el trámite que indique la Municipalidad.
Todo fraccionamiento debe contemplar, al momento de su construcción, la salida adecuada de las aguas pluviales de los lotes resultantes mediante cordón y caño, conectados al sistema de alcantarillado pluvial cuando exista. Deben construirse además aceras frente a los lotes, conforme a la Ley N.º 7600 de Igualdad de Oportunidades para las Personas con Discapacidad.
Cuando el predio a fraccionar enfrente una vía ya existente, el número de lotes resultantes y sus accesos deben ajustarse a las condiciones de conectividad de esa vía:
{{tabla:F09|Fraccionamiento frente a vía existente}}` },
  { id: 'reunion-predios', t: 'Reunión de predios', x: `La reunión de predios se permite siempre que el lote resultante, así como el resto de la finca fraccionada cuando lo hubiere, cumpla con los parámetros establecidos en el Reglamento de Zonificación y Forma Urbana según su zona.` }
  ]
},
{ t: 'Fraccionamiento simple',
  arts: [
  { id: 'fraccionamiento-simple', t: 'Fraccionamientos simples', x: `Los fraccionamientos simples de predios son permitidos siempre que los lotes resultantes cumplan las siguientes condiciones:
a) Realizar el fraccionamiento dentro de una misma finca madre ubicada en {{zonas:cu}}.
b) Tener acceso directo a vía pública.
c) Contar con disponibilidad de los servicios públicos indispensables: agua, electricidad, evacuación pluvial, residuos sólidos, telefonía e internet.
d) Cumplir con las áreas y frentes mínimos del Reglamento de Zonificación y Forma Urbana.
e) Fraccionar la finca madre en un máximo de [[8]] lotes, respetando el límite de segregaciones por finca madre de la zona:
{{tabla:C05|Segregaciones por finca madre}}
f) Estar al día con los servicios e impuestos municipales.
g) Estar libre de afectaciones o limitaciones urbanísticas que impidan su aprovechamiento, o que estas puedan conciliarse con el fraccionamiento propuesto.
h) Estar ubicado en un área sin restricciones físico-ambientales y antrópicas de las definidas en el Reglamento de Zonificación y Forma Urbana.` },
  { id: 'dimensiones-simple', t: 'Dimensiones mínimas de predios en fraccionamientos simples', x: `En los fraccionamientos simples, el fondo del predio a fraccionar y de los lotes resultantes no debe exceder la relación frente-fondo de su zona. En caso de quedar restos de finca, también deben cumplir dicha relación. El frente y el área mínimos son los establecidos para cada zona en el Reglamento de Zonificación y Forma Urbana:
{{tabla:C01,C02,C03|Dimensiones mínimas de lote en fraccionamiento simple}}
Todo lote resultante debe cumplir con el área mínima; si existen afectaciones por alineamientos, esa área no es computable para el cálculo. Cuando el fraccionamiento simple se realice en una urbanización ya aprobada y recibida por la Municipalidad, los lotes resultantes deben cumplir con el área de lote mínimo de los planos aprobados del proyecto.` },
  { id: 'frente-menor-simple', t: 'Lotes con frente menor a la norma', x: `Se permitirá el fraccionamiento simple de lotes con frente menor al establecido, únicamente dentro de {{zonas:cu}}. En cada finca madre podrá autorizarse un máximo de [[4]] lotes bajo esta condición, siempre que se garantice el aprovechamiento de la infraestructura existente y se cumpla con lo siguiente:
a) Los lotes exteriores deben tener el frente mínimo establecido para su zona.
b) Los lotes interiores deben tener un frente a vía pública de entre 3,00 m y 4,00 m.
c) Los lotes interiores deben tener una franja de acceso, llamada «acceso del predio», de hasta 30,00 m de longitud para 3,00 m de ancho, o hasta 40,00 m para 4,00 m de ancho. Esta franja no es computable para el área mínima del lote ni puede construirse sobre ella, salvo tapias; debe ser uniforme, unidireccional y terminar en ángulo recto.
d) Tanto los lotes interiores como los exteriores deben cumplir con el área mínima de su zona.
Lo anterior sin perjuicio de las disposiciones de los entes competentes en materia ambiental.` },
  { id: 'requisitos-simple', t: 'Requisitos documentales para el visado de fraccionamiento simple', x: `La Municipalidad debe verificar que la finca madre se ubique en una zona autorizada para fraccionamiento simple. Para el visado, el fraccionador debe presentar al menos:
a) Solicitud de visado debidamente llena.
b) Disponibilidad de los servicios de agua y electricidad, con el número de plano catastrado y el número de servicios otorgados.
c) Croquis de segregación georreferenciado, con la minuta de presentación ante catastro.
d) Constancia de estar al día con los tributos municipales.
e) Cuando el predio enfrente ruta nacional, los retiros dados por el MOPT.
f) Plano catastrado certificado de la finca madre, o certificado catastral.
g) Plano georreferenciado del conjunto de lotes resultantes, firmado por el profesional responsable, con frente, fondo y ancho del derecho de vía.
h) Los planos individuales de agrimensura de cada lote resultante, georreferenciados y firmados por el profesional responsable.` }
  ]
},
{ t: 'Fraccionamiento con fines urbanísticos',
  arts: [
  { id: 'fraccionamiento-urbanistico', t: 'Fraccionamientos con fines urbanísticos', x: `Los fraccionamientos con fines urbanísticos son permitidos siempre que los lotes resultantes cumplan con las siguientes condiciones:
a) Realizar el fraccionamiento dentro de una misma finca madre ubicada en una zona autorizada.
b) Cumplir con la cesión de área para uso público regulada en el {{art:cesion-publica-minima}}.
c) Tener acceso directo a vía pública.
d) Cumplir con las áreas y frentes mínimos del Reglamento de Zonificación y Forma Urbana.
e) Contar con disponibilidad de los servicios públicos indispensables: agua, electricidad, evacuación pluvial, residuos sólidos, telefonía e internet.
f) Estar al día con los servicios e impuestos municipales.
g) Estar libre de afectaciones o limitaciones urbanísticas que impidan su aprovechamiento, o que estas puedan conciliarse con el fraccionamiento propuesto.
De no contar con los servicios públicos indispensables, quien fraccione debe costear las obras necesarias fuera de su propiedad para ofrecerlos. Todo fraccionamiento con fines urbanísticos debe proveer la recolección de las aguas pluviales de los lotes para evitar su empozamiento.
Cuando el fraccionamiento se desarrolle de forma agrupada, debe reservarse el siguiente porcentaje de suelo a conservar según su zona:
{{tabla:C07|Suelo a conservar en desarrollo agrupado}}` },
  { id: 'dimensiones-urbanistico', t: 'Dimensiones mínimas de predios en fraccionamientos con fines urbanísticos', x: `El fondo del predio y de los lotes resultantes no debe exceder la relación frente-fondo de la zona. El área y el frente mínimos son los del Reglamento de Zonificación y Forma Urbana según la zona en que se ubique el desarrollo. El predio debe contar con conexión al alcantarillado sanitario o, en su defecto, con tanque séptico u otro sistema de tratamiento conforme a las disposiciones del Ministerio de Salud.
Si existen afectaciones por alineamientos oficiales, esa superficie no es computable para el área mínima de lote. La densidad bruta resultante del fraccionamiento no debe exceder la de su zona, salvo que se acojan al incentivo de densidad del artículo siguiente:
{{tabla:C04,C09|Densidad bruta máxima y con incentivos}}` },
  { id: 'convenios-cuido', t: 'Convenios para el cuido, mantenimiento y atención de áreas públicas', x: `La Municipalidad podrá suscribir convenios con asociaciones de vecinos o personas jurídicas que, por interés directo como beneficiarias, vecinas o usuarias, tengan voluntad de hacerse cargo de la limpieza, el mantenimiento, la vigilancia y la atención de las áreas de cesión pública.` },
  { id: 'cesion-urbanistico', t: 'Cesión de áreas públicas en fraccionamientos con fines urbanísticos', x: `Todo fraccionamiento con fines urbanísticos debe ceder un porcentaje de área para uso público según {{art:cesion-publica-minima}}, siempre que esa área sea igual o mayor a 90 m² y la suma de los lotes a fraccionar sea de 8 o más, ambas condiciones en conjunto. El área cedida debe destinarse a juegos recreativos, parques y facilidades comunales, en ese orden de prioridad.
Cuando el área a ceder esté entre 90,00 m² y 250,00 m², la cesión puede darse en el sitio o en otro predio que determine la Municipalidad según sus necesidades. Si el área a ceder es mayor a 250,00 m², la cesión debe darse en el sitio.
Las áreas cedidas deben traspasarse a favor del dominio municipal y utilizarse según lo indicado para urbanizaciones de uso residencial. La Municipalidad debe llevar el registro de los fraccionamientos y las cesiones de cada finca madre.` },
  { id: 'requisitos-urbanistico', t: 'Certificado de anteproyecto y requisitos documentales', x: `Para solicitar el certificado de anteproyecto de fraccionamiento con fines urbanísticos deben presentarse, entre otros:
a) Plano catastrado de la finca madre o certificado catastral.
b) Certificado de uso de suelo, con el número de planos catastrados, uso, retiros, cobertura, densidad, altura, frente y área mínima aplicables, y su plazo de vigencia.
c) Cuando el predio esté afectado por dos o más zonas, un croquis que identifique las áreas comprendidas en cada una.
d) Anteproyecto digital con la finca madre, los lotes propuestos, las áreas públicas por ceder y un cuadro de áreas, frentes mínimos y numeración de cada lote.
e) Plano georreferenciado del conjunto de lotes y del área a ceder, firmado por el profesional responsable, con frente-fondo, ancho del derecho de vía y mejoras a media calle.
f) Planos individuales de agrimensura de cada lote y de las áreas públicas a ceder, incluido el equipamiento de juegos recreativos.
g) Disponibilidad de los servicios de agua y energía.
La Municipalidad cuenta con un plazo de 15 días hábiles para otorgar el visado; si requiere modificaciones, cuenta con 8 días hábiles adicionales para resolver una vez presentados los documentos.` }
  ]
},
{ t: 'Fraccionamiento para uso residencial',
  arts: [
  { id: 'acceso-excepcional', t: 'Acceso excepcional para uso residencial', x: `Cuando un predio, por su relación de frente y fondo, por la irregularidad de su forma o por su pendiente, resulte imposible de dividir en lotes con acceso directo a la vía pública que cumplan con el área mínima de su zona, se puede admitir la excepción del fraccionamiento mediante la apertura de un acceso excepcional para uso residencial, para una única vivienda unifamiliar por cada lote resultante.
Cualquier autoridad o funcionario de las entidades que prestan servicios públicos puede acceder a los lotes resultantes mediante este acceso, para fines de control municipal, seguridad pública, salud, bomberos y similares. La Municipalidad y otras instituciones públicas no tienen obligación de dar mantenimiento o prestar servicios al acceso ni a los lotes que sirve.` },
  { id: 'ubicacion-acceso', t: 'Ubicación del acceso excepcional', x: `Los accesos excepcionales para uso residencial se permiten únicamente dentro de una misma finca madre ubicada en una zona autorizada para esta modalidad.` },
  { id: 'condiciones-acceso', t: 'Condiciones del acceso excepcional para uso residencial', x: `El acceso excepcional no constituye una vía pública, aunque es de uso común para los lotes resultantes. Debe cumplir con:
a) Un ancho de 6,00 m en todos los casos, dentro de los cuales se debe contemplar cordón y caño y aceras frente a los lotes resultantes, según el Reglamento de Vialidad y Movilidad y la Ley N.º 7600.
b) Una longitud que no exceda 60,00 m medidos desde la vía pública.
c) No ser computable para el área mínima de los lotes que sirve.
d) Frente a este acceso solo se puede fraccionar un máximo de [[6]] lotes, en uno o ambos lados. Los lotes que enfrenten la vía pública no pueden usar el acceso excepcional, salvo que ya estén contabilizados dentro de ese máximo.
No se permiten dos accesos excepcionales paralelos, contiguos ni continuos, salvo que se demuestre con certeza técnica que resulta imposible ubicarlos en otro lugar, análisis que debe autorizar el INVU junto con la Municipalidad.` },
  { id: 'dimensiones-acceso', t: 'Dimensiones mínimas de predios en la excepción para uso residencial', x: `El área mínima de los lotes resultantes y sus frentes deben ser los de su zona. Todo lote resultante debe cumplir con el área mínima; si existen afectaciones por alineamientos, esa área no es computable para el cálculo. El área del acceso no es computable para el área mínima del lote, y sobre ella no pueden hacerse construcciones, salvo tapias en línea de propiedad.` },
  { id: 'requisitos-acceso', t: 'Requisitos documentales para el visado de esta excepción', x: `Debe presentarse, entre otros: solicitud de visado, copia del plano madre, disponibilidad de electricidad y agua potable, constancia de estar al día con los tributos municipales, los retiros dados por el MOPT cuando se enfrente a ruta nacional, la escritura pública del acceso excepcional, el croquis del fraccionamiento y los planos individuales de agrimensura de cada lote, georreferenciados y firmados por el profesional responsable.` },
  { id: 'redes-acceso', t: 'Localización de redes de servicios en la excepción para uso residencial', x: `Las redes de electricidad, acueductos, alcantarillados, telecomunicaciones u otros sistemas deben ubicarse sobre la vía pública. Quien fraccione debe costear las obras necesarias para la conexión de dichos servicios.` }
  ]
},
{ t: 'Fraccionamiento con fines agrícolas, pecuarios, forestales o mixtos',
  arts: [
  { id: 'fraccionamiento-agricola', t: 'Fraccionamiento con fines agrícolas, pecuarios, forestales o mixtos', x: `Los fraccionamientos de parcelas con fines agrícolas, pecuarios, forestales o mixtos tienen acceso a través de una servidumbre agrícola, pecuaria o forestal, y se permiten únicamente dentro de una misma finca madre ubicada en {{zonas:fuera}}.` },
  { id: 'dimensiones-agricola', t: 'Dimensiones mínimas de parcelas', x: `Las parcelas pueden fraccionarse con fines agrícolas, pecuarios, forestales o mixtos siempre que el área mínima de cada una no sea menor a {{v:C01:T2a}} frente a la servidumbre agrícola, y cumpla con los demás parámetros de su zona en el Reglamento de Zonificación y Forma Urbana.` },
  { id: 'cobertura-agricola', t: 'Cobertura máxima', x: `El fraccionamiento de predios y parcelas con fines agrícolas, pecuarios, forestales o mixtos debe ajustarse a los parámetros de cobertura de su zona, y su cobertura no podrá ser mayor al [[25 %]].
De dicha cobertura, hasta un [[10 %]] podrá destinarse, de forma conjunta, a una única vivienda unifamiliar de hasta [[300 m²]], viviendas para trabajadores agrícolas e infraestructura agroturística asociada a la actividad productiva. El porcentaje restante podrá destinarse a infraestructura agropecuaria vinculada a la actividad.
|# Distribución de la cobertura máxima permitida
| Porcentaje del área de la parcela | Tipo de edificaciones permitidas
| 10 % | Una vivienda unifamiliar de hasta 300 m², viviendas de trabajadores agrícolas, infraestructura agroturística
| 15 % | Bodegas, establos, invernaderos, plantas de tratamiento, estanques, corrales, lecherías, silos, caminos internos y demás infraestructura agropecuaria` },
  { id: 'accesos-servidumbre', t: 'Accesos por servidumbre a parcelas con fines agrícolas, pecuarios, forestales o mixtos', x: `Estos accesos deben tener conexión directa a la vía pública y un ancho mínimo de [[7,00 m]]. Deben constituirse en los asientos registrales a favor de cada parcela fraccionada y en contra de la finca que genera el fraccionamiento. El material de la capa de rodamiento debe ser permeable. Este acceso no se categoriza como vía pública, por lo que frente a él no puede realizarse ningún otro tipo de fraccionamiento que no sea el de este capítulo.` },
  { id: 'parcelas-bosque', t: 'Parcelas con cobertura boscosa', x: `Para el fraccionamiento de parcelas con cobertura boscosa, el área mínima debe ser de [[20 000 m²]], de conformidad con la Ley Forestal N.º 7575; para estos casos no aplica el área mínima de la zona que las contenga. La cobertura boscosa existente debe protegerse tanto en los frentes a calle pública como al interior de las parcelas. La Administración Forestal del Estado puede autorizar la intervención del bosque hasta en un [[10 %]] de su área total, de forma gradual.` },
  { id: 'excepcion-cesion', t: 'Excepción de cesión de área pública', x: `Cuando el fraccionamiento se realice en parcelas con fines agrícolas, pecuarios, forestales o mixtos, no se exige la cesión de área pública.` },
  { id: 'requisitos-agricola', t: 'Requisitos documentales para el visado', x: `Debe presentarse, entre otros: solicitud de parcelamiento, constancia de estar al día con los tributos, plano catastrado certificado o certificado catastral, certificado de uso de suelo, el estudio de suelos y capacidad de uso de las tierras aprobado por el INTA, el plano georreferenciado del conjunto de parcelas y de los accesos por servidumbre, y los planos individuales de agrimensura de cada parcela resultante.` }
  ]
},
{ t: 'Generalidades de las urbanizaciones',
  arts: [
  { id: 'condiciones-urbanizar', t: 'Condiciones para urbanizar predios', x: `El desarrollo de urbanizaciones es permitido siempre que el predio a urbanizar:
a) Tenga acceso directo a vía pública.
b) Cuente con sistema de abastecimiento de agua potable, sistema de tratamiento de aguas residuales, sistema de alcantarillado pluvial, disponibilidad de servicio eléctrico y red de telecomunicaciones. De no contar con ellos, quien urbanice debe costear las obras necesarias fuera de su propiedad.
c) Esté libre de afectaciones o limitaciones urbanísticas que impidan su aprovechamiento, o que estas puedan conciliarse con la urbanización propuesta.
Cuando en la colindancia exista una urbanización ya construida, debe darse continuidad a la infraestructura vial mediante su integración física y funcional. El profesional responsable debe considerar en el diseño las condiciones naturales del predio y de sus inmediaciones.` },
  { id: 'agua-potable-urb', t: 'Sistema de abastecimiento de agua potable', x: `Toda urbanización debe contar con un sistema de abastecimiento de agua potable que garantice la disponibilidad del servicio para todos los lotes resultantes. La disponibilidad debe ser otorgada por el AyA, una ASADA u otro operador, conforme al artículo 117 del Reglamento de Construcciones del INVU.
{{tabla:G01|Agua potable por zona}}
Cuando se requiera aumentar el número de lotes o unidades habitacionales de una urbanización o conjunto residencial ya aprobado, también debe contarse con la disponibilidad de agua para los lotes adicionales.` },
  { id: 'tratamiento-aguas-residuales', t: 'Sistema de tratamiento de aguas residuales', x: `En todo proyecto de urbanización, las aguas residuales deben conducirse hacia un alcantarillado sanitario, tanque séptico o sistema de tratamiento equivalente, que garantice la capacidad de depuración. Debe contarse con un documento que certifique la disponibilidad de este servicio.
{{tabla:G02|Saneamiento por zona}}
De no contarse con alcantarillado sanitario, debe construirse hacia una planta de tratamiento (con permiso de ubicación del MINSA) o un tanque séptico o similar (con pruebas de infiltración del suelo).` },
  { id: 'pruebas-infiltracion', t: 'Pruebas de infiltración', x: `Toda urbanización que no cuente con alcantarillado sanitario debe realizar pruebas de infiltración para evaluar la permeabilidad del suelo, conforme al reglamento nacional de aprobación de sistemas de tratamiento de aguas residuales. En caso de alteración sustancial de las condiciones naturales del predio, se requiere una nueva prueba para los niveles finales.` },
  { id: 'alcantarillado-pluvial', t: 'Sistema de alcantarillado pluvial', x: `Las aguas pluviales de todo proyecto de urbanización deben conducirse hacia un sistema de alcantarillado pluvial que garantice el vertido de las aguas de lluvia hacia lugares naturales de disposición, conforme a la normativa técnica del AyA.
{{tabla:G03|Aguas pluviales por zona}}
Para la descarga final debe contarse con autorización de desfogue de la Municipalidad, y las obras de infraestructura deben entregarse al gobierno municipal.` },
  { id: 'terrenos-pendiente', t: 'Terrenos con pendiente y movimiento de tierras', x: `Cuando el terreno donde se desarrolla la urbanización tenga pendiente, deben determinarse las condiciones del movimiento de tierra en cortes, rellenos y taludes:
a) Pendientes mayores al [[15 %]]: debe presentarse un estudio preliminar de suelos y terraceo.
b) Pendientes mayores al [[30 %]]: debe presentarse un estudio de estabilidad del terreno.
Las hileras de lotes y las vías deben colocarse preferiblemente paralelas a las curvas de nivel. La capa vegetal removida debe reutilizarse en el tratamiento final de las áreas, y no deben dejarse escombros en las áreas destinadas a futuras construcciones ni en las zonas públicas.` },
  { id: 'lotificacion-urb', t: 'Lotificación', x: `Los lotes resultantes de una urbanización deben cumplir con lo siguiente:
a) Las áreas y frentes mínimos de su zona, y la relación frente-fondo correspondiente.
b) Linderos laterales preferiblemente a 90° respecto a la línea de cordón y caño.
c) Quedar completamente libres de cualquier afectación.
d) En lotes esquineros, el frente menor permitido debe ser el mínimo de la zona más el retiro frontal.
{{tabla:C01,C02,C03|Lotificación en urbanizaciones}}
Las dimensiones de las manzanas resultantes deben ajustarse al tamaño máximo de manzana de la zona:
{{tabla:F05|Tamaño máximo de manzana}}` },
  { id: 'areas-proteccion-forestal', t: 'Áreas de protección forestal y de nacientes de agua', x: `En predios que contengan o colinden con áreas protegidas, es obligatorio solicitar el alineamiento respectivo ante el INVU, conforme a la Ley Forestal N.º 7575. Cuando el predio colinde con una naciente de agua, debe tramitarse el Dictamen de Cuerpo de Agua ante la Dirección de Aguas del MINAE.
El área de protección forestal y de nacientes no se computa dentro del área urbanizable ni en el porcentaje de uso público; en ella no pueden realizarse movimientos de tierra que alteren la topografía natural.
Todo desarrollo sujeto a estudio de impacto ambiental debe además presentar, para su aprobación municipal, un plan de protección del arbolado existente y un plan de arborización:
{{tabla:I05|Planes de protección y de arborización en desarrollos}}` },
  { id: 'localizacion-redes-urb', t: 'Localización de redes de servicios', x: `Las redes de electricidad, acueductos, alcantarillados, telecomunicaciones u otros sistemas deben ubicarse preferiblemente en los derechos de vía o sobre áreas de uso público. Únicamente la servidumbre de uso pluvial puede localizarse en áreas de parque y de juegos infantiles.
{{tabla:G04|Energía y telecomunicaciones}}
Toda urbanización debe garantizar además la recolección y el manejo adecuado de los residuos sólidos:
{{tabla:G05|Residuos sólidos}}` },
  { id: 'parametros-urb-residencial', t: 'Parámetros urbanísticos en urbanizaciones de uso residencial', x: `El fondo de los lotes resultantes de una urbanización no debe exceder la relación frente-fondo de su zona. El área, el frente mínimo y los parámetros de edificación de los lotes y las edificaciones deben coincidir con los establecidos para cada zona en el Reglamento de Zonificación y Forma Urbana. Si existen afectaciones por alineamientos, esa área no es computable para el área mínima.` }
  ]
},
{ t: 'Cesión de área pública',
  arts: [
  { id: 'cesion-publica-minima', t: 'Cesión de área pública para juegos recreativos, parques y facilidades comunales', x: `Todo fraccionamiento con fines urbanísticos y toda urbanización debe ceder gratuitamente, a favor del dominio municipal, el siguiente porcentaje de área para uso público según la zona:
{{tabla:C08|Cesión de áreas públicas por zona}}
La cesión podrá realizarse, previa autorización municipal y con fundamento en criterios técnicos, en áreas prioritarias del territorio cantonal donde se identifique mayor carencia de espacios públicos, siempre que se garantice un beneficio equivalente o superior para la comunidad.` },
  { id: 'cesion-vias', t: 'Cesión de área pública destinada a vías', x: `Toda urbanización debe ceder y traspasar al uso público las vías de la urbanización, que deben cumplir con la clasificación de vías del Reglamento de Vialidad y Movilidad.` },
  { id: 'distribucion-area-publica', t: 'Distribución del área pública en urbanizaciones de uso residencial', x: `El área cedida para uso público debe destinarse a juegos recreativos, parques y facilidades comunales, en este orden de prioridad, y distribuirse así:
a) Juegos recreativos: [[10 m²]] por lote o unidad habitacional.
b) Parque: un tercio del área pública restante, una vez descontada el área de juegos recreativos.
c) Facilidades comunales: las dos terceras partes restantes.
Cuando el área a ceder sea menor que el área mínima de lote, debe destinarse prioritariamente a juegos recreativos y parques.` },
  { id: 'disposiciones-lotes-publicos', t: 'Disposiciones generales para lotes destinados a área pública', x: `Los lotes donde se ubiquen las áreas públicas deben estar contiguos a áreas ya establecidas para ese uso, o en la periferia si las propiedades colindantes no se han desarrollado; deben distribuirse equidistantes de las viviendas y tener un frente mínimo de [[10,00 m]]. Las áreas de juegos recreativos y facilidades comunales deben contar con agua potable y electricidad, y su topografía no debe superar el promedio del predio a urbanizar.` },
  { id: 'juegos-recreativos', t: 'Juegos recreativos', x: `Además de lo indicado en el artículo anterior, las áreas de juegos recreativos deben:
a) Ubicarse a no más de [[300,00 m]] de la vivienda más alejada, medidos sobre calles.
b) No formar ángulos agudos ni tener zonas de difícil vigilancia.
c) Proveer aceras, cerramiento con seto o malla de al menos 1 m de altura, y bebederos de agua potable.
d) Estar enzacatadas y arborizadas.
e) Incluir un núcleo de juegos por cada [[50]] unidades habitacionales o lotes, con equipamiento para cada grupo etario: infancia, adolescencia, adultez y adulta mayor.
f) Proveer un área de resguardo mínima de [[6,00 m²]] por cada 500 m².` },
  { id: 'parques-facilidades', t: 'Parques y facilidades comunales', x: `Las áreas de parque deben ubicarse preferiblemente en un mismo lote, enzacatadas y arborizadas. Las áreas de facilidades comunales pueden destinarse a educación, salud, deporte, servicios públicos, centros comunales, bibliotecas y guarderías, según la densidad de población; su ubicación debe tener una topografía no mayor al promedio del terreno urbanizable.` },
  { id: 'obligaciones-cesion', t: 'Obligaciones del urbanizador en la cesión de áreas públicas', x: `Quien urbanice debe entregar el área de juegos recreativos con el equipamiento necesario, y tanto esta como el área de parque deben entregarse enzacatadas y arborizadas, según {{art:parques-facilidades}}. Los planos constructivos deben incluir una lámina completa con las obras y el equipamiento a instalar.` }
  ]
},
{ t: 'Sistema vial de las urbanizaciones',
  arts: [
  { id: 'aceras-urb', t: 'Aceras y franjas verdes en urbanizaciones', x: `La construcción de aceras debe cumplir con el Reglamento de Vialidad y Movilidad y con la Ley N.º 7600 de Igualdad de Oportunidades para las Personas con Discapacidad. Las franjas verdes deben cumplir con lo establecido en el Reglamento de Espacio Público y Paisaje.` },
  { id: 'ochavos', t: 'Ochavos en predios esquineros', x: `En las propiedades esquineras de una urbanización deben recortarse las esquinas en el límite de propiedad mediante un ochavo de [[2,50 m]] a cada lado. El radio de la curva será el establecido en el Reglamento de Vialidad y Movilidad.` },
  { id: 'clasificacion-vias-urb', t: 'Clasificación y diseño de las vías', x: `Las vías de una urbanización se clasifican y diseñan de acuerdo con las disposiciones del Reglamento de Vialidad y Movilidad de este Plan Regulador.` }
  ]
},
{ t: 'Trámites de anteproyectos para urbanizaciones y conjuntos residenciales',
  arts: [
  { id: 'tramite-anteproyecto', t: 'Trámite de anteproyecto', x: `El trámite de revisión de anteproyectos para urbanizaciones y conjuntos residenciales se realiza a través de las plataformas digitales de tramitación del CFIA. En todo proyecto que se desarrolle por etapas, el trámite de anteproyecto ante el INVU es obligatorio; en caso contrario, es optativo.` },
  { id: 'requisitos-anteproyecto', t: 'Requisitos documentales para el visado de anteproyectos', x: `Para autorizar el visado de anteproyectos debe presentarse al INVU, entre otros:
a) Certificación literal de la propiedad o autorización del propietario.
b) Plano catastrado del predio, con el amarre vial a la vía existente.
c) Certificado de uso de suelo, con el número de planos catastrados, uso, retiros, cobertura, densidad, altura, frente y área mínima.
d) El alineamiento vial según el tipo de vía que enfrente el predio: vías nacionales (MOPT) o vías cantonales (Municipalidad).
e) La lámina de diseño de sitio del anteproyecto.
Cuando corresponda, deben presentarse además los alineamientos de áreas de protección forestal, de nacientes de agua, de pozos, de torres eólicas, de vías férreas, de oleoductos, de colectores sanitarios o el dictamen de proximidad a aeropuertos.` },
  { id: 'diseno-sitio-anteproyecto', t: 'Diseño de sitio de anteproyectos', x: `La lámina de diseño de sitio debe contener, como mínimo: escala y orientación; el polígono del plano catastrado con sus colindantes; la topografía con curvas de nivel; el diseño geométrico acotado de los derechos de vía, calzadas, aceras y franjas verdes; la lotificación con el tamaño y la forma de las manzanas; la ubicación de las áreas públicas; la disposición final de las aguas residuales; y una tabla de áreas (total, urbanizable, no urbanizable, pública, derechos de vía, lotes vendibles por uso, área mínima y promedio de lote, y número de lotes).` }
  ]
},
{ t: 'Proyectos especiales para renovación urbana',
  arts: [
  { id: 'variacion-norma', t: 'Variación de la norma', x: `La variación de la norma consiste en aceptar, para proyectos de urbanización y conjuntos residenciales, dimensiones mínimas diferentes a las de este reglamento en derechos de vía, áreas y frentes de lote. El INVU y la Municipalidad deben evaluar cada variación conforme a los principios de oportunidad y conveniencia, debidamente justificada en el anteproyecto, de acuerdo con el Reglamento de Renovación Urbana e Instrumentos de Gestión del Suelo.` },
  { id: 'causas-variacion', t: 'Causas para la variación de la norma', x: `Pueden aceptarse variaciones cuando la causa sea la atención de asentamientos informales o asentamientos irregulares o con estructuras inhabitables, definidos como polígonos de renovación en el Reglamento de Renovación Urbana.` }
  ]
},
{ t: 'Plano general de urbanización o conjuntos residenciales',
  arts: [
  { id: 'contenido-plano-general', t: 'Contenido del plano general de agrimensura', x: `El plano general de agrimensura debe estar georreferenciado al sistema oficial de coordenadas vigente y contar con la firma del profesional responsable. Debe contener el diseño general de la urbanización o del conjunto residencial, incluyendo área y ubicación de los lotes, zonas comerciales, calles, juegos recreativos, facilidades comunales, parque y áreas de protección forestal, con su tabla de áreas y secciones típicas de calles.` },
  { id: 'tramite-visado-plano-general', t: 'Trámite de visado del plano general', x: `Posterior al permiso de construcción de las obras, debe tramitarse el visado del plano general: la Municipalidad verifica que el proyecto se construyó según los planos aprobados, realiza la inspección correspondiente y el Concejo Municipal autoriza la recepción de las obras mediante acuerdo municipal. Con el visado municipal, el profesional responsable gestiona el visado ante el INVU, que realiza su propia inspección. Con ambos visados, el plano general se transforma en Mapa Oficial, y el profesional responsable tramita ante el Registro Inmobiliario la segregación de los lotes y áreas públicas.` },
  { id: 'garantias-cumplimiento', t: 'Garantías de cumplimiento de obra faltante', x: `Excepcionalmente, cuando la Municipalidad esté anuente a autorizar la segregación de lotes sin que se hayan concluido las obras, estas deben presentar un avance de al menos el [[90 %]]. Para el [[10 %]] faltante debe exigirse garantía de cumplimiento (garantía bancaria, póliza o fianza, certificado de depósito a plazo, o fideicomiso de garantía), que se hace efectiva si transcurridos 5 años desde la aprobación de los planos constructivos las obras no se han ejecutado.` },
  { id: 'venta-lotes', t: 'Venta de lotes y fraccionamiento posterior', x: `La venta de lotes de una urbanización o conjunto residencial solo es permitida si se ejecutaron las obras de urbanización, o si se rindió la garantía de cumplimiento del artículo anterior. Para fraccionar lotes dentro de una urbanización ya constituida, debe garantizarse que la nueva segregación cumpla con los parámetros de densidad del Reglamento de Zonificación y Forma Urbana.` }
  ]
}
]
};

/* 03 Mapa Oficial: adaptado del Reglamento de Mapa Oficial del Plan Regulador de Liberia.
   Este reglamento es, sobre todo, un inventario cartográfico propio de cada cantón: las grandes tablas
   de bienes públicos, vialidad y zonas de interés municipal de Liberia no se copiaron (son de ese cantón),
   y quedan como [[ ]] para que cada municipalidad incorpore su propio inventario como anexo. */
window.REG_BASE['03'] = {
id: '03',
t: 'Reglamento de Mapa Oficial',
fuente: 'Borrador adaptado del Reglamento de Mapa Oficial del Plan Regulador de Liberia. Las tablas de inventario (bienes públicos, vialidad, zonas de interés municipal) son propias de cada cantón y deben incorporarse como anexo.',
caps: [
{ t: 'Disposiciones generales',
  x: `Que el Mapa Oficial es la representación cartográfica del conjunto de planos que indica con claridad los trazados de vías públicas y las áreas de reserva para usos y servicios comunales, que se rigen por el régimen jurídico aplicable conforme a la Ley de Planificación Urbana N.º 4240 y demás normativa vigente en materia de dominio público.
Que, de conformidad con el artículo 44 de la Ley N.º 4240, los bienes públicos no requieren inscripción registral para consolidar su condición de tales, bastando su identificación en el Mapa Oficial, sin perjuicio de que puedan inscribirse en el Registro Público dejando constancia de su destino público y del acuerdo municipal que aprueba la cesión.
Que, conforme al párrafo segundo de ese mismo artículo, el Mapa Oficial adquiere carácter normativo una vez aprobado por la autoridad competente, constituyéndose en el instrumento técnico-legal que regula el uso del suelo en el ámbito territorial correspondiente.
Que los bienes de dominio público quedan afectados a un destino público específico, por lo que cualquier acto que implique su disposición, desafectación o cambio de destino solo puede realizarse mediante una norma legal expresa que así lo autorice.`,
  arts: [
  { id: 'finalidad-bienes', t: 'Finalidad de los bienes públicos', x: `Los bienes indicados en el Mapa Oficial, como las vías públicas y las áreas de reserva para usos y servicios comunales, son bienes de dominio público. Su condición demanial no depende de su inscripción en el Registro Público; cuando proceda inscribirlos conforme al artículo 44 de la Ley N.º 4240, debe dejarse constancia expresa de su destino público y del acuerdo municipal que aprueba la cesión. Los parques, jardines, paseos y demás espacios públicos del artículo 16 de la Ley N.º 4240 son de libre acceso para la población y deben conservarse conforme a su destino.` },
  { id: 'naturaleza-mapa', t: 'Naturaleza del Mapa Oficial como registro público', x: `El Mapa Oficial del cantón de {{canton}} constituye el registro técnico, cartográfico y jurídico de los bienes de dominio público y de las áreas afectadas a uso público, integrado al sistema de catastro municipal. Su contenido tiene carácter fehaciente para efectos administrativos y sirve de base para la gestión territorial, sin perjuicio de su eventual inscripción en el Registro Nacional.` },
  { id: 'cesion-terrenos-mapa', t: 'Cesión de terrenos', x: `Se incorporan al Mapa Oficial los terrenos que, conforme a la normativa vigente, deban ser obligatoriamente cedidos por fraccionadores y urbanizadores, según lo establecido en el Reglamento de Fraccionamiento y Urbanizaciones; estos terrenos se entregan formalmente al uso público y se integran al dominio público municipal. Las áreas verdes de uso público son inalienables, imprescriptibles e inembargables, conforme al artículo 40 de la Ley de Planificación Urbana.` },
  { id: 'incorporacion-planos', t: 'Incorporación de planos al Mapa Oficial', x: `El Mapa Oficial se integra con los planos debidamente aprobados por la autoridad competente en los que se definan alineamientos, afectaciones, vías, áreas públicas u otros elementos de interés urbanístico. La incorporación se realiza una vez otorgado el visado o permiso correspondiente y aprobado, cuando proceda, el acto administrativo que dispone la cesión. El destino de las áreas cedidas será el que conste en el documento inscribible aprobado por la Municipalidad y no podrá variarse salvo mediante los procedimientos legales establecidos.
El Mapa Oficial debe integrarse y mantenerse actualizado en el Sistema de Información Geográfica Municipal y en el Sistema de Catastro Municipal.` }
  ]
},
{ t: 'Disposiciones particulares',
  arts: [
  { id: 'contenido-mapa', t: 'Contenido del Mapa Oficial', x: `En el Mapa Oficial se identifican los equipamientos, dotaciones y espacios recreativos públicos del cantón: cementerios, edificios institucionales, mercados, paradas municipales, centros de cuido en propiedad municipal, salones comunales, edificios históricos de uso público, estadios, parques y plazas. La omisión de algún elemento o su incorrecta ubicación en el mapa no implica la falta de titularidad pública de ese elemento; es potestad de la Municipalidad incorporarlo o corregirlo.
El nivel de equipamiento exigido por tipo de asentamiento es el siguiente:
{{tabla:I02|Equipamientos exigidos por zona}}` },
  { id: 'terrenos-municipales', t: 'Terrenos municipales', x: `Los terrenos municipales se agrupan en las siguientes clasificaciones de suelo: áreas de vialidad (ampliaciones y vía pública); parques (infantiles, municipales, áreas verdes); plazas y canchas; y terrenos municipales baldíos o con infraestructura.` },
  { id: 'inventario-bienes', t: 'Inventario de bienes públicos', x: `El inventario de bienes públicos se define conforme a los registros del catastro municipal y se utiliza como insumo para la gestión del espacio público.
[[Incorporar aquí, como anexo, la tabla de inventario de bienes públicos del cantón: ubicación, distrito, folio real, número de plano, condición registral, uso actual, área y categoría de cada predio municipal.]]` },
  { id: 'vialidad-mapa', t: 'Vialidad en el Mapa Oficial', x: `El Mapa Oficial incorpora el inventario vial del cantón, clasificado conforme al tipo de vía, el derecho de vía y el control de accesos establecidos en el Reglamento de Vialidad y Movilidad:
{{tabla:F01,F02,F04|Tipo de vía, derecho de vía y control de accesos}}
[[Incorporar aquí, como anexo, la tabla de inventario vial del cantón con el nombre, la clasificación y la longitud de cada vía.]]` },
  { id: 'zim', t: 'Zonas de interés municipal (ZIM)', x: `La Municipalidad dispone, dentro del Mapa Oficial, de los inmuebles cuyo uso y gestión resultan estratégicos para el desarrollo del cantón, conforme al artículo 42 de la Ley de Planificación Urbana sobre zonas de reserva. Estas propiedades se clasifican en dos grupos:
a) Propiedades de conservación y protección (ZIM-A): terrenos de valor ambiental, ecológico, paisajístico o patrimonial, vinculados con las zonas de renovación urbana por causa medioambiental del Reglamento de Renovación Urbana, y cuyo tratamiento corresponde al instrumento de transferencia de potencial edificable de ese reglamento.
b) Propiedades destinadas a la dotación de infraestructura (ZIM-I): áreas prioritarias para equipamientos, espacios públicos, vialidad u otra infraestructura, en zonas donde exista déficit.
El propósito de esta identificación es facilitar a la Municipalidad el acceso a estas propiedades mediante los instrumentos urbanísticos de los reglamentos de Zonificación y de Renovación Urbana.
[[Incorporar aquí, como anexo, el listado de zonas de interés municipal del cantón (ZIM-A y ZIM-I), con nombre, área y categoría de cada una.]]` },
  { id: 'areas-vialidad-propuesta', t: 'Áreas destinadas a vialidad propuesta', x: `Las áreas destinadas a vialidad propuesta para mejorar el tejido urbano se definen en el mapa de vialidad propuesta del Reglamento de Vialidad y Movilidad.` }
  ]
},
{ t: 'Interpretaciones del mapa',
  arts: [
  { id: 'simbologia', t: 'Simbología del mapa', x: `La simbología del Mapa Oficial facilita la correcta interpretación de los elementos territoriales representados y debe utilizarse como referencia obligatoria para toda consulta, aplicación o análisis del plan regulador. Distingue, mediante colores, líneas y tramas:
a) Vialidad nacional: líneas continuas de trazo medio.
b) Vialidad cantonal: líneas continuas de trazo fino.
c) Límites del plan regulador: líneas de trazo grueso que representan el cantón y sus distritos.
d) Zonas de interés municipal: rellenos sólidos diferenciados según su función (ZIM-A y ZIM-I).
e) Terrenos municipales: polígonos sólidos según su tipología.` },
  { id: 'tabla-datos', t: 'Tabla de datos', x: `Las tablas de datos que acompañan el Mapa Oficial constituyen un insumo técnico complementario de carácter normativo para la identificación de las propiedades dentro del ámbito territorial del cantón. Se incorporan como anexos del Mapa Oficial la tabla de inventario vial y la tabla de terrenos municipales, con el mismo carácter normativo para efectos de identificación, clasificación y gestión del suelo.` },
  { id: 'escalas', t: 'Escalas', x: `El Mapa Oficial utiliza las escalas cartográficas que correspondan según el nivel de detalle requerido y el tipo de análisis territorial a desarrollar.` }
  ]
},
{ t: 'Actualizaciones y modificaciones al mapa',
  arts: [
  { id: 'actualizacion-mapa', t: 'Actualización del mapa', x: `La cartografía de este reglamento podrá actualizarse cuando exista justificación técnica, de acuerdo con los siguientes criterios:
a) Cambios geográficos: alteraciones relevantes como desplazamientos de cuerpos de agua, modificaciones de fronteras o movimientos sísmicos.
b) Cambios en infraestructura: construcción, eliminación o modificación de carreteras, puentes, edificios e instalaciones públicas.
c) Actualización de datos demográficos y sociales: cambios en la población, el uso del suelo o la distribución geográfica de actividades.
d) Avances tecnológicos y científicos: imágenes satelitales, nuevas metodologías geodésicas u otras tecnologías que generen datos más precisos del terreno.
El Mapa Oficial puede ser actualizado por la Municipalidad según se incorporen nuevos planos de los terrenos correspondientes.` }
  ]
}
]
};

/* 04 Renovación Urbana e Instrumentos de Gestión del Suelo: adaptado del reglamento homónimo del Plan Regulador de Liberia.
   Los listados de proyectos (RUA/RUV/RUU) y sus áreas son inventarios propios de cada cantón y quedan como [[ ]]. */
window.REG_BASE['04'] = {
id: '04',
t: 'Reglamento de Renovación Urbana e Instrumentos de Gestión del Suelo',
fuente: 'Borrador adaptado del Reglamento de Renovación Urbana e Instrumentos de Gestión del Suelo del Plan Regulador de Liberia. Los listados de proyectos de renovación urbana son propios de cada cantón.',
caps: [
{ t: 'Disposiciones generales',
  x: `Que el artículo 50 de la Constitución Política consagra el derecho de toda persona a un ambiente sano y ecológicamente equilibrado, lo cual implica la obligación del Estado y de las municipalidades de velar por el uso sostenible del suelo urbano, el acceso equitativo a los servicios y espacios públicos, y la función social de la propiedad.
Que el inciso 4) del artículo 21 de la Ley de Planificación Urbana N.º 4240 establece, como uno de los reglamentos de desarrollo urbano, el de Renovación Urbana, que debe contener las regulaciones para la conservación, rehabilitación o remodelación de las áreas urbanas defectuosas, deterioradas o en estado de decadencia, por su inconveniente parcelación o edificación, la carencia de servicios y facilidades comunales, o cualquier otra condición adversa a la seguridad, salubridad y bienestar general.
Que el presente reglamento se rige por los principios de participación ciudadana y democracia del artículo 5 del Código Municipal, Ley N.º 7794.`,
  arts: [
  { id: 'objetivo-ru', t: 'Objetivo', x: `Establecer el marco normativo aplicable a los procesos de rehabilitación, remodelación, regeneración y conservación de áreas urbanas disfuncionales o estratégicas dentro del cantón de {{canton}}, orientados a la recuperación integral del tejido urbano, con el fin de garantizar condiciones adecuadas de habitabilidad, funcionalidad, sostenibilidad ambiental, seguridad y bienestar colectivo.` },
  { id: 'ambito-aplicacion', t: 'Ámbito de aplicación', x: `El presente reglamento se aplica, exclusivamente, dentro de los perímetros de las zonas de renovación urbana delimitados en el Mapa de Zonificación y en el Mapa Oficial de Renovación Urbana, los cuales forman parte integrante del Plan Regulador. Para cada zona de renovación urbana, los instrumentos de gestión del suelo, sus condiciones de aplicación y los parámetros urbanísticos correspondientes se establecen de manera específica en el Reglamento de Zonificación y Forma Urbana y en el presente reglamento, conforme al artículo 52 de la Ley N.º 4240.` },
  { id: 'alcance-ru', t: 'Alcance de la renovación urbana', x: `Los proyectos de renovación urbana están orientados a recuperar y revivir zonas deprimidas, vulnerables o conflictivas, promoviendo su integración y desarrollo dentro del tejido urbano y la comunidad; a potenciar las áreas urbanas existentes, mejorando su funcionalidad, valor patrimonial y calidad ambiental; a rehabilitar áreas urbanas disfuncionales, optimizando su uso y adaptándolas a las necesidades actuales de la población; y a gestionar los asentamientos informales e irregulares, garantizando condiciones de habitabilidad dignas y sostenibles.
La renovación urbana tiene los siguientes ámbitos de acción: ambiental, de asentamientos humanos, y urbano.` }
  ]
},
{ t: 'Renovación urbana',
  arts: [
  { id: 'tipos-intervencion', t: 'Tipos de intervención para la renovación urbana', x: `La formulación de un plan proyecto de renovación urbana podrá contemplar los siguientes tipos de intervención, conforme al marco normativo nacional vigente: rehabilitación, regeneración, remodelación y conservación.` },
  { id: 'causas-ru', t: 'Causas para la renovación urbana', x: `De conformidad con los ámbitos de acción del {{art:alcance-ru}}, constituyen causas justificadas para la implementación de procesos de renovación urbana:
a) Ámbito ambiental: riesgo por amenazas naturales (sectores con factores físicos y ambientales que aumentan la vulnerabilidad de sus habitantes, con o sin declaratoria de inhabitabilidad); y protección ambiental de recursos naturales (sectores con recursos naturales invadidos o contaminados por la urbanización, que requieren dictamen del MINAE, SINAC o SENARA).
b) Ámbito urbano: infraestructura deficiente o inexistente; áreas de parques y facilidades comunales deficientes o inexistentes; tejido urbano inadecuado (patrones dispersos, congestión o falta de conectividad); potencial de revitalización urbana; y presencia de patrimonio arquitectónico o intangible.
c) Ámbito de asentamientos humanos: presencia de asentamientos informales (sin tenencia legal de la tierra); y presencia de asentamientos irregulares o con estructuras inhabitables (desarrollados sin observar las normas de fraccionamiento, urbanización o construcción).` }
  ]
},
{ t: 'Proyecto de renovación urbana',
  arts: [
  { id: 'objetivo-proyecto', t: 'Objetivo del Proyecto de Renovación Urbana', x: `A partir de los ámbitos de acción y las causas del {{art:causas-ru}}, cada Proyecto de Renovación Urbana define objetivos específicos: identificar los riesgos y zonas de interés municipal (ZIM) en el ámbito ambiental; coordinar con las instituciones nacionales o con el programa municipal el tratamiento de los asentamientos en el ámbito de asentamientos humanos; y, en el ámbito urbano, mejorar el espacio público, la movilidad, el equipamiento y el patrimonio edificado.
[[Incorporar aquí, como anexo, el listado de Proyectos de Renovación Urbana del cantón por ámbito de acción (ambiental, asentamientos humanos, urbano), con su código, área, localidad, distrito, causa y caracterización.]]` },
  { id: 'ejecucion-proyecto', t: 'Ejecución del Proyecto', x: `La ejecución de los Proyectos de Renovación Urbana debe seguir el siguiente procedimiento: los actores responsables generan los planos constructivos, las especificaciones técnicas y los demás requisitos; cuando corresponda, el proyecto se tramita según la clasificación existente para cada tipo de obra; y el gobierno municipal emite el permiso de construcción respectivo, con las autorizaciones necesarias de las entidades competentes.
Cuando la escala o la complejidad del proyecto lo requieran, la Municipalidad exigirá la formulación previa de un Plan Proyecto conforme al {{art:plan-proyecto}}:
{{tabla:J06|Exigencia de planificación de detalle por zona}}` },
  { id: 'fiscalizacion-proyecto', t: 'Fiscalización del Proyecto', x: `La fiscalización técnica-constructiva del Proyecto de Renovación Urbana está a cargo del gobierno municipal, conforme al artículo 169 de la Constitución Política y la Ley de Construcciones, sin perjuicio de la de cualquier otra autoridad competente. El profesional responsable de la obra debe además fiscalizar el proyecto según la normativa del Colegio Federado de Ingenieros y Arquitectos.` },
  { id: 'norma-excepcional', t: 'Aplicación de norma excepcional', x: `El gobierno municipal, en conjunto con el INVU, podrá aplicar en los Proyectos de Renovación Urbana, en asentamientos irregulares e informales existentes al momento de aprobarse el Plan Regulador, las normas de excepción establecidas en el Reglamento para el Control Nacional de Fraccionamientos y Urbanizaciones, siempre que cuenten con un estudio técnico que justifique la intervención en el sitio.` }
  ]
},
{ t: 'Plan Proyecto de Renovación Urbana',
  arts: [
  { id: 'plan-proyecto', t: 'Plan Proyecto', x: `Se requiere de un Plan Proyecto en los casos de Proyectos de Renovación Urbana que no estén ya contemplados y caracterizados conforme al {{art:objetivo-proyecto}}. El Plan Proyecto puede ser propuesto por el gobierno municipal, el concejo municipal, entes públicos o instituciones del Estado, personas físicas o jurídicas, y organizaciones sociales y comunitarias; su aprobación final corresponde en todos los casos a la Municipalidad.
La Municipalidad debe verificar que el documento del Plan Proyecto contenga, al menos: justificación; diagnóstico; ámbitos de acción; tipos de intervención; actores; delimitación del área; factibilidad y proyección financiera; la propuesta de instrumentos de gestión del suelo a utilizar, con sus incentivos, restricciones urbanísticas y estrategias contra la especulación inmobiliaria; y la propuesta de diseño.` },
  { id: 'proceso-aprobacion', t: 'Proceso para revisión y aprobación del Plan Proyecto', x: `Para la aprobación del Plan Proyecto de Renovación Urbana se deben seguir los siguientes pasos:
a) Presentación del Plan Proyecto a la comisión designada en el {{art:comision-designada}}, para su revisión y emisión de criterio técnico favorable o no favorable.
b) Con el criterio técnico municipal favorable y el certificado de uso de suelo, los actores responsables remiten el Plan Proyecto a la Dirección de Urbanismo del INVU para su visto bueno, salvo los proyectos exclusivos de foresta urbana y corredores biológicos interurbanos.
c) La Dirección de Urbanismo del INVU evalúa el Plan Proyecto conforme a los artículos sobre alcance, tipos de intervención y causas de este reglamento, y emite su visto bueno en un plazo de un mes calendario. Cuando el proyecto implique la integración de calles públicas, gestiona la aprobación ante la unidad técnica de gestión vial municipal o ante el MOPT, según corresponda.
d) Con el visto bueno de la Dirección de Urbanismo, el Plan Proyecto se remite al Concejo Municipal para su aprobación, previa justificación; en caso de rechazo, el expediente se archiva.` },
  { id: 'comision-designada', t: 'Comisión designada', x: `La Comisión de Plan Regulador del cantón de {{canton}} es la instancia competente para participar en las distintas etapas del proceso de planificación, revisión y seguimiento de los Planes Proyecto de Renovación Urbana. Entre sus funciones están: acompañar y asesorar técnicamente la formulación del Plan Proyecto; realizar la revisión técnica inicial y emitir un informe técnico consolidado; coordinar la gestión interinstitucional con el INVU; emitir criterio complementario previo a la decisión final del Concejo Municipal cuando este lo solicite; y dar seguimiento a los Planes Proyecto ya aprobados.` },
  { id: 'participacion-ciudadana-ru', t: 'Participación ciudadana', x: `Para todo Plan Proyecto de Renovación Urbana, la Municipalidad implementa mecanismos que promueven la participación ciudadana de la población beneficiada, en sus etapas de formulación y gestión. El seguimiento del Proyecto de Renovación Urbana se realiza mediante la comisión designada en el {{art:comision-designada}}.` }
  ]
},
{ t: 'Instrumentos de gestión del suelo',
  arts: [
  { id: 'instrumentos-por-causa', t: 'Instrumentos de gestión por causa de renovación urbana', x: `Para cada una de las causas de renovación urbana definidas en el {{art:causas-ru}}, se establece un conjunto de instrumentos de gestión del suelo específicos: transferencia de potencial edificable, bonos de edificabilidad, prácticas urbanísticas incentivables, integración inmobiliaria, reajuste de terrenos por vialidad, gestión con instituciones nacionales y programa municipal. La Municipalidad puede otorgar incentivos específicos a los proyectos que apliquen alguno o varios de estos instrumentos.` },
  { id: 'mecanismo-compensacion', t: 'Mecanismo de compensación urbanística', x: `El mecanismo de compensación urbanística consiste en el otorgamiento, por parte de la Municipalidad, de una mayor edificabilidad a los proyectos que incorporen, financien o ejecuten instrumentos de gestión del suelo o prácticas urbanísticas incentivables que generen mejoras verificables para el espacio público, la infraestructura urbana, la movilidad, el ambiente, el paisaje o la calidad urbana del cantón.
La mayor edificabilidad se materializa mediante incrementos en la altura y la cobertura definidos en el Reglamento de Zonificación y Forma Urbana:
{{tabla:D06,D07,D08|Bonificaciones y edificabilidad con incentivos}}
El factor de cambio —la relación de equivalencia entre la mayor edificabilidad otorgada y el beneficio urbano generado— varía según el transecto en que se localice el proyecto, y es mayor dentro de las zonas de renovación urbana.` },
  { id: 'transferencia-potencial', t: 'Transferencia de potencial edificable', x: `Los propietarios pueden transferir la totalidad de sus derechos de propiedad sobre inmuebles ubicados en Zonas de Interés Municipal Ambiental (ZIM-A) o de Infraestructura (ZIM-I), identificadas en el Reglamento de Mapa Oficial, con el fin de trasladar el potencial edificable correspondiente a proyectos ubicados en otras zonas del cantón, siempre que se cumpla con los parámetros del Reglamento de Zonificación y Forma Urbana.
Las zonas emisoras y receptoras de este instrumento son:
{{tabla:J01|Transferencia de derechos por zona}}
Zonas emisoras: {{zonas:emisoras}}. Zonas receptoras: {{zonas:receptoras}}.
[[Precisar aquí el factor de cambio del incentivo —m² de ZIM por cada m² de construcción otorgado— dentro y fuera del polígono de renovación urbana, por zona.]]` },
  { id: 'integracion-inmobiliaria', t: 'Integración inmobiliaria', x: `La Municipalidad puede autorizar un mayor aprovechamiento del suelo en proyectos que desarrollen procesos de integración inmobiliaria, conforme al Reglamento de Fraccionamiento y Urbanizaciones y al manual del INVU. La integración inmobiliaria permite la agrupación voluntaria de predios colindantes que, por su configuración o dimensiones, no cumplen con los parámetros urbanísticos de este plan, con el fin de redefinir sus límites catastrales y registrales y adecuar los lotes resultantes a los estándares técnicos y jurídicos.
[[Precisar aquí el factor de cambio del incentivo —capacidad constructiva adicional— dentro y fuera del polígono de renovación urbana, por zona.]]` },
  { id: 'reajuste-terrenos', t: 'Reajuste de terrenos por vialidad', x: `El reajuste de terrenos permite la agrupación voluntaria de predios colindantes con el fin de ajustar la vialidad existente o proyectada, logrando una organización más eficiente y funcional del tejido urbano; implica redefinir catastral y registralmente los límites prediales. Su aplicación se rige por los artículos 52 y 53 de la Ley de Planificación Urbana y, en lo aplicable, por la Guía de Reajuste de Terrenos del INVU.
La Municipalidad puede otorgar a los propietarios participantes un incentivo de mayor capacidad constructiva, proporcional al área efectivamente cedida para vialidad, conforme a la herramienta H3 de la {{art:practicas-incentivables}}. El proceso se desarrolla bajo el Modelo de Reparto de Cargas y Beneficios del {{art:reparto-cargas}}.` },
  { id: 'bonos-edificabilidad', t: 'Bonos de edificabilidad asociados a inversión en obras', x: `La Municipalidad puede autorizar un incremento de los metros cuadrados (pisos o cobertura) de bienes inmuebles, cuando se realice una inversión en obras de interés público mediante la adquisición de bonos de edificabilidad. Los recursos generados se destinan al Fondo Municipal de Infraestructura del {{art:fondo-infraestructura}}. Las obras financiadas pueden ejecutarse en parques, espacios públicos, facilidades comunales o infraestructura urbana, conforme a las prioridades municipales.
Este incentivo tiene una vigencia máxima de [[5 años]] y está sujeto a una metodología técnica aprobada por la Municipalidad, que define los parámetros aplicables, los límites del incremento y los criterios de valoración de los bonos; ver la herramienta H2 de la {{art:practicas-incentivables}}.` },
  { id: 'practicas-incentivables', t: 'Prácticas urbanísticas incentivables', x: `La Municipalidad puede autorizar incentivos a proyectos que incorporen prácticas urbanísticas que generen beneficios públicos verificables, tales como la cesión adicional de espacio público o la ejecución de mejoras permanentes en el entorno urbano. Los incentivos pueden consistir en el incremento de la cobertura del terreno o del número de pisos permitidos, sin transgredir los parámetros urbanísticos de cada zona:
{{practicas}}
Entre estas prácticas, la mezcla de usos cuenta además con un requisito mínimo de proporción no residencial por zona:
{{tabla:B04|Mezcla de usos mínima por zona}}` },
  { id: 'reduccion-lote-ru', t: 'Reducción del tamaño mínimo de lote en áreas de renovación urbana', x: `Dentro de los polígonos de Renovación Urbana se permite reducir hasta en un [[20 %]] el tamaño mínimo de lote establecido para la zona correspondiente, siempre que el proyecto contribuya a los objetivos de regeneración urbana y cumpla con las demás disposiciones urbanísticas aplicables. Como condición para este incentivo, la Municipalidad puede requerir una mayor cesión de espacio público, mejoras urbanísticas, infraestructura pública o cualquier otra medida que contribuya al fortalecimiento de la estructura urbana. Este incentivo no es aplicable fuera de los polígonos de Renovación Urbana.` },
  { id: 'fondo-vivienda', t: 'Fondo Municipal de Vivienda', x: `La Municipalidad establece un Fondo Municipal de Vivienda, destinado a canalizar los recursos provenientes del instrumento de transferencia de potencial edificable, aplicable a las zonas emisoras. La transferencia de potencial edificable permite el traslado de beneficios urbanísticos —incremento de edificabilidad o de densidad— desde las zonas emisoras hacia las zonas receptoras definidas como zonas de renovación urbana, condicionando dicho beneficio a la generación de recursos para el Fondo.
Los recursos del Fondo se destinan exclusivamente al financiamiento de proyectos de vivienda de interés social y asequible, y a programas de apoyo habitacional para población en condición de vulnerabilidad, preferentemente dentro de las zonas de renovación urbana. La Municipalidad administra y fiscaliza el Fondo, y debe publicar un informe anual sobre su recaudación, uso y resultados. El porcentaje asignado al Fondo puede revisarse cada cinco años mediante acuerdo del Concejo Municipal, con base en un informe técnico.` },
  { id: 'fondo-infraestructura', t: 'Fondo Municipal de Infraestructura', x: `Este Fondo canaliza recursos obtenidos de patentes y permisos de construcción en las zonas emisoras, para la ejecución de proyectos de obra pública relacionados con el desarrollo y mantenimiento de infraestructura en zonas de renovación urbana. Su objetivo es mejorar la calidad del entorno urbano y rural mediante la inversión en vialidad, equipamiento público, redes de servicios básicos y otros proyectos estratégicos que repartan los beneficios del desarrollo del cantón entre las comunidades vulnerables.
La Municipalidad administra el Fondo y debe publicar un informe anual sobre el uso de los recursos recaudados. El porcentaje establecido puede revisarse cada cinco años mediante acuerdo del Concejo Municipal, con base en un informe técnico.` },
  { id: 'gestion-instituciones', t: 'Gestión con instituciones nacionales', x: `En presencia de asentamientos informales, los departamentos municipales competentes deben coordinar y gestionar proyectos de renovación urbana en conjunto con las instituciones nacionales correspondientes, con el fin de legalizar el uso y la tenencia del territorio ocupado y promover soluciones integrales para la población involucrada. Dichos asentamientos se identifican en el mapa del {{art:mapa-ru}}.` },
  { id: 'programa-municipal', t: 'Programa Municipal', x: `En caso de asentamientos irregulares o de estructuras inhabitables, los departamentos municipales competentes están facultados para elaborar y ejecutar programas de renovación urbana, con el objetivo de regularizar el uso del suelo y garantizar la seguridad estructural de las edificaciones existentes. Los asentamientos sujetos a intervención se identifican en el mapa del {{art:mapa-ru}}.` },
  { id: 'reparto-cargas', t: 'Modelo de reparto de cargas y beneficios', x: `En los Planes Proyecto de Renovación Urbana en que se aplique el reajuste de terrenos, la Municipalidad implementa un Modelo de Reparto de Cargas y Beneficios equitativo, de manera que los participantes públicos o privados reciban beneficios proporcionales a su aporte inicial. Para ello, la Municipalidad define el aporte inicial de cada participante; identifica el área bruta sujeta a reajuste; delimita el área neta (área bruta menos restricciones urbanísticas y ambientales); determina el área urbanizable (área neta menos las cesiones públicas); verifica el uso del suelo de los predios; y calcula el aumento del valor de los bienes inmuebles resultante de la operación.
El actor que promueva el reajuste de terrenos presenta a la Municipalidad un Convenio de Reparto de Cargas y Beneficios que incluye, como mínimo: la delimitación del área bruta y neta sujeta al reajuste; la configuración predial existente; las restricciones urbanísticas y ambientales obligatorias; las concesiones para la trama vial, el espacio público y el equipamiento urbano; el valor inicial del suelo y los aportes respectivos; la norma urbanística, densidad y usos aplicables; el costo de construcción de las cesiones, cuando existan edificaciones; la asignación de costos entre las partes; los incentivos urbanísticos; y el reparto de beneficios entre los participantes.` },
  { id: 'sociedades-mixtas', t: 'Sociedades públicas de economía mixta para la renovación urbana', x: `La Municipalidad puede establecer y participar en sociedades públicas de economía mixta para la gestión específica de los Planes Proyecto de Renovación Urbana y para la proyección urbanística del cantón, conforme al Código Municipal y a la Ley Reguladora de la Actividad de las Sociedades Públicas de Economía Mixta. Su objetivo es establecer un modelo de gestión conjunto entre el sector público y privado, facilitando la compra de terrenos para equipamiento urbano, vivienda y áreas verdes y recreativas, bajo los lineamientos de este reglamento y procurando el reparto equitativo de cargas y beneficios.` },
  { id: 'contribucion-valorizacion', t: 'Contribución por valorización', x: `La contribución por valorización es un mecanismo de financiamiento destinado a recuperar el costo de obras públicas que generen beneficios directos a determinados inmuebles, bajo el principio de equidad, según el impacto positivo de la obra en cada propiedad. El monto a recaudar se establece según el costo de la obra y dentro de los límites del beneficio generado, sin superar el valor de la inversión; los recursos obtenidos se destinan exclusivamente al Fondo Municipal de Infraestructura del {{art:fondo-infraestructura}}.
{{tabla:J02|Mecanismo de captura de plusvalías}}
El monto a recaudar toma en cuenta: el costo total de la obra, la definición del área de influencia, el incremento en el valor del suelo e inmuebles, la asignación proporcional del costo, un factor de ajuste, y el período y la forma de pago. El costo se distribuye entre los predios beneficiados en proporción al incremento de valor de cada uno respecto de la suma de los incrementos del área de influencia.` },
  { id: 'contribuciones-especiales', t: 'Contribuciones especiales', x: `Cuando la Municipalidad invierta en obra pública y mejoras urbanas que beneficien a la comunidad, puede establecer un tributo que no debe tener un destino ajeno a la financiación de esas obras, con la intención de recuperar la inversión inicial realizada. Las contribuciones especiales se aplican según el Código de Normas y Procedimientos Tributarios, la Ley de Planificación Urbana y el Código Municipal.` }
  ]
},
{ t: 'Áreas con potencial de renovación',
  arts: [
  { id: 'mapa-ru', t: 'Mapa de áreas con potencial de renovación urbana', x: `La Municipalidad establece un mapa de zonas con potencial de renovación urbana, en el cual identifica, localiza y georreferencia las áreas con potencial de renovación, conforme a la Ley de Planificación Urbana, la normativa del INVU para la elaboración de planes reguladores y lo indicado en el {{art:causas-ru}}.
[[Incorporar aquí, como anexo, la tabla y el mapa de áreas de renovación urbana del cantón, por ámbito de acción y causa de intervención, con su extensión en hectáreas.]]` },
  { id: 'actualizacion-mapa-ru', t: 'Actualización al mapa de Renovación Urbana', x: `La Comisión de Plan Regulador puede recomendar al Concejo Municipal la actualización del Mapa de Renovación Urbana y sus respectivas tablas de proyectos según los ámbitos de acción.` }
  ]
}
]
};

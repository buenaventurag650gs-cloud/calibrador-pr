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

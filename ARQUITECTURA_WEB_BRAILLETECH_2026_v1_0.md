# Arquitectura web — BrailleLab Ecuador y BrailleTech Challenge Ecuador 2026

**Versión:** 1.0  
**Estado:** arquitectura aprobada; pendiente de diseño de pantallas, contenidos finales e implementación.  
**Identidad aplicable:** `GUIA_IDENTIDAD_WEB_BRAILLELAB_BRAILLETECH_2026.md`.

## 1. Propósito del sitio

El sitio debe permitir que una persona entienda el Challenge, determine si puede participar, consulte documentos oficiales y complete la acción correspondiente sin depender de redes sociales o mensajes privados. También debe explicar que BrailleTech Challenge Ecuador 2026 pertenece a BrailleLab Ecuador, sin confundir ambas identidades.

No es un sitio de promesas institucionales ni una galería de contenido genérico. Cada módulo debe responder una pregunta real, dirigir a una acción concreta o mostrar evidencia verificable del proyecto.

## 2. Arquitectura general

Se aprueban siete rutas públicas de primer nivel. Políticas, aviso de privacidad, accesibilidad y términos aplicables se ubicarán en el pie de página y no recargarán la navegación principal.

| Ruta | Página | Objetivo | Módulos |
| --- | --- | --- | ---: |
| `/` | Inicio | Presentar el evento y dirigir a inscripción o consulta del reto. | 12 |
| `/reto` | El reto | Explicar el desafío técnico y sus límites. | 6 |
| `/participar` | Participar | Resolver elegibilidad, proceso e inscripción. | 7 |
| `/cronograma` | Cronograma | Comunicar fases, hitos y próximos pasos. | 4 |
| `/recursos` | Recursos | Reunir las fuentes oficiales y materiales por etapa. | 5 |
| `/braillelab` | BrailleLab Ecuador | Dar contexto a la marca madre y su enfoque. | 5 |
| `/alianzas` | Aliados y contacto | Canalizar patrocinio, mentoría, difusión y consultas. | 5 |

**Total:** 44 módulos de contenido, más navegación, pie de página y componentes transversales.

## 3. Componentes transversales

### Navegación

- Logotipo o palabra marca de BrailleLab Ecuador y sello visible de BrailleTech Challenge 2026.
- Enlaces: El reto, Participar, Cronograma, Recursos, BrailleLab y Aliados.
- Un único CTA principal por pantalla. Mientras el formulario esté habilitado, la acción primaria es `Inscribir equipo`; se puede repetir en navegación, hero y cierre, pero siempre conduce al mismo enlace operativo.
- Si el formulario no está habilitado o su enlace no está confirmado, no mostrar `Inscribir equipo` ni un control deshabilitado: usar `Consultar cronograma` como CTA principal y mantener `Conocer el reto`, `Descargar bases` o `Contactar al equipo` como acciones secundarias según la ruta.
- En móvil, menú desplegable accesible; no utilizar navegación solo con iconos.

### Barra de estado

Se mostrará encima de la navegación solo cuando exista un estado útil y confirmado: inscripciones abiertas, próximo hito, actualización de bases o cierre de convocatoria. Debe incluir texto, fecha y enlace; no comunicar el estado únicamente con color.

### Pie de página

- Canales institucionales y redes confirmadas.
- Documentos legales y aviso de privacidad, cuando estén definidos.
- Créditos de coorganización con logos autorizados.
- Fecha de última actualización del sitio.

## 4. Especificación de páginas

### 4.1 Inicio (`/`) — 12 módulos

| # | Módulo | Contenido necesario | Recurso visual | Acción |
| ---: | --- | --- | --- | --- |
| 1 | Barra de estado | Estado y fecha confirmados. | Punto Braille de estado + etiqueta textual. | Ver detalle. |
| 2 | Hero | Nombre, propósito, fecha y ciudad/sede solo si están confirmados para publicación. | Fotografía propia o diagrama de celda Braille de seis puntos. | Primaria: inscribir solo con registro activo; si no, consultar cronograma. Secundaria: conocer el reto. |
| 3 | Datos esenciales | IES elegibles, equipos de 3 a 5, dos fases y Demo Day. | Cuatro módulos de datos. | Ver participación. |
| 4 | El reto en una frase | Requisito técnico mínimo y alcance. | Diagrama simple 1--4 / 2--5 / 3--6. | Ver reto. |
| 5 | Recorrido de competencia | Fase 1, Design Review, Fase 2 y Demo Day. | Ruta conectada por nodos, no una placa electrónica decorativa. | Ver cronograma. |
| 6 | Por qué importa | Accesibilidad, apertura, reparación y fabricación local. | Matriz de puntos Braille de bajo contraste. | Conocer BrailleLab. |
| 7 | Evidencia de proceso | Una actividad, prototipo o sesión real disponible para difusión. | Fotografía documental propia con pie de foto. | Ver BrailleLab. |
| 8 | Próximos hitos | Hasta cuatro hitos del cronograma vigente. | Línea temporal compacta. | Ver cronograma completo. |
| 9 | Recursos destacados | Bases, guía técnica, formulario y FAQ. | Fichas documentales numeradas. | Ir a recursos. |
| 10 | Participación | Breve llamada dirigida a estudiantes. | Progresión amarilla de seis puntos. | Repite la CTA primaria vigente; no crea una acción competidora. |
| 11 | Aliados confirmados | Únicamente logos y nombres autorizados. | Franja de logos sin tarjetas ficticias. | Ver alianzas. |
| 12 | Cierre | Recordatorio de acción y canal de contacto. | Fondo Azul noche con patrón Braille tenue. | Primaria: CTA vigente. Secundaria: contactar. |

### 4.2 El reto (`/reto`) — 6 módulos

1. **Introducción:** qué significa desarrollar tecnología Braille electrónica refrescable en esta edición.
2. **Requisito mínimo competitivo:** una celda de seis puntos funcional y controlable electrónicamente.
3. **Diagrama técnico de celda:** representación clara de los seis puntos, estados y control; no se presentará como plano de construcción definitivo.
4. **Posibilidades de evolución:** multicelda, teclado, conexión a computadora, Bluetooth, batería y modularidad, explícitamente como posibilidades y no requisitos adicionales.
5. **Principios de diseño:** accesible, funcional, abierto, modular, reparable y reproducible.
6. **CTA documental:** acceso a la Guía Técnica Oficial.

### 4.3 Participar (`/participar`) — 7 módulos

1. **Elegibilidad:** estudiantes matriculados en IES del Ecuador.
2. **Equipos:** 3 a 5 integrantes; equipos interdisciplinarios e inter-IES cuando las bases lo permitan.
3. **Qué ocurre en Fase 1:** Bootcamp, Design Package, office hours y Design Review.
4. **Qué ocurre después de ser finalista:** prototipado, mentoría y Demo Day, sujeto a las condiciones vigentes.
5. **Proceso de inscripción:** tres pasos visibles, sin ocultar requisitos importantes.
6. **Preguntas de elegibilidad:** respuestas breves y enlaces a las bases.
7. **Formulario o enlace de inscripción:** visible solo mientras esté abierto; cuando cierre, reemplazar por una pantalla de cierre y canales oficiales de seguimiento.

### 4.4 Cronograma (`/cronograma`) — 4 módulos

1. **Vista completa de fases:** Fase 1 y Fase 2 diferenciadas por estructura, no solo por color.
2. **Hitos detallados:** fecha, actividad, resultado esperado y enlace a la fuente aplicable.
3. **Próximo hito:** componente mantenible con fecha y descripción, que se actualiza desde una única fuente de datos.
4. **Notas operativas:** cambios, ventanas protegidas, sedes propuestas o condiciones pendientes con redacción explícita de su estado.

### 4.5 Recursos (`/recursos`) — 5 módulos

1. **Documentos esenciales:** bases, reglamento, guía técnica, rúbrica y formulario.
2. **Materiales por etapa:** inscripción, Bootcamp, Design Package, prototipado y Demo Day.
3. **FAQ:** cuestiones recurrentes, con enlaces a fuentes oficiales cuando corresponda.
4. **Versiones y actualizaciones:** número de versión, fecha y resumen de cambio en tipografía monoespaciada.
5. **Soporte:** canal de consulta técnica u operativa, con tiempos de respuesta solo si se establecen.

### 4.6 BrailleLab Ecuador (`/braillelab`) — 5 módulos

1. **Presentación de la marca madre:** propósito y relación con el Challenge.
2. **Principios de trabajo:** co-diseño, validación, aprendizaje y tecnología accesible.
3. **Línea de proceso:** investigación aplicada, diseño, prueba, iteración y documentación; no prometer resultados institucionales sin evidencia publicada.
4. **Galería editorial:** fotos reales de procesos, pruebas, componentes, cuadernos o sesiones autorizadas.
5. **Colaboración:** enlace a contacto para organizaciones, mentoría o trabajo futuro.

### 4.7 Aliados y contacto (`/alianzas`) — 5 módulos

1. **Formas de apoyo:** patrocinio, mentoría, difusión, recursos técnicos o vinculación institucional.
2. **Qué puede aportar cada perfil:** explicación breve y no contractual.
3. **Aliados confirmados:** logos, nombre, modalidad de apoyo y enlace solo con autorización de marca.
4. **Dossier de patrocinio:** descarga si su publicación está autorizada.
5. **Canales de contacto:** correo institucional y formulario de consulta; ningún compromiso se considera aceptado por el formulario.

## 5. Dirección visual y medios

### Recursos prioritarios

| Recurso | Uso | Condición |
| --- | --- | --- |
| Fotografía documental propia | Hero secundario, proceso, galería y cierre. | Consentimiento de imagen y pie de foto útil. |
| Macro de prototipo o componentes | Hero, reto y recursos técnicos. | Mostrar material real, no una simulación presentada como prototipo. |
| Diagrama de la celda de seis puntos | Hero alternativo y página del reto. | Informativo; no sustituye a la guía técnica. |
| Flujo de fases | Inicio y cronograma. | Debe reflejar el cronograma oficial vigente. |
| Retícula Braille | Texturas, transición y estados. | Sutil, decorativa y excluida de lectores de pantalla. |
| Diagramas de arquitectura | Reto y recursos, cuando existan fuentes verificadas. | Simplificados y con descripción textual. |

### Aplicación de identidad

- BrailleLab: Azul noche, Cian eléctrico y Verde petróleo; composición estable y de investigación aplicada.
- BrailleTech: misma base, con Amarillo señal para acción competitiva, hitos y progreso.
- Nube para lectura, formularios y secciones largas; la web no replica la proporción cromática del dossier.
- Coral solo para alertas, cierres o cambios que requieren atención.
- Titulares: Space Grotesk o equivalente; lectura/interfaz: Atkinson Hyperlegible o equivalente; datos: IBM Plex Mono o equivalente.

## 6. Reglas para una presencia genuina

1. No publicar cifras de impacto, alianzas, speakers, mentores, ganadores, fotografías o testimonios que no existan o no estén autorizados.
2. No llenar secciones con fotos de stock de personas frente a laptops ni con textos abstractos de innovación.
3. Toda fotografía debe describir qué ocurrió, cuándo y en qué contexto, salvo que la privacidad exija una descripción más general.
4. Cada CTA debe describir su acción real: `Inscribir equipo`, `Descargar bases`, `Consultar cronograma` o `Contactar al equipo`.
5. Las fechas, sede, apoyos y condiciones cambian desde un origen de contenido único; no se duplican manualmente entre páginas.

## 7. Contenido y estados de publicación

| Estado | Tratamiento en web |
| --- | --- |
| Confirmado para publicación | Se publica con fuente, fecha y enlace cuando corresponda. |
| Pendiente de confirmación | No se publica como hecho; puede mostrarse como “sujeto a confirmación” solo si es necesario para orientar. |
| En negociación | No se muestra como aliado, patrocinio o beneficio confirmado. |
| Cerrado | Se conserva en una página de cierre o memoria, con su estado real. |

## 8. Fases de producción

1. **Arquitectura aprobada:** esta guía y definición de rutas/módulos.
2. **Inventario editorial:** reunir texto vigente, documentos, enlaces, fotos y permisos de cada módulo.
3. **Wireframes:** diseñar escritorio y móvil de Inicio, El reto y Participar antes de extender el sistema.
4. **Sistema de componentes:** navegación, CTA, tarjetas, línea temporal, fichas documentales, alertas y pie de página.
5. **Diseño visual:** aplicar tipografía, tokens de color, diagramas y selección de medios.
6. **Implementación y carga:** construir rutas, contenido editable y estados de publicación.
7. **Validación:** accesibilidad, teclado, móvil, enlaces, documentos, contraste, rendimiento y revisión de datos publicados.

## 9. Criterios de aceptación para iniciar implementación

- Las siete rutas, objetivos y módulos de esta guía están aprobados.
- Existe un inventario de contenido que identifica fuente, responsable, estado y permiso de publicación.
- Las fechas, vínculos de inscripción, sede, aliados y apoyos han sido confirmados o aparecen con su condición real.
- Se cuenta con al menos un recurso visual real o diagrama técnico para el hero; no se sustituirá por una imagen genérica de stock.
- Los diseños de Inicio, El reto y Participar se revisaron en escritorio y móvil antes de codificar el resto del sitio.

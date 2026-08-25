# Inventario editorial web — BrailleTech Challenge Ecuador 2026

**Versión:** 1.0  
**Estado:** base de carga editorial; no autoriza por sí misma publicaciones ni cambios de estado.  
**Arquitectura relacionada:** `ARQUITECTURA_WEB_BRAILLETECH_2026_v1_0.md`.

## 1. Uso de este inventario

Este documento conecta cada módulo de la web con su contenido, fuente, estado de publicación, recurso visual y responsable de revisión. Debe actualizarse antes de cargar contenido al repositorio `Hedurtado/braillelab-web`.

Una fuente documentada no equivale automáticamente a autorización de publicación. La persona responsable de contenidos debe verificar vigencia, enlaces, datos personales, autorizaciones de marca y cualquier condición indicada aquí.

### Estados

| Estado | Significado |
| --- | --- |
| `Listo para edición` | Existe fuente base; requiere adaptación breve para web y revisión final. |
| `Pendiente de confirmar` | No debe publicarse como hecho hasta contar con evidencia actual. |
| `Pendiente de producir` | Requiere texto, fotografía, diagrama, enlace o componente nuevo. |
| `Condicionado` | Puede publicarse únicamente con la condición escrita indicada. |
| `No publicar aún` | Existe como información interna, de negociación o de archivo. |

### Roles por asignar

- **Contenido:** valida texto, fechas, vínculos y estado de publicación.
- **Diseño:** produce o selecciona los recursos gráficos y verifica identidad.
- **Técnico web:** implementa el módulo, accesibilidad y origen de datos.
- **Coordinación:** autoriza publicación de aliados, logos, datos institucionales y cambios operativos.

## 2. Fuente de verdad por tipo de contenido

| Tipo de contenido | Fuente primaria | Regla de uso |
| --- | --- | --- |
| Reto, elegibilidad y requisitos | `03_Bases_Reglamento/derivados/01_Bases_Reglamento_Publicas.pdf` y `02_Guia_Tecnica.pdf` | Adaptar para web sin cambiar su alcance. |
| Convocatoria y proceso | `03_Bases_Reglamento/derivados/03_Convocatoria_Oficial.pdf` | La versión pública vigente prevalece sobre copias o publicaciones previas. |
| Fechas y fases | `03_Bases_Reglamento/derivados/04_Cronograma_Oficial_Reprogramado.pdf` | Usar el cronograma reprogramado vigente. |
| Inscripción | `03_Bases_Reglamento/derivados/05_Formulario_Inscripcion.pdf` y enlace operativo confirmado | No crear ni publicar un enlace de registro sin autorización. |
| Rúbrica y licencias | `07_Rubrica_Evaluacion.pdf` y `06_Declaracion_Autoria_Licencias_Recursos.pdf` | Mostrar solo el resumen necesario y enlazar la fuente completa. |
| Seguridad y validación | `08_Protocolo_Seguridad_Laboratorios.pdf` y `09_Protocolo_Validacion_Usuarios_Braille.pdf` | No simplificar de forma que elimine salvaguardas. |
| Identidad y arquitectura | `GUIA_IDENTIDAD_WEB_BRAILLELAB_BRAILLETECH_2026.md` y `ARQUITECTURA_WEB_BRAILLETECH_2026_v1_0.md` | Aplicación visual y estructural aprobada. |
| Estado de aliados, sede y condiciones | `CONTEXTO_Y_BITACORA_BRAILLELAB.md` | Publicar solo información confirmada y autorizada. |

## 3. Inventario de navegación y componentes transversales

| ID | Módulo | Contenido inicial | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| G-01 | Marca y navegación | BrailleLab Ecuador + BrailleTech Challenge Ecuador 2026; enlaces a las siete rutas. | Arquitectura web. | Pendiente de producir. | Logo/wordmark y sello del Challenge autorizados. | Diseño, Técnico, Coordinación. |
| G-02 | CTA principal | `Inscribir equipo` mientras el registro esté activo. | Formulario y estado operativo confirmado. | Pendiente de confirmar. | Al cerrar, sustituir por mensaje de cierre; no dejar enlace inactivo. | Contenido, Técnico, Coordinación. |
| G-03 | Barra de estado | Hito vigente, fecha y enlace a más información. | Cronograma reprogramado. | Listo para edición. | Datos desde una sola fuente editable; texto + icono/patrón, no solo color. | Contenido, Técnico. |
| G-04 | Pie de página | Contacto institucional, redes confirmadas, coorganización autorizada, última actualización y futuros enlaces legales. | Coordinación y documentos aplicables. | Pendiente de confirmar. | No incluir redes, logos, aviso de privacidad o datos de contacto sin confirmación. | Contenido, Técnico, Coordinación. |

## 4. Inicio (`/`) — 12 módulos

| ID | Módulo | Contenido inicial propuesto | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| I-01 | Estado | Estado de convocatoria o próximo hito confirmado. | Cronograma reprogramado + coordinación. | Pendiente de confirmar. | No afirmar “inscripciones abiertas” hasta enlazar el registro activo. | Contenido, Técnico. |
| I-02 | Hero | `BrailleTech Challenge Ecuador 2026` + “Construyamos tecnología Braille desde Ecuador”. | Convocatoria oficial. | Listo para edición. | Hero con macro real de prototipo o diagrama de celda de seis puntos; no foto de stock. | Contenido, Diseño. |
| I-03 | Datos esenciales | Estudiantes de IES del Ecuador; equipos de 3 a 5; dos fases; Demo Day el 12 de diciembre de 2026. | Bases y cronograma reprogramado. | Listo para edición. | Cuatro fichas de datos; la sede no se incluye aquí mientras siga pendiente. | Contenido, Diseño. |
| I-04 | Reto en una frase | Diseño y demostración de una celda Braille refrescable de seis puntos controlable electrónicamente. | Convocatoria y Guía Técnica. | Listo para edición. | Diagrama 1--4 / 2--5 / 3--6 con descripción accesible. | Contenido, Diseño. |
| I-05 | Recorrido | Formación y diseño → Design Review → prototipado y mentoría → Demo Day. | Cronograma reprogramado. | Listo para edición. | Ruta de nodos con fases diferenciadas mediante texto y estructura. | Contenido, Diseño, Técnico. |
| I-06 | Por qué importa | Accesibilidad, funcionalidad, apertura, modularidad, reparación y reproducibilidad. | Convocatoria oficial. | Listo para edición. | Retícula Braille de bajo contraste; texto corto, no manifiesto genérico. | Contenido, Diseño. |
| I-07 | Evidencia de proceso | Actividad, prototipo o sesión real de BrailleLab. | Evidencia y permiso de imagen por recopilar. | Pendiente de producir. | Foto documental con fecha/contexto y consentimiento; ocultar módulo si aún no existe. | Diseño, Coordinación. |
| I-08 | Próximos hitos | Hasta cuatro fechas del cronograma vigente. | Cronograma reprogramado. | Listo para edición. | Componente alimentado desde datos, no fechas repetidas manualmente. | Contenido, Técnico. |
| I-09 | Recursos destacados | Bases, guía técnica, formulario y FAQ. | Documentos públicos y FAQ por producir. | Parcial: FAQ pendiente. | Tarjetas con tipo, versión y enlace; no duplicar PDFs obsoletos. | Contenido, Diseño, Técnico. |
| I-10 | Llamado a participar | Invitación concreta a equipos interdisciplinarios y de distintas IES. | Convocatoria oficial. | Listo para edición. | Amarillo señal como CTA de BrailleTech; conservar un único CTA principal. | Contenido, Diseño. |
| I-11 | Aliados confirmados | Sin contenido inicial hasta contar con aprobación y autorización de marca. | Bitácora y acuerdos. | No publicar aún. | Ocultar módulo completo si no hay aliados confirmados. | Coordinación, Diseño, Técnico. |
| I-12 | Cierre | Recordatorio de inscripción o contacto según estado de convocatoria. | Estado operativo confirmado. | Pendiente de confirmar. | Fondo Azul noche y patrón sutil; CTA con acción real. | Contenido, Diseño, Técnico. |

## 5. El reto (`/reto`) — 6 módulos

| ID | Módulo | Contenido inicial propuesto | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| R-01 | Introducción | El Challenge aborda tecnología Braille electrónica refrescable desde Ecuador. | Convocatoria oficial. | Listo para edición. | Apertura editorial breve. | Contenido. |
| R-02 | Requisito mínimo | Celda Braille refrescable de seis puntos, funcional y controlable electrónicamente. | Convocatoria y Guía Técnica. | Listo para edición. | Destacado accesible, sin ambigüedad sobre seis puntos. | Contenido, Diseño. |
| R-03 | Diagrama técnico | Puntos 1--6, estados y control electrónico general. | Guía Técnica. | Pendiente de producir. | No presentar como BOM, plano definitivo ni arquitectura obligatoria. | Diseño, Contenido técnico. |
| R-04 | Posibilidades | Multicelda, teclado, conexión con computadora, asistencia, Bluetooth, batería y modularidad. | Convocatoria oficial. | Listo para edición. | Etiqueta explícita: “posibilidades; no requisitos adicionales”. | Contenido, Diseño. |
| R-05 | Principios | Accesible, funcional, abierto, modular, reparable y reproducible. | Convocatoria y Bases. | Listo para edición. | Seis módulos o lista de principios. | Contenido, Diseño. |
| R-06 | Guía Técnica | Enlace y breve explicación de para qué sirve. | `02_Guia_Tecnica.pdf`. | Pendiente de confirmar enlace. | Publicar PDF o URL final en el repositorio web. | Contenido, Técnico. |

## 6. Participar (`/participar`) — 7 módulos

| ID | Módulo | Contenido inicial propuesto | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| P-01 | Elegibilidad | Estudiantes matriculados en IES del Ecuador. | Convocatoria oficial. | Listo para edición. | Enlace a Bases para detalles. | Contenido. |
| P-02 | Equipos | 3 a 5 estudiantes; se permiten equipos interdisciplinarios e inter-IES. | Convocatoria oficial. | Listo para edición. | Diagrama de formación de equipo. | Contenido, Diseño. |
| P-03 | Fase 1 | Bootcamp, Design Package, office hours y Design Review. | Convocatoria y cronograma reprogramado. | Listo para edición. | Módulos secuenciales, no calendario saturado. | Contenido, Diseño. |
| P-04 | Finalistas | Prototipado, mentoría y Demo Day; recursos sujetos a condiciones vigentes. | Cronograma y documentos operativos. | Condicionado. | No prometer kits, premios, viajes o apoyos sin confirmación escrita. | Contenido, Coordinación. |
| P-05 | Inscripción en tres pasos | Revisar bases → preparar datos del equipo → enviar formulario. | Bases y formulario de inscripción. | Listo para edición. | Checklist visible; requisitos reales, no formulario ficticio. | Contenido, Diseño. |
| P-06 | FAQ de elegibilidad | Preguntas sobre IES, integrantes, interdisciplinariedad e inter-IES. | Bases y consultas consolidadas por preparar. | Pendiente de producir. | Respuestas revisadas antes de publicar. | Contenido, Coordinación. |
| P-07 | Registro | Formulario integrado o enlace al formulario oficial. | Enlace operativo por confirmar. | Pendiente de confirmar. | Debe incluir aviso de privacidad y ruta de soporte; no recolectar datos en la web sin definición operativa. | Técnico, Coordinación. |

## 7. Cronograma (`/cronograma`) — 4 módulos

| ID | Módulo | Contenido inicial propuesto | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| C-01 | Fases completas | Fase 1 y Fase 2 con etapas y resultados. | Cronograma reprogramado. | Listo para edición. | Separación estructural además de color. | Contenido, Diseño. |
| C-02 | Hitos detallados | Fechas, hito y resultado, desde lanzamiento hasta cierre. | `04_Cronograma_Oficial_Reprogramado.pdf`. | Listo para edición. | Datos centralizados en un archivo de contenido. | Contenido, Técnico. |
| C-03 | Próximo hito | Fecha y acción inmediata para participantes. | Cronograma reprogramado + coordinación. | Pendiente de confirmar. | Se actualiza sin tocar varios componentes. | Contenido, Técnico. |
| C-04 | Notas operativas | Ventanas protegidas y condiciones de sede. | Cronograma reprogramado y bitácora. | Condicionado. | Hotel Ajaví: “sede propuesta, sujeta a confirmación escrita”; omitir si no es necesario comunicarlo. | Contenido, Coordinación. |

## 8. Recursos (`/recursos`) — 5 módulos

| ID | Módulo | Contenido inicial propuesto | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| RE-01 | Esenciales | Bases, Guía Técnica, Rúbrica, Formulario y cronograma. | PDFs vigentes en `03_Bases_Reglamento/derivados/`. | Pendiente de confirmar enlaces. | Etiquetar idioma, versión, fecha y tipo de documento. | Contenido, Técnico. |
| RE-02 | Por etapa | Inscripción, Design Package, prototipado y Demo Day. | Plan operativo y materiales que se aprueben. | Pendiente de producir. | No mostrar materiales internos ni versiones no publicables. | Contenido, Coordinación. |
| RE-03 | FAQ | Preguntas frecuentes administrativas y técnicas. | Fuentes oficiales + respuestas revisadas. | Pendiente de producir. | Mantener enlaces a fuente para temas complejos. | Contenido. |
| RE-04 | Versiones | Lista de actualizaciones de documentos públicos. | Registro de cambios por consolidar. | Pendiente de producir. | IBM Plex Mono; no sustituye el documento original. | Contenido, Técnico. |
| RE-05 | Soporte | Canal de consulta y alcance de la ayuda. | Contacto institucional por confirmar. | Pendiente de confirmar. | No prometer tiempos de respuesta sin responsable asignado. | Coordinación, Técnico. |

## 9. BrailleLab Ecuador (`/braillelab`) — 5 módulos

| ID | Módulo | Contenido inicial propuesto | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| B-01 | Presentación | BrailleLab como marca madre; BrailleTech como iniciativa de 2026. | Arquitectura y contexto del proyecto. | Listo para edición. | Composición más estable que la página de Challenge. | Contenido, Diseño. |
| B-02 | Principios | Co-diseño, validación, aprendizaje y tecnología accesible. | Contexto y protocolos de validación. | Listo para edición. | No atribuir resultados colectivos aún no documentados. | Contenido. |
| B-03 | Línea de proceso | Investigación aplicada → diseño → prueba/revisión → iteración → documentación. | Contexto del proyecto. | Listo para edición. | Diagrama de proceso, no afirmación de proyecto terminado. | Contenido, Diseño. |
| B-04 | Galería editorial | Procesos, componentes, cuadernos, sesiones y pruebas autorizadas. | Material visual por recopilar. | Pendiente de producir. | Consentimiento, contexto y texto alternativo por imagen. | Diseño, Coordinación. |
| B-05 | Colaborar | Puerta de contacto para organizaciones, mentores y trabajo futuro. | Canal institucional por confirmar. | Pendiente de confirmar. | Debe separar consulta de compromiso o acuerdo. | Coordinación, Técnico. |

## 10. Aliados y contacto (`/alianzas`) — 5 módulos

| ID | Módulo | Contenido inicial propuesto | Fuente | Estado | Recurso / condición | Roles |
| --- | --- | --- | --- | --- | --- | --- |
| A-01 | Formas de apoyo | Patrocinio, mentoría, difusión, recursos técnicos y vinculación institucional. | Dossier y marco de reconocimiento. | Listo para edición. | Redacción orientativa, no oferta contractual. | Contenido, Coordinación. |
| A-02 | Perfiles de apoyo | Qué tipo de aporte puede considerar cada perfil. | Dossier de patrocinio. | Condicionado. | No fijar beneficios, valores o entregables sin acuerdo aplicable. | Contenido, Coordinación. |
| A-03 | Aliados confirmados | Nombre, logo, modalidad y enlace de apoyos aprobados. | Evidencia escrita y autorización de marca. | No publicar aún. | Ocultar hasta que exista al menos un aliado publicable. | Coordinación, Diseño, Técnico. |
| A-04 | Dossier | Descarga del dossier de patrocinio. | `02_Dossier_Patrocinio/master.pdf` y autorización de difusión. | Pendiente de confirmar. | Verificar versión pública y accesibilidad antes de enlazar. | Contenido, Coordinación. |
| A-05 | Contacto | Correo/formulario para consultas de alianza. | Canal institucional por confirmar. | Pendiente de confirmar. | Explicar que una consulta no confirma apoyo ni condiciones. | Coordinación, Técnico. |

## 11. Inventario de medios a recopilar o producir

| ID | Medio | Destinos | Requisito de entrega | Estado |
| --- | --- | --- | --- | --- |
| M-01 | Diagrama de celda de seis puntos | Inicio y El reto. | SVG accesible, versión clara/oscura, texto alternativo y fuente técnica indicada. | Pendiente de producir. |
| M-02 | Flujo de fases | Inicio y Cronograma. | SVG/HTML responsive, con información textual equivalente. | Pendiente de producir. |
| M-03 | Patrón modular Braille | Fondo y transiciones. | SVG decorativo, contraste bajo, sin contenido crítico. | Pendiente de producir. |
| M-04 | Fotos documentales | Inicio, BrailleLab y memoria futura. | Originales + versión web WebP/AVIF + consentimiento y pie de foto. | Pendiente de recopilar. |
| M-05 | Macro de componentes/prototipo | Hero y El reto. | Fotografía real, formato horizontal, texto alternativo. | Pendiente de recopilar. |
| M-06 | Logos institucionales | Navegación/pie/aliados. | SVG o PNG transparente, autorización de uso y nombre oficial. | Pendiente de confirmar. |
| M-07 | Iconografía de interfaz | Todo el sitio. | Un único set SVG consistente, etiquetas accesibles para botones de solo icono. | Pendiente de seleccionar. |

## 12. Bloqueadores antes de carga o publicación

1. Confirmar el enlace de inscripción, sus responsables y el aviso de privacidad aplicable.
2. Confirmar los canales institucionales públicos y los logos que pueden publicarse.
3. Seleccionar o producir el diagrama de celda de seis puntos y al menos un recurso visual real para el hero.
4. Revisar qué PDF y versión se alojarán/enlazarán desde el sitio web.
5. Definir quién aprueba cambios de cronograma, aliados, sede y recursos en el repositorio web.
6. No publicar el Hotel Ajaví como sede confirmada; la información disponible lo trata como propuesta sujeta a confirmación escrita.

## 13. Primer paquete editorial de implementación

Para iniciar wireframes y una primera versión funcional bastan estos elementos:

- Módulos G-01 a G-03.
- Módulos I-02 a I-06 e I-08 a I-10.
- Página completa El reto.
- Módulos P-01 a P-05, dejando P-07 como CTA controlado hasta enlazar el registro.
- Módulos C-01 y C-02.
- RE-01 con enlaces validados.
- M-01, M-02 y una fotografía o macro real aprobada.

El resto puede mantenerse oculto o en estado de preparación hasta que haya fuente y autorización verificables.

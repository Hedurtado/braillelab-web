# Guía de identidad web — BrailleLab Ecuador y BrailleTech Challenge Ecuador 2026

**Estado:** guía de diseño para la futura página web.  
**Fuente de identidad:** `Brief_Identidad_Visual_BrailleLab_BrailleTech_2026 (1).pdf` y `dossier_braillelab_color (2).pdf`.

## Propósito

Esta guía adapta la identidad visual del dossier a una interfaz digital. No debe trasladarse mecánicamente la distribución cromática pensada para el dossier: la web necesita alternar fondos, sostener lectura prolongada, mostrar estados de interacción y funcionar con accesibilidad en pantalla.

BrailleLab Ecuador es la marca madre y permanente. BrailleTech Challenge Ecuador 2026 es una campaña anual perteneciente a esa marca: debe sentirse más competitiva, rápida y energética, sin convertirse en una identidad distinta.

## Paleta

| Color | Hex | Uso web principal |
| --- | --- | --- |
| Azul noche | `#0B132B` | Base institucional, navegación, hero, pie de página y fondos oscuros. |
| Cian eléctrico | `#00AFC7` | Tecnología, enlaces, puntos activos, interacción y detalles de sistema. |
| Verde petróleo | `#007C83` | Accesibilidad, información de apoyo, recursos y estados positivos no competitivos. |
| Amarillo señal | `#F4C542` | BrailleTech, hitos, progreso, fechas, llamados principales a la acción y energía competitiva. |
| Coral | `#F26B4A` | Alertas, plazos próximos, avisos críticos y llamados puntuales; nunca como color decorativo dominante. |
| Nube | `#F6F8FB` | Fondos claros, secciones extensas, formularios, lectura y respiración visual. |
| Blanco | `#FFFFFF` | Texto y contraste sobre fondos oscuros; superficies puntuales cuando sea necesario. |

### Distribución en interfaz

La proporción 80% Azul noche, 15% Amarillo y 5% de acentos corresponde al dossier; no es una regla de distribución para la web.

- Las áreas de marca, navegación y apertura pueden ser Azul noche con texto blanco y detalles cian.
- Las páginas largas deben alternar Azul noche con Nube para evitar fatiga visual y facilitar la lectura.
- BrailleTech usa Amarillo señal como acento dominante en botones de inscripción, avances de fase, cronogramas, hitos y Demo Day.
- Cian eléctrico y Verde petróleo deben reforzar navegación, información y accesibilidad; no competir con el Amarillo por el llamado principal de BrailleTech.
- Coral se reserva para condiciones que requieren atención inmediata, como cierres, cambios o alertas. No se usa para estados de éxito.
- Todo uso de color debe mantener contraste suficiente y no ser el único medio para comunicar un estado.

### Tokens funcionales y contraste

Los valores de marca no se usan de forma intercambiable para texto o controles. La implementación debe definir tokens semánticos y conservar estas parejas mínimas verificadas para texto normal (WCAG AA, al menos 4.5:1):

| Token propuesto | Valor | Fondo permitido | Contraste aproximado | Uso |
| --- | --- | --- | ---: | --- |
| `--color-on-night` | `#FFFFFF` | Azul noche | 18.38:1 | Texto principal en superficies oscuras. |
| `--color-link-on-night` | `#00AFC7` | Azul noche | 6.97:1 | Enlaces e interacción en superficies oscuras. |
| `--color-on-cloud` | `#0B132B` | Nube o blanco | 17.28:1 / 18.38:1 | Texto principal y controles en superficies claras. |
| `--color-link-on-cloud` | `#007C83` | Nube | 4.69:1 | Enlaces en superficies claras. |
| `--color-on-signal` | `#0B132B` | Amarillo señal | 11.30:1 | Texto e iconos de CTA Amarillo. |
| `--color-on-petrol` | `#FFFFFF` | Verde petróleo | 4.99:1 | Texto sobre bloques Verde petróleo. |
| `--color-focus-on-night` | `#F4C542` | Azul noche | 11.30:1 | Indicador de foco y contorno de controles sobre Azul noche. |

No usar Cian sobre Nube, Coral sobre Nube, Amarillo sobre Nube o Verde petróleo sobre Azul noche para texto normal. Si un color se utiliza para un icono grande, borde o gráfico, se verificará su contraste según ese uso; nunca será el único indicador de estado.

## Sistema de marca

### BrailleLab Ecuador

- Personalidad: investigación aplicada, accesibilidad, open hardware y construcción colaborativa.
- Núcleo cromático: Azul noche, Cian eléctrico y Verde petróleo.
- Composición: limpia, estable, modular y con espacios de lectura.
- Mensajes: I+D, validación, comunidad, tecnología accesible y conocimiento abierto.

### BrailleTech Challenge Ecuador 2026

- Personalidad: reto, equipos, prototipado, avance y demostración pública.
- Núcleo cromático: la misma base de BrailleLab, con Amarillo señal como acento fuerte.
- Composición: diagonales controladas, progresiones de puntos, indicadores de fase, contadores y módulos con sensación de movimiento.
- Mensajes: participación, fechas, equipos, reto técnico, Design Review, prototipado y Demo Day.

## Tipografía

| Rol | Dirección sugerida | Uso |
| --- | --- | --- |
| Títulos y marca | Space Grotesk, IBM Plex Sans o equivalente | Titulares, fechas, navegación principal y marca. |
| Texto e interfaces | Atkinson Hyperlegible, IBM Plex Sans o equivalente | Párrafos, formularios, botones, ayudas y navegación secundaria. |
| Código y datos | IBM Plex Mono o equivalente | BOM, requisitos, coordenadas, números de versión y detalles técnicos. |

La prioridad es la legibilidad. Deben evitarse fuentes excesivamente geométricas, condensadas o usadas en tamaños pequeños que reduzcan la claridad.

## Lenguaje gráfico

| Elemento | Aplicación en la web |
| --- | --- |
| Puntos Braille | Retícula modular, patrón discreto, indicador de estado o transición entre secciones. Nunca deben dificultar la lectura. |
| Circuitos y rutas | Líneas simples que conectan nodos, etapas o componentes. Evitar fondos con placas electrónicas saturadas. |
| Módulos | Tarjetas y bloques repetibles que comuniquen sistema, reparación y construcción por partes. |
| Fotografía | Manos con prototipos, detalles mecánicos/electrónicos, equipos trabajando y sesiones de prueba. |
| Diagramas | Arquitecturas, flujos y vistas explotadas simplificadas; la ingeniería forma parte de la estética. |
| Texturas | Relieves, matrices y patrones de puntos sutiles, con contraste bajo y sin comprometer legibilidad. |

## Aplicación por sección

| Sección | Dirección visual |
| --- | --- |
| Navegación, hero y pie de página | Azul noche; blanco para lectura; cian para interacción; Amarillo para CTA principal de BrailleTech. |
| El reto y cómo participar | Nube como base; módulos de contenido con Azul noche, Cian y Verde petróleo. |
| Cronograma y fases | Alternancia de Nube y Azul noche; Amarillo para hitos y progreso; Cian para estados navegables o activos. |
| Inscripción y formularios | Nube o blanco, tipografía de alta legibilidad, foco visible y botones Amarillo sobre Azul noche. |
| Recursos técnicos | Nube, datos técnicos en IBM Plex Mono y jerarquía clara entre documentos oficiales, guías y apoyo. |
| Avisos operativos | Coral solo para urgencias o cambios; incluir siempre texto que explique el estado. |

## Accesibilidad e interacción

- Cumplir contraste suficiente para texto, componentes y estados de foco.
- No comunicar estados únicamente mediante color: acompañar con texto, icono, etiqueta o patrón.
- Mantener foco de teclado visible y orden de navegación lógico.
- Respetar `prefers-reduced-motion`; las animaciones no deben ser necesarias para comprender contenido o completar acciones.
- Evitar carruseles automáticos, fondos en movimiento detrás de texto y patrones Braille de alto contraste.
- Usar texto alternativo útil en fotografía; los elementos decorativos deben ocultarse de lectores de pantalla.
- Los botones y enlaces deben usar los tokens funcionales definidos arriba; no se permiten combinaciones de marca sin contraste verificado.

## Criterio de consistencia

Antes de publicar una pantalla o pieza web, verificar que:

1. BrailleLab se reconoce como marca madre y BrailleTech como iniciativa anual.
2. El Amarillo protagoniza las acciones competitivas de BrailleTech, sin desplazar la base institucional de BrailleLab.
3. La distribución de color responde a la función de interfaz y no replica de forma rígida el dossier.
4. Los patrones, fotografías y animaciones no reducen legibilidad ni accesibilidad.
5. Solo se muestran aliados, apoyos, fechas, sedes y enlaces confirmados para publicación.

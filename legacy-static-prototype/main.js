const root = document.body.dataset.root;
const page = document.body.dataset.page;
const path = (route = "") => `${root}/${route}`.replace(/\/+/g, "/");

const navItems = [
  ["reto", "El reto"],
  ["participar", "Participar"],
  ["cronograma", "Cronograma"],
  ["recursos", "Recursos"],
  ["braillelab", "BrailleLab"],
  ["alianzas", "Aliados"],
];

const link = (route, label, className = "") =>
  `<a class="${className}" href="${path(route ? `${route}/` : "")}">${label}</a>`;

const eyebrow = (text) => `<p class="eyebrow">${text}</p>`;
const placeholder = (label, tone = "cyan") =>
  `<div class="media-placeholder media-placeholder--${tone}" aria-label="Espacio reservado para ${label}"><span>Recurso visual pendiente</span><strong>${label}</strong></div>`;
const sectionHeading = (eyebrowText, title, copy = "") =>
  `<div class="section-heading">${eyebrow(eyebrowText)}<h2>${title}</h2>${copy ? `<p>${copy}</p>` : ""}</div>`;

// Los medios pendientes se representan con bloques de color plano, sin imágenes ni texturas.
document.head.insertAdjacentHTML("beforeend", "<style>.media-placeholder::before{display:none!important}</style>");

document.querySelector("#cabecera").innerHTML = `
  <div class="status-bar"><div class="shell"><span class="status-dot" aria-hidden="true"></span><strong>Próxima etapa confirmada:</strong> convocatoria e inscripciones del 1 al 14 de septiembre de 2026.</div></div>
  <div class="site-header shell">
    <a class="brand" href="${path()}"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span><span><b>BrailleLab Ecuador</b><small>BrailleTech Challenge 2026</small></span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="principal-nav"><span></span><span></span><span></span><span class="sr-only">Abrir navegación</span></button>
    <nav id="principal-nav" aria-label="Navegación principal">
      ${navItems.map(([route, label]) => link(route, label, page === route ? "is-active" : "")).join("")}
    </nav>
  </div>`;

document.querySelector("#pie").innerHTML = `
  <div class="footer-main shell"><div><a class="brand brand--footer" href="${path()}"><b>BrailleLab Ecuador</b><small>BrailleTech Challenge Ecuador 2026</small></a><p>Investigación aplicada, aprendizaje y tecnología Braille accesible.</p></div><div><h2>Explora</h2>${link("reto", "El reto")}${link("participar", "Participar")}${link("cronograma", "Cronograma")}${link("recursos", "Recursos")}</div><div><h2>Estado de publicación</h2><p>Los canales institucionales, aliados y formulario se agregarán únicamente cuando estén confirmados para publicación.</p></div></div>
  <div class="footer-bottom shell"><span>Actualizado el 25 de agosto de 2026</span><span>Contenido sujeto a las fuentes oficiales vigentes.</span></div>`;

const home = () => `
  <section class="hero"><div class="shell hero-grid"><div>${eyebrow("BrailleLab Ecuador presenta")}<h1>BrailleTech<br><em>Challenge</em> Ecuador 2026</h1><p class="hero-copy">Un reto para diseñar y demostrar tecnología Braille electrónica refrescable desde Ecuador.</p><div class="hero-actions">${link("cronograma", "Consultar cronograma", "button button--primary")}${link("reto", "Conocer el reto", "button button--secondary")}</div><p class="hero-note">La inscripción se habilitará con su enlace oficial el 1 de septiembre de 2026.</p></div>${placeholder("Diagrama o macro de prototipo", "night")}</div></section>
  <section class="shell key-facts" aria-label="Datos esenciales"><article><strong>IES del Ecuador</strong><span>Participación estudiantil</span></article><article><strong>3 a 5</strong><span>Integrantes por equipo</span></article><article><strong>2 fases</strong><span>Diseño y prototipado</span></article><article><strong>12 dic.</strong><span>Demo Day 2026</span></article></section>
  <section class="shell split-section"><div>${sectionHeading("El desafío", "Una celda. Seis puntos. Muchas posibilidades.", "El requisito competitivo mínimo es una celda Braille refrescable de seis puntos funcional y controlable electrónicamente.")}${link("reto", "Ver alcance técnico", "text-link")}</div><div class="braille-cell" aria-label="Diagrama decorativo de una celda Braille de seis puntos"><span>1</span><span>4</span><span>2</span><span>5</span><span>3</span><span>6</span></div></section>
  <section class="section section--cloud"><div class="shell">${sectionHeading("Recorrido", "Del diseño a la demostración pública.")}<ol class="journey"><li><b>01</b><span>Formación y diseño<small>Bootcamp y Design Package</small></span></li><li><b>02</b><span>Design Review<small>Defensa técnica virtual</small></span></li><li><b>03</b><span>Prototipado y mentoría<small>Pruebas e iteración</small></span></li><li><b>04</b><span>Demo Day<small>12 de diciembre de 2026</small></span></li></ol></div></section>
  <section class="shell values-grid"><div>${sectionHeading("Por qué importa", "Tecnología que puede abrirse, repararse y reproducirse.")}</div><ul><li>Accesibilidad</li><li>Funcionalidad</li><li>Conocimiento abierto</li><li>Modularidad</li><li>Reparación</li><li>Reproducibilidad</li></ul></section>
  <section class="section section--night"><div class="shell closing"><div>${eyebrow("Próximo paso")}<h2>Consulta las fases y prepara a tu equipo.</h2><p>El registro se publicará solo mediante el formulario oficial habilitado.</p></div>${link("cronograma", "Consultar cronograma", "button button--signal")}</div></section>`;

const reto = () => `
  <section class="page-hero"><div class="shell"><div>${eyebrow("El reto")}<h1>Construir una interfaz Braille que <em>responda.</em></h1><p>La edición 2026 aborda tecnología Braille electrónica refrescable con un enfoque funcional, abierto y reproducible.</p></div>${placeholder("Diagrama técnico de celda", "petrol")}</div></section>
  <section class="shell content-grid"><article class="feature-card"><span class="card-index">01</span><h2>Requisito mínimo</h2><p>Una celda Braille refrescable de seis puntos, funcional y controlable electrónicamente.</p></article><article class="feature-card"><span class="card-index">02</span><h2>Principios de diseño</h2><p>Accesible, funcional, abierto, modular, reparable y reproducible.</p></article><article class="feature-card"><span class="card-index">03</span><h2>Posibilidades</h2><p>Multicelda, teclado, conexión a computadora, Bluetooth, batería y modularidad son posibilidades, no requisitos adicionales.</p></article></section>
  <section class="section section--cloud"><div class="shell split-section"><div class="braille-cell braille-cell--dark" aria-label="Representación de los puntos 1 a 6 de una celda Braille"><span>1</span><span>4</span><span>2</span><span>5</span><span>3</span><span>6</span></div><div>${sectionHeading("Seis puntos", "Una representación clara, no un plano definitivo.", "El diagrama técnico se incorporará tras su producción y revisión. La guía oficial conserva el alcance técnico completo.")}<span class="notice">Guía Técnica: enlace público pendiente de confirmación.</span></div></div></section>`;

const participar = () => `
  <section class="page-hero"><div class="shell"><div>${eyebrow("Participar")}<h1>Forma un equipo y convierte una idea en una demostración.</h1><p>La convocatoria está dirigida a estudiantes matriculados en instituciones de educación superior del Ecuador.</p></div>${placeholder("Formación de equipos", "signal")}</div></section>
  <section class="shell rule-grid"><article><b>3–5</b><h2>Integrantes</h2><p>Se permiten equipos interdisciplinarios e inter-IES.</p></article><article><b>01–14</b><h2>Septiembre</h2><p>Ventana oficial de convocatoria e inscripciones.</p></article><article><b>20</b><h2>Equipos</h2><p>Capacidad máxima de admisión a la primera fase.</p></article></section>
  <section class="section section--cloud"><div class="shell">${sectionHeading("Proceso", "Tres pasos para prepararte.")}<ol class="steps"><li><b>1</b><div><h3>Revisa las bases</h3><p>Consulta elegibilidad, requisitos y documentos oficiales.</p></div></li><li><b>2</b><div><h3>Prepara los datos</h3><p>Equipo, integrantes, institución, carrera y responsable principal.</p></div></li><li><b>3</b><div><h3>Envía el formulario</h3><p>Este paso se habilitará únicamente al publicarse el enlace oficial.</p></div></li></ol><aside class="notice notice--wide"><strong>Registro aún no habilitado.</strong> El sitio no recopila datos personales mientras no exista una ruta operativa y un aviso de privacidad confirmado.</aside></div></section>`;

const cronograma = () => {
  const events = [["24–31 ago.", "Predifusión nacional", "Contacto con IES, comunidades, mentores y aliados."], ["1–14 sep.", "Convocatoria e inscripciones", "Postulaciones formales."], ["21–27 sep.", "Design Bootcamp", "Seis sesiones de formación."], ["4 oct.", "Entrega del Design Package", "Cierre documental."], ["10 oct.", "Design Review", "Defensa técnica virtual."], ["13 oct.", "Finalistas", "Hasta 10 finalistas y 2 suplentes."], ["14 oct.–29 nov.", "Prototipado y mentoría", "Desarrollo y cinco mentorías formales por equipo."], ["4 dic.", "Entrega final", "Repositorio, pruebas, seguridad y presentación."], ["12 dic.", "Demo Day", "Evaluación presencial y cierre competitivo, de 10h00 a 17h00."]];
  return `<section class="page-hero"><div class="shell"><div>${eyebrow("Cronograma oficial reprogramado")}<h1>Un proceso con hitos claros y tiempo para iterar.</h1><p>Las fechas se administran desde una fuente oficial. Cualquier cambio se publicará con su estado y fecha correspondiente.</p></div>${placeholder("Flujo de fases", "cyan")}</div></section><section class="shell timeline"><div class="timeline-intro"><span class="status-pill">Próximo hito</span><h2>Convocatoria e inscripciones</h2><p>Del 1 al 14 de septiembre de 2026.</p></div>${events.map(([date, title, description]) => `<article><time>${date}</time><div><h3>${title}</h3><p>${description}</p></div></article>`).join("")}</section><section class="shell notice notice--wide"><strong>Sede:</strong> el Demo Day tiene una sede propuesta sujeta a confirmación escrita de disponibilidad, condiciones, costos, accesibilidad y autorizaciones.</section>`;
};

const recursos = () => `
  <section class="page-hero"><div class="shell"><div>${eyebrow("Recursos")}<h1>Fuentes claras para cada etapa.</h1><p>Las versiones públicas se publicarán desde aquí solo después de validar su enlace, versión y permiso de difusión.</p></div>${placeholder("Fichas documentales", "cyan")}</div></section>
  <section class="shell document-grid">${[["Bases y Reglamento", "Elegibilidad, alcance y reglas de participación."], ["Guía Técnica", "Orientación de alcance técnico para equipos."], ["Cronograma Oficial", "Fases, hitos y fechas vigentes."], ["Formulario de inscripción", "Se habilitará con el enlace oficial."], ["Rúbrica de evaluación", "Criterios de la evaluación competitiva."], ["Protocolos", "Seguridad de laboratorios y validación con usuarios."]].map(([title, copy], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h2>${title}</h2><p>${copy}</p><small>Enlace pendiente de validación pública</small></article>`).join("")}</section><section class="section section--cloud"><div class="shell">${sectionHeading("Preguntas frecuentes", "La información se añadirá cuando haya respuestas revisadas.", "Para asuntos complejos, la fuente oficial prevalecerá sobre cualquier resumen web.")}</div></section>`;

const braillelab = () => `
  <section class="page-hero"><div class="shell"><div>${eyebrow("BrailleLab Ecuador")}<h1>Investigación aplicada para una tecnología más <em>accesible.</em></h1><p>BrailleLab es la marca madre. BrailleTech Challenge Ecuador 2026 es una de sus iniciativas de aprendizaje, diseño y demostración.</p></div>${placeholder("Proceso de BrailleLab", "petrol")}</div></section>
  <section class="shell process"><div>${sectionHeading("Cómo trabajamos", "Del aprendizaje a la documentación.")}</div><ol><li><b>01</b>Investigación aplicada</li><li><b>02</b>Diseño</li><li><b>03</b>Prueba y revisión</li><li><b>04</b>Iteración</li><li><b>05</b>Documentación</li></ol></section><section class="section section--cloud"><div class="shell split-section"><div>${placeholder("Galería editorial autorizada", "night")}</div><div>${sectionHeading("Evidencia real", "El proceso se mostrará con contexto y autorización.", "Las fotografías, cuadernos, componentes y sesiones se incorporarán solo cuando cuenten con permiso, pie de foto y texto alternativo útil.")}</div></div></section>`;

const alianzas = () => `
  <section class="page-hero"><div class="shell"><div>${eyebrow("Aliados y contacto")}<h1>La colaboración se construye con condiciones claras.</h1><p>Existen distintas formas de contribuir al proceso, sin que una consulta implique compromiso, aprobación o reconocimiento público.</p></div>${placeholder("Colaboración y proceso", "signal")}</div></section>
  <section class="shell support-grid">${[["Patrocinio", "Apoyo económico o en especie sujeto a acuerdo aplicable."], ["Mentoría", "Acompañamiento técnico o profesional en etapas definidas."], ["Difusión", "Conexión con comunidades e instituciones de educación superior."], ["Recursos técnicos", "Aportes compatibles con las necesidades y condiciones vigentes."], ["Vinculación institucional", "Posibles espacios de colaboración con alcance documentado."]].map(([title, copy]) => `<article><h2>${title}</h2><p>${copy}</p></article>`).join("")}</section>
  <section class="section section--night"><div class="shell closing"><div>${eyebrow("Contacto")}<h2>Canal institucional en preparación.</h2><p>El correo y el formulario de consulta se publicarán cuando estén confirmados. Ninguna consulta constituirá aceptación de apoyo o condiciones.</p></div></div></section>`;

const pages = { inicio: home, reto, participar, cronograma, recursos, braillelab, alianzas };
document.querySelector("#contenido").innerHTML = pages[page]();

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#principal-nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("is-open", !isOpen);
});

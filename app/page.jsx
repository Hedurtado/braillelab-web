import SiteShell, { ArrowLink } from "../components/SiteShell";
import { Eyebrow, SolidPlaceholder } from "../components/Visuals";
import BrailleCellDiagram from "../components/BrailleCellDiagram";
import PhaseFlow from "../components/PhaseFlow";
import { registrationAction } from "../content/site";

const facts = [["IES del Ecuador", "Participación estudiantil"], ["3 a 5", "Integrantes por equipo"], ["2 fases", "Diseño y prototipado"], ["12 dic.", "Demo Day 2026"]];

export default function Home() {
  const action = registrationAction();
  return <SiteShell>
    <section className="hero"><div className="hero-glow" aria-hidden="true" /><div className="wrap hero-grid"><div className="reveal"><Eyebrow>BrailleLab Ecuador presenta</Eyebrow><h1>BrailleTech <em>Challenge</em> Ecuador 2026</h1><p className="lede">Un reto para diseñar y demostrar tecnología Braille electrónica refrescable desde Ecuador.</p><div className="actions"><ArrowLink href={action.href} primary external={action.external}>{action.label}</ArrowLink><ArrowLink href="/reto">Conocer el reto</ArrowLink></div><p className="hero-note">Inscripciones: 1–14 de septiembre de 2026.</p></div><SolidPlaceholder label="Diagrama o macro de prototipo" accent="night" /></div></section>
    <section className="wrap fact-rail" aria-label="Datos esenciales">{facts.map(([value, label]) => <article key={value}><strong>{value}</strong><span>{label}</span></article>)}</section>
    <section className="wrap challenge-intro"><div><Eyebrow>El desafío</Eyebrow><h2>Una celda. Seis puntos.<br />Muchas posibilidades.</h2><p>El requisito competitivo mínimo es una celda Braille refrescable de seis puntos funcional y controlable electrónicamente.</p><ArrowLink href="/reto">Ver alcance técnico</ArrowLink></div><BrailleCellDiagram /></section>
    <section className="cloud-section"><div className="wrap"><Eyebrow>Recorrido</Eyebrow><h2>Del diseño a la demostración pública.</h2><PhaseFlow /></div></section>
    <section className="wrap value-section"><div><Eyebrow>Por qué importa</Eyebrow><h2>Tecnología que puede abrirse, repararse y reproducirse.</h2></div><ul>{["Accesibilidad", "Funcionalidad", "Conocimiento abierto", "Modularidad", "Reparación", "Reproducibilidad"].map((value) => <li key={value}>{value}</li>)}</ul></section>
    <section className="dark-cta"><div className="wrap cta-content"><div><Eyebrow>Próximo paso</Eyebrow><h2>Consulta las fases y prepara a tu equipo.</h2><p>El registro se publicará solo mediante el formulario oficial habilitado.</p></div><ArrowLink href={action.href} primary external={action.external}>{action.label}</ArrowLink></div></section>
  </SiteShell>;
}

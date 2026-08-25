import SiteShell from "../../components/SiteShell";
import PageHero from "../../components/PageHero";

export const metadata = { title: "Participar" };

export default function ParticiparPage() {
  return <SiteShell><PageHero eyebrow="Participar" title="Forma un equipo y convierte una idea en una demostración." visual="Formación de equipos" accent="signal">La convocatoria está dirigida a estudiantes matriculados en instituciones de educación superior del Ecuador.</PageHero><section className="wrap metrics">{[["3–5", "Integrantes", "Se permiten equipos interdisciplinarios e inter-IES."], ["01–14", "Septiembre", "Ventana oficial de convocatoria e inscripciones."], ["20", "Equipos", "Capacidad máxima de admisión a la primera fase."]].map(([value, title, copy]) => <article className="metric" key={title}><b>{value}</b><h2>{title}</h2><p>{copy}</p></article>)}</section><section className="cloud-section"><div className="wrap"><p className="eyebrow">Proceso</p><h2>Tres pasos para participar.</h2><div className="steps">{[["1", "Revisa las bases", "Consulta elegibilidad, requisitos y documentos oficiales."], ["2", "Prepara los datos", "Equipo, integrantes, institución, carrera y responsable principal."], ["3", "Envía el formulario", "Completa la inscripción entre el 1 y el 14 de septiembre de 2026."]].map(([number, title, copy]) => <article className="step" key={number}><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section></SiteShell>;
}

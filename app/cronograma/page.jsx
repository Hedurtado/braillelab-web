import SiteShell from "../../components/SiteShell";
import PageHero from "../../components/PageHero";
import TimelineExplorer from "../../components/TimelineExplorer";

export const metadata = { title: "Cronograma" };
export default function CronogramaPage() {
  return <SiteShell><PageHero eyebrow="Cronograma oficial reprogramado" title="Explora cada etapa del proceso." visual="Flujo de fases">Filtra las fases y selecciona un hito para conocer qué sucede en cada momento de BrailleTech Challenge.</PageHero><section className="wrap timeline"><div className="timeline-header"><span className="pill">Próximo hito</span><h2>Convocatoria e inscripciones</h2><p>Del 1 al 14 de septiembre de 2026.</p></div><TimelineExplorer /></section></SiteShell>;
}

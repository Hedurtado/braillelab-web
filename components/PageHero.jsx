import { Eyebrow, SolidPlaceholder } from "./Visuals";

export default function PageHero({ eyebrow, title, children, visual, accent = "cyan" }) {
  return <section className="page-hero"><div className="wrap page-hero-grid"><div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{children}</p></div><SolidPlaceholder label={visual} accent={accent} /></div></section>;
}

import { faqGroups } from "../content/faq";
import styles from "./Faq.module.css";

export default function Faq() {
  return <section className={styles.faq}><p className={styles.intro}>Esta sección reúne información para preparar la inscripción. Las Bases y Reglamento, la Guía Técnica, la Rúbrica y el Cronograma Oficial desarrollan el alcance completo de la competencia.</p>{faqGroups.map((group) => <div className={styles.group} key={group.title}><h2>{group.title}</h2>{group.items.map(([question, answer]) => <details className={styles.item} key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>)}</section>;
}

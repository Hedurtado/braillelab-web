import styles from "./PhaseFlow.module.css";
import { ArrowUpRight } from "lucide-react";

const phases = [["01", "Formación y diseño", "Bootcamp y Design Package"], ["02", "Design Review", "Defensa técnica virtual"], ["03", "Prototipado y mentoría", "Pruebas e iteración"], ["04", "Demo Day", "12 de diciembre de 2026"]];

export default function PhaseFlow() {
  return <ol className={styles.journey} aria-label="Recorrido de BrailleTech Challenge">{phases.map(([number, title, detail]) => <li key={number}><a href="/cronograma"><b>{number}</b><span>{title}<small>{detail}</small></span><ArrowUpRight aria-hidden="true" size={18} /></a></li>)}</ol>;
}

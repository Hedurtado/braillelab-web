"use client";

import { useState } from "react";
import styles from "./BrailleCellDiagram.module.css";

const orderedDots = [1, 4, 2, 5, 3, 6];

export default function BrailleCellDiagram() {
  const [activeDots, setActiveDots] = useState([1, 4]);
  const activeLabel = activeDots.length ? [...activeDots].sort((a, b) => a - b).join(", ") : "ninguno";

  function toggleDot(dot) {
    setActiveDots((current) => current.includes(dot) ? current.filter((item) => item !== dot) : [...current, dot]);
  }

  return <section className={styles.cell} aria-label="Explorador de una celda Braille de seis puntos"><div className={styles.header}><p>Explora una celda</p><button type="button" onClick={() => setActiveDots([])}>Limpiar patrón</button></div><div className={styles.grid} role="group" aria-label="Puntos Braille; activa o desactiva cada punto">{orderedDots.map((dot) => <button key={dot} type="button" aria-pressed={activeDots.includes(dot)} aria-label={`Punto ${dot}: ${activeDots.includes(dot) ? "activo" : "inactivo"}`} onClick={() => toggleDot(dot)}>{dot}</button>)}</div><p className={styles.state} aria-live="polite"><b>Patrón actual:</b> puntos {activeLabel}.</p><p className={styles.hint}>Selecciona los puntos para observar cómo se forma una configuración Braille.</p></section>;
}

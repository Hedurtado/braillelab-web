"use client";

import { useMemo, useState } from "react";
import { timelineEvents, timelineFilters } from "../content/timeline";
import styles from "./TimelineExplorer.module.css";

export default function TimelineExplorer() {
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState("inscripciones");
  const visibleEvents = useMemo(() => timelineEvents.filter((event) => filter === "all" || event.phase === filter), [filter]);
  const selected = visibleEvents.find((event) => event.id === selectedId) || visibleEvents[0];

  function selectFilter(id) {
    setFilter(id);
    const first = timelineEvents.find((event) => id === "all" || event.phase === id);
    if (first) setSelectedId(first.id);
  }

  return <section className={styles.explorer} aria-label="Explorador interactivo del cronograma">
    <div className={styles.filters} role="group" aria-label="Filtrar cronograma por fase">
      {timelineFilters.map((item) => <button key={item.id} type="button" aria-pressed={filter === item.id} className={filter === item.id ? styles.selectedFilter : ""} onClick={() => selectFilter(item.id)}>{item.label}</button>)}
    </div>
    <div className={styles.grid}>
      <ol className={styles.eventList} aria-label="Hitos disponibles">
        {visibleEvents.map((event) => <li key={event.id}><button type="button" className={selected.id === event.id ? styles.selectedEvent : ""} onClick={() => setSelectedId(event.id)} aria-pressed={selected.id === event.id}><time>{event.date}</time><span>{event.title}</span><small>{event.phaseLabel}</small></button></li>)}
      </ol>
      <article className={styles.detail} aria-live="polite">
        <p>Hito seleccionado</p>
        <time>{selected.date}</time>
        <h2>{selected.title}</h2>
        <p>{selected.copy}</p>
        <span>{selected.phaseLabel}</span>
      </article>
    </div>
  </section>;
}

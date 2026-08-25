"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { registrationAction, registrationStatus, site } from "../content/site";
import styles from "./SiteShell.module.css";

const links = [
  ["/reto", "El reto"],
  ["/participar", "Participar"],
  ["/cronograma", "Cronograma"],
  ["/recursos", "Recursos"],
  ["/braillelab", "BrailleLab"],
  ["/alianzas", "Aliados"],
];

function Mark() {
  return <span className="brand-mark" aria-hidden="true">{Array.from({ length: 6 }).map((_, index) => <i key={index} />)}</span>;
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const action = registrationAction();

  return <>
    <a className="skip-link" href="#main">Saltar al contenido principal</a>
    <div className="status-bar"><div className="wrap status-inner"><span aria-hidden="true" /> <b>{registrationStatus()}</b><span>{action.state === "upcoming" ? "Convocatoria e inscripciones: 1–14 septiembre de 2026" : site.event.name}</span></div></div>
    <header className="header wrap">
      <Link href="/" className="brand" onClick={() => setOpen(false)}><Mark /><span><b>BrailleLab Ecuador</b><small>BrailleTech Challenge 2026</small></span></Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">{open ? <X /> : <Menu />}<span className="sr-only">{open ? "Cerrar" : "Abrir"} navegación</span></button>
      <nav id="main-nav" className={open ? "open" : ""} aria-label="Navegación principal">
        {links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? "active" : ""} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
    </header>
    <main id="main" tabIndex="-1">{children}</main>
    <footer className="footer"><div className="wrap footer-grid"><div><Link href="/" className="brand footer-brand"><Mark /><span><b>BrailleLab Ecuador</b><small>BrailleTech Challenge 2026</small></span></Link><p>Investigación aplicada, aprendizaje y tecnología Braille accesible.</p></div><div><p className="footer-title">Explora</p>{links.slice(0, 4).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</div><div><p className="footer-title">Datos y contacto</p><div className={styles.contact}><a href={`mailto:${site.contact}`}>{site.contact}</a><Link href="/privacidad">Aviso de privacidad</Link></div></div></div><div className="wrap footer-bottom"><span>Actualizado el 25 de agosto de 2026</span><span>BrailleTech Challenge Ecuador 2026</span></div></footer>
  </>;
}

export function ArrowLink({ href, children, primary = false, external = false }) {
  const className = `button ${primary ? "button-primary" : "button-secondary"}`;
  if (external) return <a href={href} className={className}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
  return <Link href={href} className={className}>{children}<ArrowUpRight size={18} aria-hidden="true" /></Link>;
}

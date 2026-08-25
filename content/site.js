export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path) {
  return `${basePath}${path}`;
}

export const site = {
  updatedAt: "2026-08-25",
  event: {
    name: "BrailleTech Challenge Ecuador 2026",
    demoDay: "12 de diciembre de 2026",
    demoDayHours: "10h00 a 17h00",
    venue: "Hotel Ajaví",
  },
  registration: {
    startsAt: "2026-09-01T08:00:00-05:00",
    endsAt: "2026-09-14T23:59:00-05:00",
    url: "https://forms.cloud.microsoft/r/P7zPUDPbNa",
    privacyUrl: "/privacidad",
  },
  contact: "asoemc@yachaytech.edu.ec",
  resources: [
    { id: "bases", title: "Bases y Reglamento", version: "2.1 · agosto de 2026", href: "/documentos/bases-y-reglamento.pdf" },
    { id: "guia", title: "Guía Técnica para participantes", version: "1.0 · agosto de 2026", href: "/documentos/guia-tecnica-para-participantes.pdf" },
    { id: "cronograma", title: "Cronograma Oficial Reprogramado", version: "1.2 · 17 de agosto de 2026", href: "/documentos/cronograma-oficial-reprogramado.pdf" },
    { id: "rubrica", title: "Rúbrica de evaluación", version: "2.0 · agosto de 2026", href: "/documentos/rubrica-de-evaluacion.pdf" },
    { id: "formulario", title: "Formulario oficial de inscripción", version: "Documento de referencia", href: "/documentos/formulario-de-inscripcion.pdf" },
    { id: "declaracion", title: "Declaración de autoría y licencias", version: "Documento de referencia", href: "/documentos/declaracion-autoria-licencias-recursos.pdf" },
    { id: "seguridad", title: "Protocolo de seguridad y laboratorios", version: "1.0 · agosto de 2026", href: "/documentos/protocolo-seguridad-laboratorios.pdf" },
    { id: "validacion", title: "Protocolo de validación con personas usuarias", version: "2.0 · agosto de 2026", href: "/documentos/protocolo-validacion-personas-usuarias.pdf" },
  ],
};

export function registrationAction(now = new Date()) {
  const { startsAt, endsAt, url, privacyUrl } = site.registration;
  const start = new Date(startsAt);
  const end = new Date(endsAt);
  const enabled = Boolean(url && privacyUrl && now >= start && now <= end);

  if (enabled) return { label: "Inscribir equipo", href: url, state: "open", external: true };
  if (now > end) return { label: "Consultar cronograma", href: "/cronograma", state: "closed", external: false };
  return { label: "Consultar cronograma", href: "/cronograma", state: "upcoming", external: false };
}

export function registrationStatus(now = new Date()) {
  const action = registrationAction(now);
  if (action.state === "open") return "Inscripciones abiertas";
  if (action.state === "closed") return "Convocatoria cerrada";
  return "Próxima etapa confirmada";
}

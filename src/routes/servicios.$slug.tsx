import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getService, services, whatsappUrl, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Servicio no encontrado — Peluquería Nieves 1947" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    const url = `https://nieves1947.com/servicios/${s.slug}`;
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            provider: {
              "@type": "HairSalon",
              name: "Peluquería Nieves 1947",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Ventura Rodríguez 6",
                addressLocality: "Oviedo",
                postalCode: "33004",
                addressCountry: "ES",
              },
            },
            areaServed: "Oviedo",
            description: s.metaDescription,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">404</p>
        <h1 className="mt-4 font-display text-4xl italic">Servicio no encontrado</h1>
        <Link
          to="/"
          className="story-link mt-6 inline-block text-[11px] uppercase tracking-[0.25em]"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  ),
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const waHref = whatsappUrl(service.whatsappMessage);

  return (
    <main className="bg-background">
      <SimpleNav />

      <section className="relative overflow-hidden bg-ink px-6 pb-24 pt-40 text-ivory md:px-16 md:pb-32 md:pt-48">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-clay">
            Servicio · {service.kind}
          </p>
          <h1 className="max-w-4xl text-balance font-display text-5xl leading-[1] md:text-8xl">
            {service.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/80">
            {service.hero}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
            <span>Duración · {service.duration}</span>
            {service.priceFrom && <span>Precio · {service.priceFrom}</span>}
            <span>Oviedo</span>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/reservar"
              search={{ servicio: service.slug }}
              className="bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:bg-clay hover:text-white"
            >
              Reservar online
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="border border-white/40 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-white/10"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            En qué consiste
          </p>
          <p className="max-w-3xl font-display text-2xl leading-relaxed md:text-3xl">
            {service.intro}
          </p>

          <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <div key={b.title} className="space-y-3 border-t border-border pt-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em]">{b.title}</h3>
                <p className="text-sm leading-loose text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-wash px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            El proceso
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Paso a paso, <span className="italic">como siempre lo hemos hecho.</span>
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
            {service.process.map((p) => (
              <div key={p.step} className="space-y-4">
                <span className="block font-display text-4xl italic text-clay">{p.step}</span>
                <p className="text-sm leading-loose text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
              Preguntas frecuentes
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Dudas <span className="italic">habituales.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <dl className="divide-y divide-border border-y border-border">
              {service.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl md:text-2xl">
                    <span>{f.q}</span>
                    <span className="font-mono text-lg text-clay transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-loose text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-ivory md:px-16 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance font-display text-4xl leading-tight md:text-6xl">
            ¿Preparada para tu cita de <span className="italic">{service.kind.toLowerCase()}</span>?
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/reservar"
              search={{ servicio: service.slug }}
              className="bg-white px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:bg-clay hover:text-white"
            >
              Reservar online
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="border border-white/40 px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-white/10"
            >
              WhatsApp con mensaje listo
            </a>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            Otros servicios
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/servicios/$slug"
                  params={{ slug: s.slug }}
                  className="border border-border p-4 transition-colors hover:border-clay hover:text-clay"
                >
                  <span className="block font-display text-lg italic">{s.kind}</span>
                  <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.duration}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <SimpleFooter />
      <FloatingWhatsApp message={service.whatsappMessage} />
    </main>
  );
}

function SimpleNav() {
  return (
    <nav
      aria-label="Principal"
      className="fixed top-0 z-50 flex w-full items-center justify-between bg-ink/80 px-6 py-5 text-white backdrop-blur md:px-12"
    >
      <Link to="/" className="font-display text-xl italic tracking-tight md:text-2xl">
        Nieves 1947
      </Link>
      <div className="hidden gap-10 text-[11px] font-medium uppercase tracking-[0.25em] md:flex">
        <Link to="/" hash="historia" className="story-link">Historia</Link>
        <Link to="/" hash="servicios" className="story-link">Servicios</Link>
        <Link to="/" hash="contacto" className="story-link">Contacto</Link>
      </div>
      <Link
        to="/reservar"
        className="border border-white/30 px-5 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-ink"
      >
        Reservar
      </Link>
    </nav>
  );
}

function SimpleFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="font-display text-2xl italic">Nieves 1947</div>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            NIEVES1947 S.L. · Oviedo
          </p>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp({ message }: { message: string }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp con mensaje prerellenado"
      className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-clay text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition-transform hover:scale-105 md:h-16 md:w-16"
    >
      WA
    </a>
  );
}

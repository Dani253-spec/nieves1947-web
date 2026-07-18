import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroSalon from "@/assets/hero-salon.jpg";
import history1947 from "@/assets/history-1947.jpg";
import historyTools from "@/assets/history-tools.jpg";
import historyModern from "@/assets/history-modern.jpg";
import galleryHair from "@/assets/gallery-hair.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryProducts from "@/assets/gallery-products.jpg";
import ctaTexture from "@/assets/cta-texture.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

// -- Reveal on scroll ---------------------------------------------------------
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.style.opacity = "1";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`opacity-0 translate-y-6 transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 ${className}`}
    >
      {children}
    </Component>
  );
}

// -- Data ---------------------------------------------------------------------
const services: { kind: string; title: string; note: string; slug?: string }[] = [
  { kind: "Corte", title: "Arquitectura del rostro", note: "60 min", slug: "corte" },
  { kind: "Peinado", title: "Recogidos & eventos", note: "45 min" },
  { kind: "Brushing", title: "Ondas y volumen", note: "45 min" },
  { kind: "Color", title: "Coloración a medida", note: "90 min", slug: "color" },
  { kind: "Mechas", title: "Iluminaciones clásicas", note: "120 min", slug: "mechas" },
  { kind: "Balayage", title: "Degradado natural", note: "150 min", slug: "balayage" },
  { kind: "Babylights", title: "Reflejos ultrafinos", note: "150 min", slug: "mechas" },
  { kind: "Tratamientos", title: "Rituales capilares", note: "60 min", slug: "tratamientos" },
  { kind: "Estética", title: "Cuidado facial", note: "60 min", slug: "estetica" },
  { kind: "Maquillaje", title: "Maquillaje editorial", note: "60 min", slug: "estetica" },
];

const reviews = [
  {
    quote:
      "Un oasis de silencio y profesionalidad en el centro de Oviedo. Setenta y cinco años no son casualidad.",
    author: "Marta G.",
  },
  {
    quote:
      "Salgo siempre sintiéndome yo misma, pero mejor. El trato es único y el resultado impecable.",
    author: "Elena R.",
  },
  {
    quote:
      "El mejor balayage que me han hecho nunca. Escuchan, aconsejan y trabajan con una técnica exquisita.",
    author: "Lucía A.",
  },
  {
    quote:
      "Llevo años confiándoles mi cabello. Modernos, cercanos y con una tradición que se nota en cada detalle.",
    author: "Isabel V.",
  },
];

// -- Small UI parts -----------------------------------------------------------
function Nav() {
  return (
    <nav
      aria-label="Principal"
      className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 text-white mix-blend-difference md:px-12 md:py-8"
    >
      <a href="#top" className="font-display text-xl italic tracking-tight md:text-2xl">
        Nieves 1947
      </a>
      <div className="hidden gap-10 text-[11px] font-medium uppercase tracking-[0.25em] md:flex">
        <a href="#historia" className="story-link">Historia</a>
        <a href="#servicios" className="story-link">Servicios</a>
        <a href="#galeria" className="story-link">Salón</a>
        <a href="#contacto" className="story-link">Contacto</a>
      </div>
      <a
        href="/reservar"
        className="border border-white/30 px-5 py-2 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-ink"
      >
        Reservar
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100dvh] min-h-[640px] flex-col justify-end overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ animation: "scale-in 1.4s cubic-bezier(0.19,1,0.22,1) both" }}
      >
        <img
          src={heroSalon}
          alt="Interior del salón Peluquería Nieves 1947 en Oviedo"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/50" />
      </div>

      <div className="relative z-10 max-w-6xl px-6 pb-24 md:px-16 md:pb-28">
        <span
          className="mb-6 block font-mono text-[10px] uppercase tracking-[0.35em] text-white/75"
          style={{ animation: "fade-up 0.9s 0.2s both" }}
        >
          Oviedo · Desde 1947
        </span>
        <h1
          className="mb-8 max-w-5xl text-balance font-display text-6xl leading-[0.9] text-white sm:text-7xl md:text-[8.5rem]"
          style={{ animation: "fade-up 0.9s 0.35s both" }}
        >
          Peluquería <br />
          <span className="italic">Nieves</span>
        </h1>
        <div
          className="flex flex-col items-start gap-8 md:flex-row md:items-center"
          style={{ animation: "fade-up 0.9s 0.5s both" }}
        >
          <p className="max-w-md text-base font-light leading-relaxed text-white/85 md:text-lg">
            Más de setenta y cinco años cuidando la belleza de generaciones de mujeres en el corazón de Oviedo.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/reservar"
              className="bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:bg-clay hover:text-white"
            >
              Reservar cita
            </a>
            <a
              href="tel:+34985213896"
              className="border border-white/40 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-colors hover:bg-white/10"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 right-6 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.3em] text-white/60 md:right-12"
        aria-hidden="true"
      >
        <span>Desliza</span>
        <div className="relative h-12 w-px overflow-hidden bg-white/25">
          <div
            className="absolute top-0 h-1/2 w-full bg-white"
            style={{ animation: "soft-bounce 2.4s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}

function History() {
  return (
    <section id="historia" className="bg-background px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-20 grid grid-cols-1 items-end gap-10 md:mb-28 md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
              Nuestro legado
            </span>
            <h2 className="text-balance font-display text-4xl leading-[1.05] md:text-6xl">
              El legado de{" "}
              <span className="italic text-clay">Nieves Suárez Pertierra</span>,
              <br className="hidden md:block" /> una vida dedicada a la belleza.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Fundada en 1947, nuestra casa ha sido testigo de la evolución del estilo femenino en Asturias. Hoy mantenemos intacto ese espíritu artesanal, adaptándolo con delicadeza a las técnicas más actuales.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 border-t border-border pt-16 md:grid-cols-3 md:gap-16">
          {[
            {
              year: "1947",
              title: "La fundación",
              text: "Nieves Suárez Pertierra abre las puertas de su salón en Oviedo. Nace una vocación clara: convertir el cuidado del cabello en una experiencia de bienestar y sofisticación atemporal.",
              img: history1947,
              alt: "Fotografía histórica del salón fundado en 1947",
              grayscale: true,
            },
            {
              year: "Trayectoria",
              title: "El referente",
              text: "Décadas de perfeccionamiento técnico. El salón se convierte en el epicentro de la elegancia asturiana, transmitiendo el oficio entre generaciones de profesionales.",
              img: historyTools,
              alt: "Herramientas de peluquería sobre mármol",
            },
            {
              year: "Actualidad",
              title: "Vanguardia",
              text: "Una nueva generación en continua formación fusiona el saber hacer clásico con las técnicas de color y los tratamientos capilares más avanzados.",
              img: historyModern,
              alt: "Trabajo actual del equipo del salón",
            },
          ].map((item, i) => (
            <Reveal
              key={item.year}
              delay={i * 120}
              className={i === 1 ? "md:mt-24" : ""}
            >
              <div className="space-y-6">
                <span className="block font-display text-4xl italic text-clay md:text-5xl">
                  {item.year}
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em]">
                  {item.title}
                </h3>
                <p className="text-sm leading-loose text-muted-foreground">
                  {item.text}
                </p>
                <div className="aspect-[3/2] w-full overflow-hidden bg-stone-wash">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03] ${
                      item.grayscale ? "grayscale" : ""
                    }`}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="bg-ink px-6 py-28 text-ivory md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-8 md:mb-24 md:flex-row">
          <div>
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
              Servicios de autor
            </span>
            <h2 className="font-display text-5xl italic md:text-7xl">
              El menú del atelier
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Cada servicio es una consulta personalizada. La técnica es la misma que hemos perfeccionado durante tres generaciones.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-24 gap-y-2 lg:grid-cols-2">
          {services.map((s, i) => {
            const row = (
              <div className="group flex items-end justify-between gap-6 border-b border-white/10 py-7 transition-colors hover:border-clay">
                <div className="min-w-0 space-y-2">
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                    {s.kind}
                  </h4>
                  <p className="truncate font-display text-2xl italic md:text-3xl">
                    {s.title}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {s.slug ? "Ver ficha →" : s.note}
                </span>
              </div>
            );
            return (
              <Reveal key={`${s.kind}-${i}`} delay={(i % 5) * 80}>
                {s.slug ? (
                  <Link to="/servicios/$slug" params={{ slug: s.slug }} className="block">
                    {row}
                  </Link>
                ) : (
                  row
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 flex flex-wrap items-center gap-6 md:mt-20">
          <a
            href="/reservar"
            className="bg-white px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:bg-clay hover:text-white"
          >
            Reservar cita
          </a>
          <a
            href="https://wa.me/34627703116"
            target="_blank"
            rel="noreferrer"
            className="story-link text-[11px] uppercase tracking-[0.25em] text-white/70"
          >
            Consultar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="bg-background px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
        <Reveal className="md:col-span-5">
          <div className="aspect-[4/5] w-full overflow-hidden bg-stone-wash">
            <img
              src={galleryHair}
              alt="Detalle editorial de cabello con balayage"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="space-y-14 md:col-span-7 md:pt-16">
          <Reveal>
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
              La experiencia
            </span>
            <h2 className="text-balance font-display text-4xl leading-[1.1] md:text-6xl">
              Una escucha atenta. <span className="italic">Un resultado natural.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {[
              {
                title: "Atención personalizada",
                text: "Cada visita comienza con un diagnóstico honesto. El estilo se define contigo, nunca sobre ti.",
              },
              {
                title: "Formación continua",
                text: "Nuestro equipo se forma cada año en las mejores escuelas nacionales e internacionales.",
              },
              {
                title: "Productos de alta gama",
                text: "Trabajamos con marcas profesionales cuidadosamente seleccionadas por su respeto a la fibra capilar.",
              },
              {
                title: "Tradición y técnica",
                text: "Combinamos el oficio heredado con las técnicas de color y tratamientos más avanzados.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="space-y-3 border-t border-border pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em]">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-loose text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="bg-stone-wash px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-6 md:mb-24 md:flex-row">
          <div>
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
              El salón
            </span>
            <h2 className="font-display text-4xl leading-[1.1] md:text-6xl">
              Un espacio luminoso <span className="italic">en el centro de Oviedo.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Amplio, vanguardista y silencioso. Un salón diseñado para que cada visita sea una pausa en el día.
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <Reveal className="col-span-12 md:col-span-8">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={galleryInterior}
                alt="Interior amplio y luminoso del salón"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-6 md:col-span-4">
            <div className="aspect-[3/4] overflow-hidden md:aspect-[4/5]">
              <img
                src={galleryProducts}
                alt="Productos capilares de alta gama"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80} className="col-span-6 md:col-span-4">
            <div className="aspect-square overflow-hidden">
              <img
                src={historyTools}
                alt="Detalle de tijeras y peine sobre mármol"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={160} className="col-span-12 md:col-span-8">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={historyModern}
                alt="Estilista trabajando en el salón"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { role: "Dirección técnica", name: "Equipo Nieves" },
    { role: "Coloración", name: "Especialistas en color" },
    { role: "Corte & estilo", name: "Estilistas senior" },
    { role: "Estética", name: "Cabina de estética" },
  ];
  return (
    <section className="bg-background px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-3xl md:mb-24">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            El equipo
          </span>
          <h2 className="text-balance font-display text-4xl leading-[1.1] md:text-6xl">
            Profesionales que <span className="italic">viven su oficio.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Un equipo pequeño y muy formado, con años de experiencia y una pasión intacta por el detalle. Cada especialista aporta una mirada distinta y un mismo compromiso: cuidarte.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
          {members.map((m, i) => (
            <Reveal key={m.role} delay={i * 100}>
              <div className="space-y-4">
                <div className="aspect-[3/4] w-full bg-stone-wash" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl italic">{m.name}</h3>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-clay">
                    {m.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => setIdx((n) => (n + 1) % reviews.length), 7000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="bg-ink px-6 py-28 text-ivory md:px-16 md:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="mb-8 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            <span className="tracking-[0.4em]">★ ★ ★ ★ ★</span>
            <span className="text-white/50">4,7 · Más de 100 reseñas</span>
          </div>
        </Reveal>

        <div className="relative min-h-[220px]">
          {reviews.map((r, i) => (
            <blockquote
              key={r.author}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
                i === idx ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <p className="text-balance font-display text-2xl italic leading-snug md:text-4xl">
                “{r.quote}”
              </p>
              <cite className="mt-10 block text-[10px] font-semibold uppercase not-italic tracking-[0.35em] text-white/50">
                — {r.author}
              </cite>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-3">
          {reviews.map((r, i) => (
            <button
              key={r.author}
              type="button"
              aria-label={`Ver reseña ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-px transition-all ${
                i === idx ? "w-12 bg-clay" : "w-6 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <a
          href="https://www.google.com/search?q=Peluquer%C3%ADa+Nieves+1947+Oviedo"
          target="_blank"
          rel="noreferrer"
          className="story-link mt-12 inline-block text-[11px] uppercase tracking-[0.3em] text-white/70"
        >
          Ver todas las reseñas en Google
        </a>
      </div>
    </section>
  );
}

function CtaBlock() {
  return (
    <section id="reserva" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaTexture}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-48">
        <Reveal>
          <h2 className="text-balance font-display text-4xl leading-[1.05] md:text-6xl">
            Déjate cuidar por un equipo <br className="hidden md:block" />
            <span className="italic">con más de siete décadas de experiencia.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+34985213896"
              className="bg-ink px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-clay"
            >
              Llamar al salón
            </a>
            <a
              href="https://wa.me/34627703116"
              target="_blank"
              rel="noreferrer"
              className="border border-ink px-10 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:bg-ink hover:text-ivory"
            >
              WhatsApp
            </a>
            <a
              href="#contacto"
              className="story-link px-4 py-4 text-[11px] uppercase tracking-[0.25em]"
            >
              Escríbenos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("nombre") || "").trim();
    const tel = String(data.get("telefono") || "").trim();
    const email = String(data.get("email") || "").trim();
    const msg = String(data.get("mensaje") || "").trim();
    const rgpd = data.get("rgpd");
    if (!name || !tel || !email || !msg || !rgpd) {
      setStatus("err");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("err");
      return;
    }
    const body = encodeURIComponent(
      `Nombre: ${name}\nTeléfono: ${tel}\n\n${msg}`,
    );
    const subject = encodeURIComponent("Solicitud de cita — Nieves 1947");
    window.location.href = `mailto:info@nieves1947.com?subject=${subject}&body=${body}`;
    setStatus("ok");
    form.reset();
  }

  return (
    <section id="contacto" className="bg-stone-wash px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-12">
          <Reveal>
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
              Visítanos
            </span>
            <h2 className="text-balance font-display text-4xl leading-[1.1] md:text-6xl">
              En el corazón <br /><span className="italic">de Oviedo.</span>
            </h2>
            <address className="mt-8 not-italic leading-relaxed text-muted-foreground">
              Calle Ventura Rodríguez 6<br />
              33004 Oviedo, Asturias
            </address>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  Teléfono
                </span>
                <a
                  href="tel:+34985213896"
                  className="mt-2 block font-display text-2xl transition-colors hover:text-clay"
                >
                  985 21 38 96
                </a>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/34627703116"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block font-display text-2xl transition-colors hover:text-clay"
                >
                  +34 627 70 31 16
                </a>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  Email
                </span>
                <a
                  href="mailto:info@nieves1947.com"
                  className="mt-2 block font-display text-2xl transition-colors hover:text-clay"
                >
                  info@nieves1947.com
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="border border-border bg-background p-8">
              <h3 className="border-b border-border pb-3 text-[10px] font-semibold uppercase tracking-[0.3em]">
                Horario
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt>Lunes a viernes</dt>
                  <dd className="text-muted-foreground">09:30 — 18:30</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sábados</dt>
                  <dd className="text-muted-foreground">09:00 — 12:30</dd>
                </div>
              </dl>
              <p className="mt-5 text-[11px] italic leading-relaxed text-muted-foreground">
                * Los trabajos técnicos deberán comenzar al menos media hora antes del cierre.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <form onSubmit={onSubmit} className="space-y-6" noValidate>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em]">
                Solicita tu cita
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Nombre</span>
                  <input
                    name="nombre"
                    required
                    maxLength={80}
                    placeholder="Nombre"
                    className="w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Teléfono</span>
                  <input
                    name="telefono"
                    required
                    maxLength={20}
                    inputMode="tel"
                    placeholder="Teléfono"
                    className="w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="sr-only">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    maxLength={120}
                    placeholder="Email"
                    className="w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="sr-only">Mensaje</span>
                  <textarea
                    name="mensaje"
                    required
                    maxLength={800}
                    rows={3}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                  />
                </label>
              </div>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <input
                  type="checkbox"
                  name="rgpd"
                  required
                  className="mt-1 h-4 w-4 shrink-0 accent-clay"
                />
                <span>
                  He leído y acepto la política de privacidad y el tratamiento de mis datos para gestionar mi consulta.
                </span>
              </label>
              <button
                type="submit"
                className="bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-clay"
              >
                Enviar solicitud
              </button>
              {status === "err" && (
                <p role="alert" className="text-xs text-destructive">
                  Revisa los campos: nombre, teléfono, email válido, mensaje y consentimiento son obligatorios.
                </p>
              )}
              {status === "ok" && (
                <p role="status" className="text-xs text-clay">
                  Gracias. Se abrirá tu correo para completar el envío.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal delay={80} className="min-h-[520px]">
          <div className="relative h-full min-h-[520px] w-full overflow-hidden ring-1 ring-black/5">
            <iframe
              title="Mapa de Peluquería Nieves 1947"
              src="https://www.google.com/maps?q=Calle+Ventura+Rodr%C3%ADguez+6,+33004+Oviedo,+Asturias&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+Ventura+Rodr%C3%ADguez+6,+33004+Oviedo"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 bg-ink px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-ivory hover:bg-clay"
            >
              Abrir en Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="font-display text-2xl italic">Nieves 1947</div>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            NIEVES1947 S.L. · Oviedo
          </p>
        </div>
        <nav aria-label="Legal" className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#" className="story-link">Aviso legal</a>
          <a href="#" className="story-link">Privacidad</a>
          <a href="#" className="story-link">Cookies</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="story-link">
            Instagram
          </a>
        </nav>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:hidden">
      <a
        href="tel:+34985213896"
        aria-label="Llamar al salón"
        className="grid h-12 w-12 place-items-center rounded-full bg-ink text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory shadow-lg"
      >
        Tel
      </a>
      <a
        href="https://wa.me/34627703116"
        aria-label="Escribir por WhatsApp"
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-clay text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg"
      >
        WA
      </a>
    </div>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <History />
      <Services />
      <Experience />
      <Gallery />
      <Team />
      <Reviews />
      <CtaBlock />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}

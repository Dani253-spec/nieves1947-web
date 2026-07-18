import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { services, whatsappUrl, WHATSAPP_PHONE } from "@/lib/services-data";

const searchSchema = z.object({
  servicio: z.string().optional(),
});

export const Route = createFileRoute("/reservar")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Reserva tu cita online — Peluquería Nieves 1947" },
      {
        name: "description",
        content:
          "Reserva tu cita en Peluquería Nieves 1947 (Oviedo). Elige servicio, día y hora y recibe confirmación por WhatsApp en minutos.",
      },
      { property: "og:title", content: "Reserva online — Peluquería Nieves 1947" },
      {
        property: "og:description",
        content: "Reserva tu cita en Peluquería Nieves 1947. Confirmación por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nieves1947.com/reservar" },
    ],
    links: [{ rel: "canonical", href: "https://nieves1947.com/reservar" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  const search = Route.useSearch();
  const [servicio, setServicio] = useState(search.servicio ?? services[0].slug);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [franja, setFranja] = useState("Mañana");
  const [notas, setNotas] = useState("");
  const [rgpd, setRgpd] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const selected = useMemo(
    () => services.find((s) => s.slug === servicio) ?? services[0],
    [servicio],
  );

  const previewMessage = useMemo(() => {
    const parts = [
      `Hola, me gustaría reservar una cita en Peluquería Nieves 1947.`,
      ``,
      `• Servicio: ${selected.kind} — ${selected.title}`,
      `• Nombre: ${nombre || "____"}`,
      `• Teléfono: ${telefono || "____"}`,
      `• Día preferido: ${fecha || "____"}`,
      `• Franja: ${franja}`,
    ];
    if (notas.trim()) parts.push(`• Notas: ${notas.trim()}`);
    parts.push(``, `Gracias.`);
    return parts.join("\n");
  }, [selected, nombre, telefono, fecha, franja, notas]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    if (!nombre.trim() || nombre.length > 80) return setErr("Introduce tu nombre.");
    if (!/^[+\d\s]{6,20}$/.test(telefono)) return setErr("Introduce un teléfono válido.");
    if (!fecha) return setErr("Selecciona un día preferido.");
    if (!rgpd) return setErr("Debes aceptar el tratamiento de datos.");
    window.open(whatsappUrl(previewMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-background">
      <nav
        aria-label="Principal"
        className="fixed top-0 z-50 flex w-full items-center justify-between bg-background/85 px-6 py-5 text-ink backdrop-blur md:px-12"
      >
        <Link to="/" className="font-display text-xl italic tracking-tight md:text-2xl">
          Nieves 1947
        </Link>
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-ink"
        >
          ← Volver
        </Link>
      </nav>

      <section className="px-6 pb-16 pt-32 md:px-16 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.35em] text-clay">
            Reserva online
          </p>
          <h1 className="max-w-3xl text-balance font-display text-5xl leading-[1] md:text-7xl">
            Reserva tu cita en <span className="italic">Nieves 1947.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Completa tus datos y recibirás confirmación por WhatsApp con la disponibilidad exacta. Es la forma más rápida de asegurar tu hueco.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-16 md:pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <form onSubmit={onSubmit} className="space-y-8" noValidate>
            <div>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                Servicio
              </label>
              <select
                value={servicio}
                onChange={(e) => setServicio(e.target.value)}
                className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 font-display text-xl italic focus:border-clay focus:outline-none"
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.kind} — {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  Nombre
                </span>
                <input
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  maxLength={80}
                  required
                  className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  Teléfono
                </span>
                <input
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  inputMode="tel"
                  maxLength={20}
                  required
                  className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  Día preferido
                </span>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                  required
                  className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-sm focus:border-clay focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  Franja
                </span>
                <select
                  value={franja}
                  onChange={(e) => setFranja(e.target.value)}
                  className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-sm focus:border-clay focus:outline-none"
                >
                  <option>Mañana</option>
                  <option>Mediodía</option>
                  <option>Tarde</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay">
                  Notas (opcional)
                </span>
                <textarea
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  maxLength={400}
                  rows={3}
                  placeholder="Cuéntanos algo más si lo consideras útil"
                  className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                />
              </label>
            </div>

            <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
              <input
                type="checkbox"
                checked={rgpd}
                onChange={(e) => setRgpd(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-clay"
              />
              <span>
                Acepto el tratamiento de mis datos para gestionar esta solicitud de cita.
              </span>
            </label>

            {err && (
              <p role="alert" className="text-xs text-destructive">
                {err}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-clay sm:w-auto"
            >
              Confirmar por WhatsApp
            </button>

            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Al confirmar se abrirá WhatsApp con el mensaje listo para enviar al{" "}
              <span className="font-mono">+34 {WHATSAPP_PHONE.slice(2)}</span>. También puedes llamarnos al{" "}
              <a href="tel:+34985213896" className="story-link">985 21 38 96</a>.
            </p>
          </form>

          <aside className="space-y-8">
            <div className="border border-border bg-stone-wash p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
                Vista previa del mensaje
              </p>
              <pre className="mt-4 whitespace-pre-wrap font-body text-sm leading-relaxed text-ink">
                {previewMessage}
              </pre>
            </div>

            <div className="border border-border bg-background p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
                Cómo funciona
              </p>
              <ol className="mt-4 space-y-4 text-sm text-muted-foreground">
                <li><span className="font-display text-xl italic text-clay">01.</span> Elige servicio, día y franja.</li>
                <li><span className="font-display text-xl italic text-clay">02.</span> Enviamos tu solicitud por WhatsApp.</li>
                <li><span className="font-display text-xl italic text-clay">03.</span> Confirmamos la hora exacta en minutos, en horario del salón.</li>
              </ol>
            </div>

            <div className="border border-border bg-background p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
                Horario
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between"><dt>Lunes a viernes</dt><dd className="text-muted-foreground">09:30 — 18:30</dd></div>
                <div className="flex justify-between"><dt>Sábados</dt><dd className="text-muted-foreground">09:00 — 12:30</dd></div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

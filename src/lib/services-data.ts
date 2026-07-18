export const WHATSAPP_PHONE = "34627703116";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  kind: string;
  title: string;
  duration: string;
  priceFrom?: string;
  tagline: string;
  hero: string;
  intro: string;
  benefits: { title: string; text: string }[];
  process: { step: string; text: string }[];
  faqs: ServiceFaq[];
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "corte",
    kind: "Corte",
    title: "Corte de pelo femenino en Oviedo",
    duration: "60 min",
    priceFrom: "desde 22 €",
    tagline: "Arquitectura del rostro",
    hero: "Un corte pensado para ti: proporciones, movimiento y facilidad de peinado en casa.",
    intro:
      "Analizamos la forma de tu rostro, la naturaleza del cabello y tu estilo de vida antes de tocar las tijeras. Cada corte se diseña para realzar tus rasgos y ser fácil de mantener día a día.",
    benefits: [
      { title: "Diagnóstico previo", text: "Estudiamos densidad, textura y crecimiento antes de comenzar." },
      { title: "Técnica personalizada", text: "Corte al aire, navaja o tijera según la densidad y el efecto buscado." },
      { title: "Fácil de peinar", text: "Te enseñamos a mantener el corte en casa con secado natural." },
      { title: "Acabado profesional", text: "Lavado con masaje, secado y peinado incluidos en el servicio." },
    ],
    process: [
      { step: "01", text: "Consulta y diagnóstico capilar." },
      { step: "02", text: "Lavado con masaje relajante." },
      { step: "03", text: "Corte de precisión." },
      { step: "04", text: "Secado, peinado y consejos de mantenimiento." },
    ],
    faqs: [
      { q: "¿Cuánto dura un corte de pelo?", a: "Entre 45 y 60 minutos, según el largo del cabello y el acabado elegido." },
      { q: "¿El precio incluye lavado y peinado?", a: "Sí. Nuestro corte siempre incluye lavado, secado y peinado profesional." },
      { q: "¿Cada cuánto debo cortarme el pelo?", a: "Recomendamos entre 6 y 10 semanas, dependiendo del corte y el tipo de cabello." },
      { q: "¿Aconsejáis sobre el estilo?", a: "Sí. Antes de comenzar hacemos una consulta para escogerán el corte que mejor se adapta a ti." },
    ],
    whatsappMessage:
      "Hola, me gustaría reservar una cita de CORTE en Peluquería Nieves 1947. Mi nombre es ____ y prefiero el día ____ en horario ____. Gracias.",
    metaTitle: "Corte de pelo femenino en Oviedo — Peluquería Nieves 1947",
    metaDescription:
      "Corte de pelo femenino personalizado en Oviedo. Diagnóstico, técnica de precisión, lavado y peinado incluidos. Reserva tu cita en Peluquería Nieves 1947.",
  },
  {
    slug: "color",
    kind: "Color",
    title: "Coloración capilar a medida en Oviedo",
    duration: "90 min",
    priceFrom: "desde 38 €",
    tagline: "Coloración a medida",
    hero: "Color a medida que respeta la fibra capilar y evoluciona con naturalidad.",
    intro:
      "Trabajamos con marcas profesionales de alta gama para conseguir un color luminoso, duradero y saludable. Desde cobertura de canas hasta tonos fantasía suaves, siempre con un tratamiento previo del cabello.",
    benefits: [
      { title: "Diagnóstico y prueba de mechón", text: "Antes de cambios importantes hacemos prueba para asegurar el resultado." },
      { title: "Productos de alta gama", text: "Coloración profesional con activos que cuidan la fibra." },
      { title: "Cobertura perfecta de canas", text: "Fórmulas específicas para tapar canas con brillo natural." },
      { title: "Mantenimiento en casa", text: "Recomendamos productos que prolongan el color entre visitas." },
    ],
    process: [
      { step: "01", text: "Consulta de color y prueba si es necesaria." },
      { step: "02", text: "Aplicación personalizada por zonas." },
      { step: "03", text: "Tiempo de exposición controlado." },
      { step: "04", text: "Lavado con tratamiento y peinado final." },
    ],
    faqs: [
      { q: "¿Cuánto dura el color?", a: "Entre 4 y 6 semanas dependiendo del tono, la porosidad del cabello y el mantenimiento en casa." },
      { q: "¿Es dañino teñir el pelo con frecuencia?", a: "Trabajamos con coloración profesional que respeta la fibra e incluimos tratamientos protectores en cada servicio." },
      { q: "¿Puedo cambiar radicalmente de color?", a: "Sí, con planificación. En cambios drásticos programamos una consulta previa para diseñar la ruta del cambio." },
      { q: "¿Qué diferencia hay con tintes de supermercado?", a: "Ajustamos la fórmula al porcentaje de canas, base natural y estado del cabello, algo imposible en un producto genérico." },
    ],
    whatsappMessage:
      "Hola, me gustaría reservar una cita de COLOR en Peluquería Nieves 1947. Mi nombre es ____ y prefiero el día ____ en horario ____. Gracias.",
    metaTitle: "Coloración capilar en Oviedo — Peluquería Nieves 1947",
    metaDescription:
      "Coloración a medida en Oviedo con marcas profesionales. Cobertura de canas, tonos naturales y color luminoso. Reserva tu cita en Peluquería Nieves 1947.",
  },
  {
    slug: "mechas",
    kind: "Mechas",
    title: "Mechas clásicas y babylights en Oviedo",
    duration: "120 min",
    priceFrom: "desde 55 €",
    tagline: "Iluminaciones clásicas",
    hero: "Mechas trabajadas hebra a hebra para iluminar el rostro sin comprometer el cabello.",
    intro:
      "Desde mechas clásicas con papel a babylights ultrafinos. Elegimos la técnica y el nivel de contraste que mejor favorece tus rasgos y el tono base de tu cabello.",
    benefits: [
      { title: "Técnica precisa", text: "Cada mecha se coloca pensando en el resultado global y la luz del rostro." },
      { title: "Sin efecto raíz brusco", text: "Diseñamos la salida para que crezca de forma natural." },
      { title: "Toner personalizado", text: "Matizamos el rubio o el reflejo para un acabado limpio y luminoso." },
      { title: "Tratamiento protector", text: "Añadimos activos protectores para minimizar el impacto del proceso." },
    ],
    process: [
      { step: "01", text: "Consulta y elección de técnica." },
      { step: "02", text: "Aplicación por secciones controladas." },
      { step: "03", text: "Lavado, matizado y tratamiento." },
      { step: "04", text: "Secado y peinado final." },
    ],
    faqs: [
      { q: "¿Cuál es la diferencia entre mechas y balayage?", a: "Las mechas parten de la raíz con separación regular; el balayage se pinta a mano libre con salida difuminada." },
      { q: "¿Cuánto tardan?", a: "Entre 2 y 2 horas y media, incluyendo lavado, matizado y peinado." },
      { q: "¿Cada cuánto debo repetirlas?", a: "Normalmente entre 3 y 4 meses, ampliable con retoques de matiz intermedios." },
      { q: "¿Puedo hacerme mechas si tengo el pelo teñido?", a: "Sí, con un estudio previo del historial de color. En algunos casos planificamos varias sesiones." },
    ],
    whatsappMessage:
      "Hola, me gustaría reservar una cita de MECHAS en Peluquería Nieves 1947. Mi nombre es ____ y prefiero el día ____ en horario ____. Gracias.",
    metaTitle: "Mechas y babylights en Oviedo — Peluquería Nieves 1947",
    metaDescription:
      "Mechas clásicas y babylights en Oviedo. Técnica hebra a hebra, matizado y tratamiento protector incluidos. Reserva tu cita en Peluquería Nieves 1947.",
  },
  {
    slug: "balayage",
    kind: "Balayage",
    title: "Balayage y degradado natural en Oviedo",
    duration: "150 min",
    priceFrom: "desde 75 €",
    tagline: "Degradado natural",
    hero: "Balayage a mano libre para un efecto besado por el sol, con salida difuminada y sin efecto raíz.",
    intro:
      "El balayage es una técnica artesanal de coloración pintada a mano. Iluminamos zonas concretas del cabello respetando tu base para conseguir un degradado natural y elegante, muy fácil de mantener.",
    benefits: [
      { title: "Mano libre", text: "Cada pincelada se coloca según la caída del cabello y la forma del rostro." },
      { title: "Bajo mantenimiento", text: "Al no partir de la raíz, admite más tiempo entre retoques." },
      { title: "Efecto natural", text: "Aporta luz sin bloques marcados: como si el sol lo hubiera aclarado." },
      { title: "Matiz personalizado", text: "El toner final define frío, cálido o dorado según tu piel." },
    ],
    process: [
      { step: "01", text: "Diseño del balayage sobre cabello seco." },
      { step: "02", text: "Aplicación a mano libre por secciones." },
      { step: "03", text: "Lavado, tratamiento y matizado." },
      { step: "04", text: "Secado y peinado final." },
    ],
    faqs: [
      { q: "¿Cada cuánto se retoca un balayage?", a: "Entre 4 y 6 meses. Es una de las técnicas de menor mantenimiento." },
      { q: "¿Se puede hacer balayage en pelo oscuro?", a: "Sí. Ajustamos la intensidad del aclarado para respetar la fibra y conseguir un contraste favorecedor." },
      { q: "¿Cuánto dura la sesión?", a: "Alrededor de 2 horas y media, incluyendo matizado y peinado." },
      { q: "¿Puedo pasar de mechas a balayage?", a: "Sí. Diseñamos la transición para difuminar las mechas anteriores y conseguir la salida natural del balayage." },
    ],
    whatsappMessage:
      "Hola, me gustaría reservar una cita de BALAYAGE en Peluquería Nieves 1947. Mi nombre es ____ y prefiero el día ____ en horario ____. Gracias.",
    metaTitle: "Balayage en Oviedo — Peluquería Nieves 1947",
    metaDescription:
      "Balayage a mano libre en Oviedo. Degradado natural, matizado y tratamiento incluidos. Reserva tu cita en Peluquería Nieves 1947.",
  },
  {
    slug: "tratamientos",
    kind: "Tratamientos",
    title: "Tratamientos capilares profesionales en Oviedo",
    duration: "60 min",
    priceFrom: "desde 25 €",
    tagline: "Rituales capilares",
    hero: "Rituales de hidratación, reparación y anticaída para devolver salud y brillo al cabello.",
    intro:
      "Diagnosticamos tu cabello y cuero cabelludo para prescribir el tratamiento más adecuado: hidratación profunda, reconstrucción con proteína, sellado con queratina, anticaída o equilibrio del cuero cabelludo.",
    benefits: [
      { title: "Diagnóstico capilar", text: "Analizamos porosidad, elasticidad y estado del cuero cabelludo." },
      { title: "Activos profesionales", text: "Cabinas y productos de laboratorio profesional." },
      { title: "Masaje relajante", text: "Incluye masaje craneal que mejora la microcirculación." },
      { title: "Rutina en casa", text: "Te recomendamos productos para prolongar los resultados." },
    ],
    process: [
      { step: "01", text: "Diagnóstico del cuero cabelludo y la fibra." },
      { step: "02", text: "Aplicación del tratamiento indicado." },
      { step: "03", text: "Masaje y tiempo de exposición." },
      { step: "04", text: "Lavado, secado y consejos de uso." },
    ],
    faqs: [
      { q: "¿Qué tratamiento necesito?", a: "Lo decidimos en consulta según el diagnóstico. No aplicamos el mismo ritual a todos los cabellos." },
      { q: "¿Cuántas sesiones son necesarias?", a: "Para problemas puntuales, 1 sesión mejora el aspecto. Para pautas anticaída o reconstrucción, planificamos entre 4 y 8 sesiones." },
      { q: "¿Se pueden combinar con color?", a: "Sí. En la mayoría de casos los combinamos con el servicio técnico para reforzar la fibra." },
      { q: "¿Notaré diferencia al momento?", a: "Sí. Brillo, suavidad y peinabilidad se aprecian desde la primera sesión." },
    ],
    whatsappMessage:
      "Hola, me gustaría reservar una cita de TRATAMIENTO CAPILAR en Peluquería Nieves 1947. Mi nombre es ____ y prefiero el día ____ en horario ____. Gracias.",
    metaTitle: "Tratamientos capilares en Oviedo — Peluquería Nieves 1947",
    metaDescription:
      "Tratamientos capilares profesionales en Oviedo: hidratación, reconstrucción, anticaída y equilibrio del cuero cabelludo. Reserva en Peluquería Nieves 1947.",
  },
  {
    slug: "estetica",
    kind: "Estética",
    title: "Estética y cuidado facial en Oviedo",
    duration: "60 min",
    priceFrom: "desde 20 €",
    tagline: "Cuidado facial",
    hero: "Servicios de estética femenina en un entorno silencioso y cuidado.",
    intro:
      "Cabina de estética con tratamientos faciales, depilación, cuidado de cejas y pestañas, y maquillaje para eventos. Diagnóstico previo y trato personalizado como en el resto del salón.",
    benefits: [
      { title: "Diagnóstico personalizado", text: "Estudiamos tu piel antes de elegir producto y protocolo." },
      { title: "Ambiente tranquilo", text: "Cabina privada en un espacio pensado para la pausa." },
      { title: "Profesionales cualificadas", text: "Formación continua en estética integral." },
      { title: "Producto profesional", text: "Marcas seleccionadas por su respeto a la piel." },
    ],
    process: [
      { step: "01", text: "Diagnóstico y consulta." },
      { step: "02", text: "Preparación y limpieza de la piel." },
      { step: "03", text: "Tratamiento específico." },
      { step: "04", text: "Consejos y rutina en casa." },
    ],
    faqs: [
      { q: "¿Qué servicios de estética ofrecéis?", a: "Tratamientos faciales, depilación con cera, cuidado de cejas y pestañas, y maquillaje para eventos." },
      { q: "¿Puedo combinarlo con un servicio de peluquería?", a: "Sí. Organizamos tu cita para hacer varios servicios el mismo día." },
      { q: "¿Hay que reservar con antelación?", a: "Recomendamos reservar con al menos una semana, especialmente para eventos." },
      { q: "¿Ofrecéis maquillaje para novias?", a: "Sí, con prueba previa. Consúltanos por WhatsApp para condiciones y disponibilidad." },
    ],
    whatsappMessage:
      "Hola, me gustaría reservar una cita de ESTÉTICA en Peluquería Nieves 1947. Mi nombre es ____ y prefiero el día ____ en horario ____. Gracias.",
    metaTitle: "Estética femenina en Oviedo — Peluquería Nieves 1947",
    metaDescription:
      "Cabina de estética en Oviedo: faciales, depilación, cejas, pestañas y maquillaje para eventos. Reserva tu cita en Peluquería Nieves 1947.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    industry: "Logística",
    company: "Empresa de distribución nacional",
    metric: "-37%",
    metricLabel: "errores de fulfillment",
    description:
      "Implementamos un sistema de IA para predicción de demanda y optimización de rutas, reduciendo errores de envío y ahorrando $50K/mes en costos operativos.",
    tags: ["Predicción de demanda", "Optimización de rutas", "Computer Vision"],
  },
  {
    industry: "E-commerce",
    company: "Marketplace de moda en línea",
    metric: "+28%",
    metricLabel: "tasa de conversión",
    description:
      "Motor de recomendaciones personalizado con IA que analiza comportamiento de compra en tiempo real, incrementando el ticket promedio un 45%.",
    tags: ["Recomendaciones IA", "Personalización", "Analytics"],
  },
  {
    industry: "Fintech",
    company: "Startup de servicios financieros",
    metric: "85%",
    metricLabel: "procesos automatizados",
    description:
      "Automatizamos el onboarding de clientes con verificación de identidad por IA y análisis de riesgo crediticio, reduciendo el tiempo de aprobación de 3 días a 15 minutos.",
    tags: ["KYC automatizado", "Scoring crediticio", "NLP"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CaseStudies() {
  return (
    <section className="bg-background py-24 md:py-32 border-t border-white/10" id="casos">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
            Casos de éxito
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
            Resultados que hablan
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Métricas reales de proyectos implementados. Sin promesas vacías,
            solo resultados medibles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {cases.map((item) => (
            <motion.div
              key={item.industry}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-medium uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                  {item.industry}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <div className="mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {item.metric}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.metricLabel}
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-2 font-medium">
                {item.company}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground border border-white/10 rounded-lg px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

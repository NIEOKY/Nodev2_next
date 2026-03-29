"use client";

import { motion } from "framer-motion";
import { Search, Code2, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description:
      "Analizamos tus procesos actuales, infraestructura y datos para identificar dónde la IA genera mayor impacto en tu negocio.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Implementación",
    description:
      "Diseñamos e integramos soluciones de IA con tu infraestructura existente. Sin disrupciones, con resultados desde la primera semana.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Optimización",
    description:
      "Medimos resultados continuamente y ajustamos los modelos para maximizar el ROI. Soporte dedicado post-implementación.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  return (
    <section className="bg-background py-24 md:py-32 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
            Proceso
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
            Cómo trabajamos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso probado que transforma tu negocio en semanas, no meses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3 relative"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative text-center"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                    <step.icon className="size-8 text-blue-400" />
                  </div>
                  <span className="absolute -top-3 -right-3 text-xs font-bold bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

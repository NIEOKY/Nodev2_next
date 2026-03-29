"use client";

import { motion } from "framer-motion";
import { Clock, Database, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Procesos manuales que consumen horas",
    description:
      "Tu equipo pierde tiempo valioso en tareas repetitivas que la inteligencia artificial puede resolver en segundos.",
    stat: "40%",
    statLabel: "del tiempo se pierde en tareas automatizables",
  },
  {
    icon: Database,
    title: "Datos valiosos sin explotar",
    description:
      "Tienes montañas de datos pero no las herramientas para convertirlos en decisiones estratégicas de negocio.",
    stat: "73%",
    statLabel: "de los datos empresariales nunca se analizan",
  },
  {
    icon: TrendingUp,
    title: "Tu competencia ya usa IA",
    description:
      "Mientras evalúas opciones, tus competidores ya están automatizando procesos y ganando ventaja competitiva.",
    stat: "72%",
    statLabel: "de empresas líderes ya implementaron IA",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Problem() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
            El problema
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
            El costo de no evolucionar
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada día sin inteligencia artificial es un día de oportunidades
            perdidas, eficiencia desperdiciada y terreno cedido.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={itemVariants}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-3">
                <problem.icon className="size-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {problem.description}
              </p>
              <div className="border-t border-white/10 pt-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {problem.stat}
                </span>
                <p className="text-sm text-muted-foreground mt-1">
                  {problem.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

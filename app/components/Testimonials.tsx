"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nodev transformó completamente nuestra operación. En 6 semanas teníamos un sistema de IA que redujo nuestros costos operativos un 35%. La inversión se pagó sola en el primer mes.",
    name: "María González",
    role: "Directora de Operaciones",
    company: "LogiTech MX",
    avatar: "MG",
  },
  {
    quote:
      "Lo que más me impresionó fue la claridad del proceso. Desde el diagnóstico inicial hasta la implementación, siempre supimos exactamente qué esperar y cuándo. Resultados tangibles desde la semana uno.",
    name: "Carlos Mendoza",
    role: "CEO",
    company: "FinanceApp",
    avatar: "CM",
  },
  {
    quote:
      "Evaluamos 4 consultoras antes de elegir a Nodev. La diferencia fue su enfoque en resultados medibles, no en buzzwords. Nuestro CRM ahora predice cierres con 89% de precisión.",
    name: "Ana Rodríguez",
    role: "VP de Ventas",
    company: "SalesForward",
    avatar: "AR",
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

export default function Testimonials() {
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
            Testimoniales
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col"
            >
              <Quote className="size-8 text-blue-400/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-8 flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-sm font-bold text-white">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

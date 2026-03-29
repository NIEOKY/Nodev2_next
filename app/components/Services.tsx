"use client";

import { motion } from "framer-motion";
import { Brain, Settings, Code, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Integración de IA",
    description:
      "Chatbots inteligentes, procesamiento de lenguaje natural, visión por computadora y automatización cognitiva integrados en tus sistemas existentes.",
    features: ["Chatbots & Asistentes", "Procesamiento de datos", "Modelos predictivos"],
  },
  {
    icon: Settings,
    title: "CRM & Automatización",
    description:
      "Conectamos tu CRM con pipelines inteligentes que califican leads, automatizan seguimientos y predicen cierres de ventas.",
    features: ["Salesforce & HubSpot", "Pipelines inteligentes", "Lead scoring con IA"],
  },
  {
    icon: Code,
    title: "Desarrollo a medida",
    description:
      "Aplicaciones web, APIs y plataformas diseñadas específicamente para las necesidades únicas de tu negocio.",
    features: ["Apps web & móviles", "APIs & integraciones", "Dashboards & analytics"],
  },
  {
    icon: Lightbulb,
    title: "Consultoría estratégica",
    description:
      "Definimos tu roadmap de IA, capacitamos a tu equipo y establecemos gobernanza de datos para una adopción exitosa.",
    features: ["Roadmap de IA", "Capacitación de equipos", "Gobierno de datos"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="bg-background py-24 md:py-32 border-t border-white/10" id="servicios">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
            Servicios
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones integrales de inteligencia artificial para cada etapa de
            tu transformación digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06] hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-3">
                <service.icon className="size-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

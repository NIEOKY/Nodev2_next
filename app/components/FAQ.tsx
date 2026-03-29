"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Cuánto tiempo toma una integración típica de IA?",
    answer:
      "Depende de la complejidad, pero nuestros proyectos típicos van de 4 a 12 semanas. Empezamos con un diagnóstico de 1 semana y un MVP funcional en las primeras 3-4 semanas, iterando a partir de ahí con resultados medibles desde el inicio.",
  },
  {
    question: "¿Trabajan con nuestro stack tecnológico actual?",
    answer:
      "Sí. Nos adaptamos a tu infraestructura existente. Trabajamos con los principales CRMs (Salesforce, HubSpot, Zoho), ERPs, bases de datos, servicios cloud (AWS, GCP, Azure) y prácticamente cualquier API. La integración, no el reemplazo, es nuestra filosofía.",
  },
  {
    question: "¿Cuál es la inversión mínima para un proyecto?",
    answer:
      "Nuestros proyectos comienzan desde $5,000 USD para integraciones puntuales. Para transformaciones más completas, trabajamos con retainers mensuales. Siempre empezamos con un diagnóstico gratuito para entender tus necesidades antes de cotizar.",
  },
  {
    question: "¿Qué pasa si no tenemos datos estructurados?",
    answer:
      "Es más común de lo que crees. Parte de nuestro proceso de diagnóstico incluye evaluar y organizar tus fuentes de datos. Podemos estructurar datos desde cero, implementar pipelines de recolección y establecer las bases necesarias para que la IA funcione correctamente.",
  },
  {
    question: "¿Ofrecen soporte post-implementación?",
    answer:
      "Absolutamente. Todos nuestros proyectos incluyen un periodo de soporte post-implementación. Además, ofrecemos planes de mantenimiento mensual que incluyen monitoreo, optimización continua de modelos y soporte técnico dedicado.",
  },
  {
    question: "¿Cómo miden el éxito de un proyecto?",
    answer:
      "Definimos KPIs claros desde el diagnóstico inicial: reducción de costos, ahorro de tiempo, aumento de conversión, precisión de predicciones, etc. Entregamos dashboards de seguimiento para que veas el impacto en tiempo real. Si no es medible, no lo implementamos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-24 md:py-32 border-t border-white/10" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-0 divide-y divide-white/10"
        >
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-blue-400"
              >
                <span className="text-base font-medium pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                )}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

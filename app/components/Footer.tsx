import { Mail, Phone } from "lucide-react";

const links = [
  { name: "Servicios", href: "#servicios" },
  { name: "Casos de Éxito", href: "#casos" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">nodev</span>
              <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                ai
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Consultoría especializada en inteligencia artificial. Transformamos
              negocios con soluciones de IA medibles y escalables.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navegación</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nodev.contacto@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="size-4" />
                  nodev.contacto@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+524492981061"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="size-4" />
                  +52 449 298 10 61
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nodev. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Aguascalientes, México
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Casos de Éxito", href: "#casos" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed group z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl rounded-2xl border border-transparent px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-black/70 max-w-4xl border-white/10 backdrop-blur-xl lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo */}
            <div className="flex w-full justify-between lg:w-auto">
              <a href="#" className="flex items-center space-x-2">
                <span className="text-2xl font-bold tracking-tight text-white">
                  nodev
                </span>
                <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase">
                  ai
                </span>
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Cerrar menú" : "Abrir menú"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu
                  className={cn(
                    "m-auto size-6 duration-200",
                    "group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200",
                    "group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100"
                  )}
                />
              </button>
            </div>

            {/* Desktop links - centered */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-white/70 hover:text-white block duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu + CTA */}
            <div
              className={cn(
                "bg-neutral-950 mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl shadow-black/40 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                "group-data-[state=active]:block lg:group-data-[state=active]:flex"
              )}
            >
              {/* Mobile links */}
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setMenuState(false)}
                        className="text-white/70 hover:text-white block duration-150"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <a
                  href="#contacto"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10",
                    isScrolled && "lg:hidden"
                  )}
                >
                  Contacto
                </a>
                <a
                  href="#contacto"
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200",
                    isScrolled ? "lg:inline-flex" : "lg:inline-flex"
                  )}
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

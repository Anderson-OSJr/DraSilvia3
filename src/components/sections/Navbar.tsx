// components/sections/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#abordagem", label: "Abordagem" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha menu ao clicar em um link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-cream/95 backdrop-blur-md border-b border-sage-subtle shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 xs:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <span className="font-serif text-[18px] xs:text-[19px] font-semibold text-green-vivid tracking-wide">
            Dra. Sílvia Barreto
          </span>

          {/* Links desktop — ocultos até lg */}
          <ul className="hidden lg:flex items-center gap-7 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[11px] font-medium uppercase tracking-widest text-ink-muted hover:text-green-vivid transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#agendar"
                className="bg-green-vivid text-white text-[13px] font-medium px-5 py-2 rounded-full hover:bg-green-dark transition-colors"
              >
                Agendar consulta
              </a>
            </li>
          </ul>

          {/* CTA compacto — visível de md até lg */}
          <a
            href="#agendar"
            className="hidden md:inline-flex lg:hidden items-center bg-green-vivid text-white text-[12px] font-medium px-4 py-2 rounded-full hover:bg-green-dark transition-colors"
          >
            Agendar consulta
          </a>

          {/* Botão hamburger — visível até md */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-sage-pale transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-cream/98 border-t border-sage-subtle px-5 xs:px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                className="py-3 text-[13px] font-medium text-ink-muted hover:text-green-vivid transition-colors border-b border-sage-subtle last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#agendar"
              onClick={handleLinkClick}
              className="mt-3 w-full text-center bg-green-vivid text-white text-[13px] font-medium py-3 rounded-full hover:bg-green-dark transition-colors"
            >
              Agendar consulta
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

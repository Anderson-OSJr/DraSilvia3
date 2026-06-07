// components/sections/Contato.tsx
// Mobile-first:
//   base     → coluna única (info em cima, mapa abaixo)
//   md       → grid 1fr/1fr lado a lado

import type { ReactNode } from "react";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3353.2161334367047!2d-48.176624922012!3d-21.76382794662876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ1JzQ5LjgiUyA0OMKwMTAnMTguMyJX!5e1!3m2!1spt-BR!2sbr!4v1780868987797!5m2!1spt-BR!2sbr";

const WHATSAPP = "16999611968";
const WHATSAPP_DISPLAY = "(16) 99961-1968";
const ENDERECO_LINHA1 = "Humaniza Espaço Terapêutico";
const ENDERECO_LINHA2 = "Av. Armando Corrêa de Siqueira, 1104";
const ENDERECO_LINHA3 = "Vila Harmonia, Araraquara - SP";
const INSTAGRAM = "@drasilviabarreto.mtc";
const INSTAGRAM_URL = "https://instagram.com/drasilviabarreto.mtc";

type Item = {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  href?: string;
};

const itens: Item[] = [
  {
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="#3A7D44" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Endereço",
    value: (
      <>
        {ENDERECO_LINHA1}
        <br />
        {ENDERECO_LINHA2}
        <br />
        {ENDERECO_LINHA3}
      </>
    ),
  },
  {
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="#3A7D44" strokeWidth={1.5} viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.47 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72c.23 1.08.57 2.13 1 3.13a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1 .44 2.05.78 3.13 1A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: `https://wa.me/55${WHATSAPP}`,
  },
  {
    icon: (
      <svg className="w-[18px] h-[18px]" fill="none" stroke="#3A7D44" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="#3A7D44" stroke="none" />
      </svg>
    ),
    label: "Instagram",
    value: INSTAGRAM,
    href: INSTAGRAM_URL,
  },
];

export function Contato() {
  return (
    <section
      id="contato"
      className="py-16 xs:py-20 md:py-24 xl:py-28 px-5 xs:px-8 md:px-12 xl:px-16 bg-sand-pale"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-start">
        {/* Info */}
        <div>
          <p className="eyebrow mb-4 xs:mb-5">Localização</p>
          <h2 className="font-serif text-[32px] xs:text-[36px] md:text-[40px] xl:text-[48px] font-light leading-[1.2] text-ink mb-8 xs:mb-10">
            Onde nos <em className="not-italic text-green-vivid">encontrar</em>
          </h2>

          <div className="flex flex-col gap-4 xs:gap-5">
            {itens.map((item) => (
              <div key={item.label} className="flex items-start gap-3 xs:gap-4">
                <div className="w-10 h-10 xs:w-11 xs:h-11 rounded-xl bg-white border border-sage/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] xs:text-[11px] uppercase tracking-[0.1em] text-ink-muted font-medium mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] xs:text-[14px] text-ink-mid hover:text-green-vivid transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[13px] xs:text-[14px] text-ink-mid leading-snug">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mapa */}
        <div className="rounded-2xl overflow-hidden border border-sage/20 h-[260px] xs:h-[300px] md:h-[360px] xl:h-[400px]">
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do consultório da Dra. Sílvia Barreto"
          />
        </div>
      </div>
    </section>
  );
}

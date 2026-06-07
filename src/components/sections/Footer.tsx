// components/sections/Footer.tsx
// Mobile-first:
//   base  → coluna única centralizada
//   md    → linha horizontal com space-between

export function Footer() {
  return (
    <footer className="bg-ink py-8 xs:py-9 px-5 xs:px-8 md:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

        <span className="font-serif text-[17px] xs:text-[18px] font-semibold text-white">
          Dra. Sílvia <span className="text-sage-light">Barreto</span>
        </span>

        <p className="text-[10px] xs:text-[11px] text-white/30 tracking-[0.06em] text-center leading-relaxed order-last md:order-none">
          CRM/SP · RQE Pediatria · RQE Acupuntura Médica
          <br />
          Pós-graduanda em Neuromodulação
        </p>

        <a
          href="https://instagram.com/drasilviabarreto.mtc"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 xs:w-9 xs:h-9 rounded-[8px] xs:rounded-[9px] border border-white/12 flex items-center justify-center group-hover:border-sage-light/40 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth={1.5} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.45)" stroke="none" />
            </svg>
          </div>
          <span className="text-[11px] xs:text-[12px] text-white/40 tracking-wide group-hover:text-white/60 transition-colors">
            @drasilviabarreto.mtc
          </span>
        </a>

      </div>
    </footer>
  );
}

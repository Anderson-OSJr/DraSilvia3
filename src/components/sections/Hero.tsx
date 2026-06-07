// components/sections/Hero.tsx
// Mobile-first:
//   base        → coluna única, foto acima do texto (stack vertical)
//   xs (480px)  → foto maior
//   md (768px)  → grid 1fr/1fr lado a lado (iPad Mini em pé)
//   xl (1280px) → espaçamentos maiores

import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen pt-16 flex flex-col md:grid md:grid-cols-2">

      {/* Direita (foto) — vem PRIMEIRO no mobile (ordem visual) */}
      <div className="order-1 md:order-2 bg-sage-pale flex flex-col items-center justify-center px-6 py-12 xs:py-14 md:py-20 gap-6 md:gap-8 md:min-h-[calc(100vh-4rem)]">
        <div className="relative w-[200px] h-[260px] xs:w-[230px] xs:h-[300px] md:w-[260px] md:h-[340px] xl:w-[280px] xl:h-[360px] rounded-[16px] md:rounded-[20px] overflow-hidden bg-sage-light">
          {/* Substitua pelo caminho real: /foto-dra-silvia.png */}
          <Image
            src="/foto-dra-silvia.png"
            alt="Dra. Sílvia Barreto"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 479px) 200px, (max-width: 767px) 230px, (max-width: 1279px) 260px, 280px"
          />
        </div>

        {/* Tags de credencial */}
        <div className="flex flex-wrap gap-2 justify-center max-w-[280px] xs:max-w-none">
          {["CRM/SP", "RQE Pediatria", "RQE Acupuntura Médica"].map((tag) => (
            <span
              key={tag}
              className="text-[9px] xs:text-[10px] font-medium uppercase tracking-[0.08em] px-3 py-1.5 rounded-full border border-sage/35 text-sage bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Esquerda (texto) — vem SEGUNDO no mobile */}
      <div className="order-2 md:order-1 bg-sand-pale flex flex-col justify-center px-5 xs:px-8 md:px-12 xl:px-16 py-12 xs:py-14 md:py-20 md:min-h-[calc(100vh-4rem)]">

        <p className="eyebrow mb-5 xs:mb-6">Medicina Integrativa</p>

        <h1 className="font-serif text-[36px] xs:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[60px] font-light leading-[1.1] text-ink mb-5 xs:mb-6 md:mb-7">
          Quando o cuidado vai
          <br className="hidden xs:block" />
          {" "}além do{" "}
          <em className="not-italic text-green-vivid">sintoma</em>
        </h1>

        <p className="text-[14px] xs:text-[15px] text-ink-muted leading-[1.85] max-w-md mb-8 xs:mb-10">
          Acupuntura Médica e Neuromodulação para quem busca equilíbrio real —
          do sistema nervoso ao bem-estar que se sente no dia a dia. Com{" "}
          <strong className="text-ink-mid font-medium">base científica</strong>{" "}
          e escuta verdadeira.
        </p>

        <a
          href="#agendar"
          className="inline-flex items-center gap-3 bg-green-vivid text-white px-7 xs:px-8 py-3.5 xs:py-4 rounded-full text-[13px] xs:text-[14px] font-medium tracking-wide hover:bg-green-dark hover:-translate-y-0.5 transition-all w-full xs:w-fit justify-center xs:justify-start"
        >
          Agendar consulta
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p className="text-[11px] xs:text-[12px] text-ink-muted/70 mt-4">
          Atendimento presencial · Araraquara/SP
        </p>
      </div>

    </section>
  );
}

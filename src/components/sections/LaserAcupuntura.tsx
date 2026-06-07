// components/sections/LaserAcupuntura.tsx
// Mobile-first:
//   base     → coluna única (ícone+título em cima, texto abaixo)
//   lg       → grid 1fr/2fr lado a lado

export function LaserAcupuntura() {
  return (
    <section
      id="laseracupuntura"
      className="bg-ink py-16 xs:py-20 md:py-24 xl:py-28 px-5 xs:px-8 md:px-12 xl:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 xs:gap-12 lg:gap-16 items-center">

        {/* Esquerda — ícone, título, pill */}
        <div className="flex flex-col gap-4 xs:gap-5">
          <div className="w-16 h-16 xs:w-[72px] xs:h-[72px] rounded-[16px] xs:rounded-[18px] bg-sage/15 flex items-center justify-center">
            <span className="text-sage-light text-2xl xs:text-3xl">✦</span>
          </div>

          <h3 className="font-serif text-[28px] xs:text-[32px] md:text-[36px] font-light text-white leading-[1.15]">
            Laseracupuntura:
            <br />
            <em className="not-italic text-sage-light">para os pequenos</em>
          </h3>

          <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-2 rounded-full border border-sage-light/30 bg-sage/10 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-light flex-shrink-0" />
            <span className="text-[11px] xs:text-[12px] text-sage-light font-medium tracking-wide">
              Sem agulhas · Sem dor · Seguro para bebês
            </span>
          </div>
        </div>

        {/* Direita — texto */}
        <div className="space-y-4 xs:space-y-5">
          <p className="text-[14px] xs:text-[15px] text-white/60 leading-[1.88]">
            Você sabia que a acupuntura pode ser feita{" "}
            <strong className="text-white/85 font-medium">sem agulhas</strong> e
            é totalmente segura para crianças e bebês? A Laseracupuntura utiliza
            um feixe de luz suave para estimular os pontos de acupuntura de
            forma{" "}
            <strong className="text-white/85 font-medium">
              indolor e não invasiva
            </strong>
            .
          </p>
          <p className="text-[14px] xs:text-[15px] text-white/60 leading-[1.88]">
            É a tecnologia a serviço da Medicina Tradicional Chinesa — com todo
            o cuidado que a infância merece. Também indicada para adultos com
            fobia de agulhas ou que preferem uma abordagem ainda mais gentil.
          </p>
          <p className="text-[14px] xs:text-[15px] text-white/60 leading-[1.88]">
            Resultados como{" "}
            <strong className="text-white/85 font-medium">
              redução da dor crônica já nas primeiras sessões
            </strong>
            , melhora do sono e menor necessidade de medicação são possíveis —
            com ciência e cuidado genuíno.
          </p>
        </div>

      </div>
    </section>
  );
}

// components/sections/Especialidades.tsx
// Mobile-first:
//   base     → 1 coluna (cards empilhados)
//   sm       → 2 colunas
//   lg       → 3 colunas

const especialidades = [
  {
    num: "01",
    title: "Acupuntura Médica",
    desc: "Tratamento de dor crônica, ansiedade, distúrbios do sono e condições funcionais. Pós-graduação de 2 anos exclusiva para médicos, concluída em 2024.",
  },
  {
    num: "02",
    title: "Neuromodulação",
    desc: "Técnicas que atuam no sistema nervoso para tratar dor, desequilíbrios emocionais e condições que conectam o físico e o emocional. Nem toda dor começa onde ela aparece.",
  },
  {
    num: "03",
    title: "Laseracupuntura",
    desc: "Com o recurso da Laseracupuntura, crianças e bebês têm acesso a um tratamento seguro, indolor e não invasivo.",
  },
];

export function Especialidades() {
  return (
    <section
      id="especialidades"
      className="py-16 xs:py-20 md:py-24 xl:py-28 px-5 xs:px-8 md:px-12 xl:px-16 bg-sand-pale"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg mb-10 xs:mb-12 md:mb-14">
          <p className="eyebrow mb-4 xs:mb-5">O que tratamos</p>
          <h2 className="font-serif text-[32px] xs:text-[36px] md:text-[40px] xl:text-[48px] font-light leading-[1.15] text-ink">
            Especialidades &{" "}
            <em className="not-italic text-green-vivid">abordagens</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-6">
          {especialidades.map((e) => (
            <div
              key={e.num}
              className="bg-white rounded-2xl p-6 xs:p-7 md:p-8 border border-sage/20 relative overflow-hidden
                         hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,125,68,0.09)] transition-all duration-200"
            >
              {/* Barra superior */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-sage" />

              <p className="font-serif text-[44px] xs:text-[48px] font-light text-sage-light leading-none mb-3 xs:mb-4">
                {e.num}
              </p>
              <h3 className="text-[16px] xs:text-[17px] font-medium text-ink-mid mb-2 xs:mb-3">
                {e.title}
              </h3>
              <p className="text-[12px] xs:text-[13px] text-ink-muted leading-[1.75] mb-4 xs:mb-5">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

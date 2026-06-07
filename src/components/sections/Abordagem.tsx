// components/sections/Abordagem.tsx
// Mobile-first:
//   base     → coluna única, pilares empilhados
//   md       → grid 2 colunas (texto | pilares)

const pilares = [
  {
    title: "Formação sólida, prática humana",
    desc: "30 anos como pediatra construíram uma escuta que vai além do diagnóstico. Hoje, essa experiência potencializa cada atendimento em acupuntura e neuromodulação.",
    tag: "Experiência clínica",
  },
  {
    title: "Ciência como base, não como vitrine",
    desc: "Inúmeros estudos comprovam a eficácia da Acupuntura e da Neuromodulação. O que guia o tratamento é a evidência — e o que o guia de volta é o paciente na frente.",
    tag: "Base científica",
  },
  {
    title: "O protagonista é sempre o paciente",
    desc: "Cada melhora, por menor que seja, é uma vitória a ser festejada. O tratamento caminha junto — com respeito ao tempo de cada um.",
    tag: "Cuidado humanizado",
  },
];

export function Abordagem() {
  return (
    <section id="abordagem" className="py-16 xs:py-20 md:py-24 xl:py-28 px-5 xs:px-8 md:px-12 xl:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-center">

        {/* Texto */}
        <div>
          <p className="eyebrow mb-5">A abordagem</p>
          <h2 className="font-serif text-[32px] xs:text-[36px] md:text-[40px] xl:text-[48px] font-light leading-[1.15] text-ink mb-5 xs:mb-6">
            Seu corpo não separa
            <br className="hidden xs:block" />
            {" "}o emocional do{" "}
            <em className="not-italic text-green-vivid">físico</em>
          </h2>
          <p className="text-[14px] xs:text-[15px] text-ink-muted leading-[1.88] mb-4 xs:mb-5">
            Cansaço constante, tensão, dificuldade para dormir, dores que
            aparecem sem explicação clara — muitas vezes esses sinais têm mais
            conexão entre si do que parece. O organismo fala quando está em
            desequilíbrio.
          </p>
          <p className="text-[14px] xs:text-[15px] text-ink-muted leading-[1.88] mb-5 xs:mb-6">
            A Acupuntura Médica e a Neuromodulação trabalham justamente nesse
            ponto:{" "}
            <strong className="text-ink-mid font-medium">
              olhar para o sistema nervoso como chave do cuidado com a saúde
            </strong>
            , integrando o que a medicina ocidental e a Medicina Tradicional
            Chinesa têm de melhor.
          </p>
          <blockquote className="border-l-2 border-sage pl-4 xs:pl-5 py-3 xs:py-4 bg-sage-pale rounded-r-xl">
            <p className="font-serif text-[16px] xs:text-[17px] md:text-[18px] italic text-ink-mid leading-relaxed">
              "Laseracupuntura não é magia. É ciência bem aplicada."
            </p>
          </blockquote>
        </div>

        {/* Pilares */}
        <div className="flex flex-col gap-3 xs:gap-4">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-3 xs:gap-4 p-4 xs:p-5 rounded-2xl border border-sage/20 bg-sand-pale hover:border-sage-light transition-colors"
            >
              <div className="w-10 h-10 xs:w-11 xs:h-11 rounded-xl bg-sage-pale flex items-center justify-center flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-vivid block" />
              </div>
              <div>
                <p className="text-[13px] xs:text-[14px] font-medium text-ink-mid mb-1">{p.title}</p>
                <p className="text-[12px] text-ink-muted leading-relaxed mb-2">{p.desc}</p>
                <span className="inline-block text-[10px] font-medium uppercase tracking-[0.06em] px-2.5 py-1 rounded-full bg-sage-pale border border-sage/30 text-sage">
                  {p.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

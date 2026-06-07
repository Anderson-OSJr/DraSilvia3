"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fotos = [
  "/galeria/foto-1.png",
  "/galeria/foto-2.png",
  "/galeria/foto-3.png",
  "/galeria/foto-4.png",
  "/galeria/foto-5.png",
  "/galeria/foto-6.png",
  "/galeria/foto-7.png",
  "/galeria/foto-8.png",
];

export function Carrossel() {
  const [atual, setAtual] = useState(0);

  const proximo = useCallback(() => {
    setAtual((i) => (i === fotos.length - 1 ? 0 : i + 1));
  }, []);

  const anterior = useCallback(() => {
    setAtual((i) => (i === 0 ? fotos.length - 1 : i - 1));
  }, []);

  useEffect(() => {
    const id = setTimeout(proximo, 5000);
    return () => clearTimeout(id);
  }, [atual, proximo]);

  return (
    <section className="bg-sage-light py-16 xs:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5 xs:px-6 lg:px-8 flex flex-col items-center">
        <p className="eyebrow mb-8 xs:mb-10 text-ink-mid [&::before]:bg-ink-mid">Galeria</p>

        <div className="flex items-center gap-6 md:gap-10">
          <button
            onClick={anterior}
            className="p-3 rounded-full border border-white/50 text-white hover:bg-white/20 transition-colors flex-shrink-0"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="relative w-[200px] h-[260px] xs:w-[230px] xs:h-[300px] md:w-[260px] md:h-[340px] xl:w-[280px] xl:h-[360px] rounded-[16px] md:rounded-[20px] overflow-hidden bg-sage flex-shrink-0 shadow-lg">
            <Image
              key={atual}
              src={fotos[atual]}
              alt={`Foto ${atual + 1} de ${fotos.length}`}
              fill
              className="object-cover"
              sizes="(max-width: 479px) 200px, (max-width: 767px) 230px, (max-width: 1279px) 260px, 280px"
            />
          </div>

          <button
            onClick={proximo}
            className="p-3 rounded-full border border-white/50 text-white hover:bg-white/20 transition-colors flex-shrink-0"
            aria-label="Próxima foto"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex gap-2 mt-6 xs:mt-8">
          {fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => setAtual(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === atual ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Ir para foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

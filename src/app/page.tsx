// app/page.tsx
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Abordagem } from "@/components/sections/Abordagem";
import { Especialidades } from "@/components/sections/Especialidades";
import { Carrossel } from "@/components/sections/Carrossel";
import { LaserAcupuntura } from "@/components/sections/LaserAcupuntura";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Abordagem />
      <Especialidades />
      <Carrossel />
      <LaserAcupuntura />
      <Contato />
      <Footer />
    </main>
  );
}

// app/page.tsx
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Abordagem } from "@/components/sections/Abordagem";
import { Especialidades } from "@/components/sections/Especialidades";
import { LaserAcupuntura } from "@/components/sections/LaserAcupuntura";
import { FormularioLead } from "@/components/sections/FormularioLead";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Abordagem />
      <Especialidades />
      <LaserAcupuntura />
      <FormularioLead />
      <Contato />
      <Footer />
    </main>
  );
}

// app/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Dra. Sílvia Barreto",
  description:
    "Acupuntura Médica, Laseracupuntura e Neuromodulação com base científica e cuidado humanizado. Atendimento presencial em Araraquara/SP. Agende sua consulta.",
  keywords: [
    "acupuntura médica Araraquara",
    "neuromodulação Araraquara",
    "laseracupuntura",
    "dor crônica",
    "medicina integrativa",
    "Dra Sílvia Barreto",
  ],
  openGraph: {
    title:
      "Dra. Sílvia Barreto — Acupuntura Médica e Neuromodulação | Araraquara",
    description:
      "Cuidado integrativo com base científica. Acupuntura Médica, Laseracupuntura e Neuromodulação em Araraquara/SP.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}

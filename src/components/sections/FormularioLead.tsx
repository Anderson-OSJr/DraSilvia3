// components/sections/FormularioLead.tsx
// Mobile-first:
//   base     → coluna única (texto em cima, form abaixo)
//   md       → grid 1fr/1fr lado a lado

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const motivos = [
  "Acupuntura — dor crônica",
  "Acupuntura — ansiedade / sono",
  "Laseracupuntura (adultos)",
  "Laseracupuntura (crianças / bebês)",
  "Neuromodulação",
  "Consulta pediátrica",
  "Outra dúvida",
];

const schema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .regex(/^[\d\s\(\)\-\+]+$/, "Use apenas números"),
  motivo: z.string().min(1, "Selecione o motivo"),
});

type FormData = z.infer<typeof schema>;
type Status = "idle" | "loading" | "success" | "error";

export function FormularioLead() {
  const [status, setStatus] = useState<Status>("idle");

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", whatsapp: "", motivo: "" },
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="agendar"
      className="grid grid-cols-1 md:grid-cols-2"
    >
      {/* Esquerda — chamada */}
      <div className="bg-sage-pale flex flex-col justify-center px-5 xs:px-8 md:px-12 xl:px-16 py-14 xs:py-16 md:py-24">
        <p className="eyebrow mb-4 xs:mb-5">Agendamento</p>
        <h2 className="font-serif text-[30px] xs:text-[34px] md:text-[38px] xl:text-[44px] font-light leading-[1.2] text-ink mb-4 xs:mb-5">
          Dê o primeiro passo
          <br className="hidden xs:block" />
          {" "}para o seu{" "}
          <em className="not-italic text-green-vivid">bem-estar</em>
        </h2>
        <p className="text-[13px] xs:text-[14px] text-ink-muted leading-[1.85] max-w-sm">
          Preencha o formulário e entraremos em contato pelo WhatsApp para
          confirmar data e horário. Cada atendimento começa com uma escuta de
          verdade.
        </p>
      </div>

      {/* Direita — formulário */}
      <div className="bg-white flex flex-col justify-center px-5 xs:px-8 md:px-12 xl:px-16 py-14 xs:py-16 md:py-24">
        {status === "success" ? (
          <div className="text-center py-8">
            <p className="font-serif text-[22px] xs:text-[24px] font-light text-green-vivid mb-3">
              Mensagem recebida!
            </p>
            <p className="text-[13px] xs:text-[14px] text-ink-muted leading-relaxed">
              Entraremos em contato pelo WhatsApp em breve.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-[12px] text-sage underline underline-offset-4"
            >
              Enviar nova mensagem
            </button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 xs:space-y-5">

              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                      Nome completo
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                      WhatsApp
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(xx) 9xxxx-xxxx"
                        inputMode="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="motivo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                      Motivo da consulta
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {motivos.map((m) => (
                          <SelectItem key={m} value={m}>
                            {m}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {status === "error" && (
                <p className="text-[12px] xs:text-[13px] text-red-500">
                  Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-green-vivid hover:bg-green-dark text-white font-medium tracking-wide py-6 text-[13px] xs:text-[14px]"
              >
                {status === "loading" ? "Enviando..." : "Solicitar agendamento"}
              </Button>

              <p className="text-[10px] xs:text-[11px] text-ink-muted/70 text-center">
                Seus dados são confidenciais e não serão compartilhados.
              </p>

            </form>
          </Form>
        )}
      </div>
    </section>
  );
}

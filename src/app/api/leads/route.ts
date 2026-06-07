// app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const leadSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  whatsapp: z
    .string()
    .min(10, "WhatsApp inválido")
    .regex(/^[\d\s\(\)\-\+]+$/, "Formato inválido"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: parsed.error.issues },
        { status: 400 },
      );
    }

    const lead = await prisma.lead.create({ data: parsed.data });
    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (error) {
    console.error("[leads/route] Erro:", error);
    return NextResponse.json(
      { error: "Erro interno. Tente novamente." },
      { status: 500 },
    );
  }
}

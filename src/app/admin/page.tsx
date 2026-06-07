import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const fmt = (date: Date) =>
    new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    }).format(date);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Leads recebidos
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {leads.length} {leads.length === 1 ? "contato" : "contatos"} no total
        </p>

        {leads.length === 0 ? (
          <p className="text-gray-400 text-center py-16">
            Nenhum lead recebido ainda.
          </p>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
                <tr>
                  <th className="text-left px-6 py-3">Nome</th>
                  <th className="text-left px-6 py-3">WhatsApp</th>
                  <th className="text-left px-6 py-3">Data e hora</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {lead.nome}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <a
                        href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 underline underline-offset-2"
                      >
                        {lead.whatsapp}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {fmt(lead.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

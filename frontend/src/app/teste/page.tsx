"use client";

import { useSearchParams, useRouter } from "next/navigation";

// Creating array of cards
const cards = [
  { id: 1, titulo: "Treino de Peito", status: "pendente" },
  { id: 2, titulo: "Treino de Pernas", status: "concluido" },
  { id: 3, titulo: "Treino de Ombro", status: "pendente" },
];

export default function Page() {
  //States utils in Filter
  const searchParams = useSearchParams();
  const router = useRouter();

  //Take value of URL
  const statusSelecionado = searchParams.get("status") || "";

  //Function Filter cards
  const filtrarPorStatus = (value: string) => {
    //Take value and formated value
    const params = new URLSearchParams(searchParams.toString());


    if (value) {
      params.set("status", value);
    } else {
      params.delete("status");
    }

    router.push(`?${params.toString()}`);
  };

  const cardsFiltrados = cards.filter((card) =>
    statusSelecionado ? card.status === statusSelecionado : true
  );

  return (
    <div className="p-6 space-y-6">
      <select
        className="border px-3 py-2 rounded-md shadow text-sm"
        value={statusSelecionado}
        onChange={(e) => filtrarPorStatus(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="pendente">Pendente</option>
        <option value="concluido">Concluído</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardsFiltrados.map((card) => (
          <div
            key={card.id}
            className="rounded-xl p-4 shadow bg-white border-l-4"
            style={{
              borderColor: card.status === "pendente" ? "#facc15" : "#4ade80",
            }}
          >
            <h2 className="text-lg font-medium">{card.titulo}</h2>
            <span
              className={`text-xs mt-2 inline-block px-2 py-1 rounded ${
                card.status === "pendente"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {card.status === "pendente" ? "Pendente" : "Concluído"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
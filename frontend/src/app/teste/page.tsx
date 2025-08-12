"use client";

import { useState } from "react";

export default function Teste() {
  const Frutas = [
    { id: 1, nome: "Maçã", cor: "Vermelha" },
    { id: 2, nome: "Banana", cor: "Amarela" },
    { id: 3, nome: "Laranja", cor: "Laranja" },
    { id: 4, nome: "Uva", cor: "Roxa" },
    { id: 5, nome: "Abacaxi", cor: "Amarela" },
    { id: 6, nome: "Melancia", cor: "Verde" },
    { id: 7, nome: "Morango", cor: "Vermelha" },
    { id: 8, nome: "Pera", cor: "Verde" },
    { id: 9, nome: "Kiwi", cor: "Marrom" },
    { id: 10, nome: "Cereja", cor: "Vermelha" },
  ];

  const [frutaSelecionada, setFrutaSelecionada] = useState("");

  const frutasFiltradas = frutaSelecionada
    ? Frutas.filter((fruta) => fruta.nome === frutaSelecionada)
    : Frutas;

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-xl font-bold">Filtrar Frutas por Nome</h1>

      <select
        value={frutaSelecionada}
        onChange={(e) => setFrutaSelecionada(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="">Todas as frutas</option>
        {Frutas.map((fruta) => (
          <option key={fruta.id} value={fruta.nome}>
            {fruta.nome}
          </option>
        ))}
      </select>

      <ul className="mt-4">
        {frutasFiltradas.length === 0 ? (
          <li>Nenhuma fruta encontrada</li>
        ) : (
          frutasFiltradas.map((fruta) => (
            <li key={fruta.id}>
              {fruta.nome} 
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

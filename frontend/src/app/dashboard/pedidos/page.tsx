"use client";

import Image from "next/image";
import { ImageBackgroundOrder } from "@/assets";
import { useState } from "react";
import { Order } from "../components/CardOrder";

//Typing Order
type Status = "pendente" | "em-processo" | "finalizado";

interface Order {
  id: number;
  nome: string;
  price: number;
  mesa: number;
  MethodPayment: string;
  quantify: number;
  status: Status;
}

const Pedidos = () => {
  //State for Order
  const [order, setOrder] = useState<Order[]>([
    {
      id: 1,
      nome: "X-Burguer com Fritas",
      price: 25.9,
      mesa: 5,
      MethodPayment: "Crédito",
      quantify: 2,
      status: "pendente",
    },
    {
      id: 2,
      nome: "Pizza Calabresa",
      price: 49.9,
      mesa: 3,
      MethodPayment: "Dinheiro",
      quantify: 1,
      status: "em-processo",
    },
  ]);
  //State for Storage info Status
  const [status, setStatus] = useState<Status>("pendente");
  //Function for Alter Status Order
  const PrevStatusOrder = (id: number) => {
    setOrder((prev) =>
      prev.map((Order) => {
        // If id Caught for is the same to id of Order, continue
        if (Order.id === id) {
          if (Order.status === "pendente")
            return { ...Order, status: "em-processo" };
          if (Order.status === "em-processo")
            return { ...Order, status: "finalizado" };
        }
        return Order;
      })
    );
  };
  //Function Remover Order
  const handleRemoverOrder = (id: number) => {
    setOrder((prev) => prev.filter((order) => order.id !== id));
  };
  //Const Filter Products for Status
  const FilterProduct = order.filter((p) => p.status === status);
  return (
    <div className="bg-white w-[100%] h-[92vh] max-lg:h-screen px-4 rounded-2xl shadow-2xl flex flex-col">
      <div className="w-full flex items-center justify-center">
        <Image
          src={ImageBackgroundOrder}
          alt="Banner Dashboard"
          width={700}
          className="mt-3"
          height={200}
        />
      </div>
      {/* Part of status of Order */}
      <div className="w-full flex items-center justify-center mt-4">
        <div className="relative flex flex-wrap rounded-md bg-[#E4E4E4] shadow-sm p-1 w-[90%] text-sm">
          {["pendente", "em-processo", "finalizado"].map((StatusValue) => (
            <label key={StatusValue} className="flex-1 text-center">
              <input
                type="radio"
                name="status"
                checked={status === StatusValue}
                onChange={() => setStatus(StatusValue as Status)}
                className="peer hidden"
              />
              <span className="flex cursor-pointer items-center justify-center rounded-md px-0 py-2 text-slate-800 transition-all duration-150 ease-in-out peer-checked:bg-[#FF6A00] peer-checked:font-semibold peer-checked:text-white">
                {StatusValue.replace("-", " ")}
              </span>
            </label>
          ))}
        </div>
      </div>
      {/* Part of Orders show  */}
      <div className="flex items-center overflow-y-auto h-[90vh] flex-col gap-4 mt-4">
        {FilterProduct.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            Nenhum pedido aqui.
          </p>
        ) : (
          FilterProduct.map((order) => (
            <Order.Root key={order.id}>
              <div className="flex w-[70%] flex-col">
                <Order.Payment Payment={order.MethodPayment} />
                <Order.mesa numberMesa={order.mesa} />
                <Order.quantify quantify={order.quantify} />
              </div>
              <div className="flex flex-col max-md:flex-col max-md:justify-between max-md:items-start w-full items-end gap-4">
                <div>
                  <Order.price price={order.price} />
                </div>
                <div>
                  {order.status !== "finalizado" && (
                    <Order.buttoes
                      handlePrevStatus={() => PrevStatusOrder(order.id)}
                      handleRemoveProduct={() => handleRemoverOrder(order.id)}
                    />
                  )}
                </div>
              </div>
            </Order.Root>
          ))
        )}
      </div>
    </div>
  );
};

export default Pedidos;

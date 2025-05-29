"use client";

import Image, { StaticImageData } from "next/image";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

interface CardProps {
  id: number;
  name: string;
  photo: string | StaticImageData;
  price: number;
  quantify?: number;
  productInAdded: boolean;
  handleAddQuantifyProduct: () => void;
  handleRemoverQuantifyProduct: () => void;
  handleAddProcutInCart: () => void;
  confirmQuantify: () => void;
  ProductAddInCart: () => void

}

const Card = ({
  id,
  name,
  photo,
  price,
  quantify,
  productInAdded,
  confirmQuantify,
  handleAddProcutInCart,
  handleAddQuantifyProduct,
  handleRemoverQuantifyProduct,
  ProductAddInCart
}: CardProps) => {
  return (
    <article className="flex flex-col px-3 bg-white shadow-lg hover:outline-3 mt-2 hover:outline-[#fba900] transition-all ease-in-  w-[200px] rounded-2xl h-[280px]">
      <div className="bg-[#F1F1F1] flex mt-[1rem] items-center justify-center rounded-[0.9rem] w-full h-[110px] relative object-cover">
        <Image
          src={photo}
          className="object-cover rounded-2xl"
          alt="Foto do prato"
        />
      </div>
      <div className="w-full flex flex-col items-start leading-5 mt-4">
        <p className="text-[#fab900] font-bold">R${price}</p>
        <p className="font-bold">{name}</p>
        <p className="text-[#707070] font-[500] text-[0.8rem]">
          Descrição dos ingredientes do produto
        </p>
      </div>
      {productInAdded ? (
        <button
          onClick={handleAddProcutInCart}
          className={`w-full bg-[#fab900] py-1 rounded-sm text-white font-bold cursor-pointer mt-4 hover:bg-[#fb9200] ease-in-out duration-[.5s] transition-all`}
        >
          Adicionar
        </button>
      ) : (
        <div
          className={`w-full bg-[rgba(205,205,205,0.35)] flex items-center justify-between px-1 h-[2rem] mt-4 rounded-sm bg-[rgba(205,205,205,0.35)`}
        >
          <button
            onClick={handleRemoverQuantifyProduct}
            className="rounded-full bg-[#fba900] w-[1.7rem] text-white text-[2rem] flex items-center justify-center h-[1.7rem] hover:bg-[#fb9200] ease-in-out duration-[.5s] transition-all cursor-pointer"
          >
            -
          </button>
          <h1 className="font-bold">{quantify}</h1>
          <div className={`flex items-center justify-center gap-2`}>
            <button
              onClick={handleAddQuantifyProduct}
              className={`rounded-full bg-[#fba900] w-[1.7rem] text-white text-[2rem] flex items-center justify-center h-[1.7rem] hover:bg-[#fb9200] ease-in-out duration-[.5s] transition-all cursor-pointer`}
            >
              +
            </button>
            <button
              onClick={ProductAddInCart}
              className={`rounded-full  bg-[#fba900] w-[1.7rem] text-white text-[1rem] flex items-center justify-center h-[1.7rem] hover:bg-[#fb9200] ease-in-out duration-[.5s] transition-all cursor-pointer`}
            >
              <FaCheck />
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Card;

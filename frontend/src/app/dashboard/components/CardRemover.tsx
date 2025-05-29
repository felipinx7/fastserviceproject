import { PhotoOrder } from "@/assets";
import Image from "next/image";

const CardRemover = () => {
  return (
    <article className="w-full shadow-lg flex items-center border-1 border-[#999] justify-between px-3 rounded-2xl ease-in-out duration-[0.1s] hover:outline-[#fba900] hover:outline-3 hover:outline-offset-[-2px] h-auto p-2 bg-white">
      <div className="flex w-[50%] max-lg:w-[100%] gap-3 items-center justify-center">
        <div className="w-[50%]">
          <Image
            src={PhotoOrder}
            width={150}
            height={150}
            alt="Photo Product"
            className="rounded-2xl"
          />
        </div>
        <div className="w-full">
          <p className="font-bold text-[1.2rem]">Felipe Lima</p>
          <p className="font-bold text-[#fba900]">Preço: R$90,00</p>
        </div>
      </div>
      <div>
        <button className="bg-red-600 text-white font-bold flex items-center justify-center text-2xl p-2 rounded-2xl cursor-pointer hover:bg-red-800 duration-[0.3s] ease-in-out ">Remover</button>
      </div>
    </article>
  );
};

export default CardRemover;

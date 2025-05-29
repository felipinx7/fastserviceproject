import Image, { StaticImageData } from "next/image";
import { FaTrashCan } from "react-icons/fa6";

interface CardCartProps {
  name: string;
  price: number;
  photo: StaticImageData | string;
  quantify: number | undefined;
  handleAddQuantifyProduct: () => void;
  handleRemoverQuantifyProduct: () => void;
  removerProductCard: () => void;
}

const CardCart = ({
  name,
  price,
  photo,
  quantify,
  handleAddQuantifyProduct,
  handleRemoverQuantifyProduct,
  removerProductCard,
}: CardCartProps) => {
  return (
    <article className="w-full relative border-2  border-[#D4D4D4] rounded-2xl flex gap-4 items-center px-2 py-2">
      <div className="">
        <Image
          src={photo}
          alt="Image Order"
          width={150}
          height={150}
          className="rounded-2xl bg-[#E1E1E1]"
        />
      </div>
      <div className="flex w-full flex-col gap-2 items-start">
        <div className="w-full">
          <h1 className="font-bold text-[0.9rem]">{name}</h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <h3 className="font-bold text-[#fba900]">R${price}</h3>
          <div className="bg-[rgba(205,205,205,0.35)] flex w-[5rem] h-[1.4rem] items-center justify-between rounded-[5.97px]">
            <button
              onClick={handleRemoverQuantifyProduct}
              className="bg-[#fab900]  hover:bg-amber-500 ease-in-out duration-[0.5s] cursor-pointer w-[1.5rem] h-[1.4rem] flex items-center justify-center rounded-[5.97px] font-bold text-white text-2xl"
            >
              -
            </button>
            <p className="font-bold">{quantify}</p>
            <button
              onClick={handleAddQuantifyProduct}
              className="bg-[#fab900] hover:bg-amber-500 ease-in-out duration-[0.5s] cursor-pointer font-bold w-[1.5rem] h-[1.4rem] flex items-center justify-center rounded-[5.97px] text-white text-2xl"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={removerProductCard}
        className="absolute w-[1.6rem] h-[1.6rem] top-0 right-0 bg-[#fab900] hover:bg-amber-500 ease-in-out duration-[0.5s] cursor-pointer font-bold flex items-center justify-center rounded-[5.97px] text-white text-2xl"
      >
        x
      </button>
    </article>
  );
};

export default CardCart;

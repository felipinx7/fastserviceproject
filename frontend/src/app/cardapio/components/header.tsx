import Image from "next/image";
import { FotoUserExemplo } from "@/assets";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  return (
    <header className="relative h-auto py-5 w-[75%] max-lg:w-full flex max-sm:flex-col max-sm:gap-4 max-sm:items-start items-center justify-between">
      <div className="w-[50%] max-sm:w-full flex items-center justify-start">
        <div className="">
          <Image
            src={FotoUserExemplo}
            alt="Photo user"
            width={50}
            height={50}
          />
        </div>
        <div className="">
          <p className="font-bold tex-[.9rem]">Seja bem-vindo(a)!</p>
          <span className="text-[#545454] text-[0.9rem]">
            Faça seus pedidos em um clique!
          </span>
        </div>
      </div>
      <div className="w-[50%] max-sm:w-full max-sm:justify-start  max-sm:items-start flex items-center justify-end">
        <h4 className="font-[600] flex items-center justify-center gap-2">
          <span className="font-bold flex items-center justify-center">
            Estabelecimento <IoIosArrowForward />{" "}
          </span>
          Mesa (teste)
        </h4>
      </div>
    </header>
  );
};

export default Header;

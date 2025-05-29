import { IconeSuccess } from "@/assets";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface DisplayAlertProps {
  showDisplayAlert: boolean;
  handleDisplayAlert: () => void;
}

const DisplayAlert = ({ showDisplayAlert, handleDisplayAlert }: DisplayAlertProps) => {
  return (
    <div
      className={`${
        showDisplayAlert ? "block" : "hidden"
      } fixed top-0 z-[999999999999999] px-4 left-0 w-full min-h-[100vh] h-full flex items-center justify-center backdrop-blur-[5px] bg-black/16`}
    >
      <form className="bg-[rgba(240,253,244)] relative w-[600px] h-[600px] max-sm:h-auto p-3 rounded-2xl">
        <div onClick={handleDisplayAlert} className="absolute top-0 right-0 bg-amber-400 p-1 rounded-bl-2xl cursor-pointer hover:bg-amber-500 ease-in-out duration-[0.2s] transition-all text-3xl font-bold text-white">
          <IoClose />
        </div>
        <h1 className="font-bold text-3xl text-center">
          Seu pedido foi realizado com sucesso!
        </h1>
        <div className="w-full flex items-center justify-center mt-2">
          <Image
            src={IconeSuccess}
            width={130}
            height={130}
            alt="Image Sucess"
          />
        </div>
        <div className="w-full items-center justify-center">
          <p className="text-center text-2xl mt-3">
            Como você avalia nosso sistema?
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-3 gap-5">
          <input
            placeholder="Nome"
            type="text"
            className="w-[50%] bg-white p-4 rounded-2xl outline-none focus:text-[#fba900] font-bold focus:border-2 focus:border-[#fba900] transition-all duration-[0.3s] ease-in-out"
          />
          <input
            placeholder="Sobrenome"
            type="text"
            className="w-[50%] bg-white p-4 rounded-2xl outline-none focus:text-[#fba900] font-bold focus:border-2 focus:border-[#fba900] transition-all duration-[0.3s] ease-in-out"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <textarea
            placeholder="Digite sua avalição aqui"
            className="bg-white w-full h-[10rem] text-left p-2 rounded-2xl mt-5  focus:text-[#fba900] font-bold focus:outline-2 focus:outline-[#fba900] transition-all duration-[0.3s] ease-in-out"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#fba900] cursor-pointer hover:bg-amber-500 ease-in-out duration-[0.5s] w-full p-3 rounded-[5.97px] text-white font-bold text-2xl mt-3"
          >
            Avaliar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisplayAlert;

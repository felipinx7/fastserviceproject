import Image from "next/image";
import { FundoSectionHero } from "@/assets";
import Header from "../components/header";

const Hero = () => {
  return (
    <section className="w-full  h-[100vh]">
      <Header />
      <Image
        src={FundoSectionHero}
        alt="ImagemFundo"
        className="absolute z-0 w-full h-screen max-md:hidden"
      />
      <div className="max-w-[1280px] m-0 m-auto w-full h-screen flex p-4 max-lg:p-4 max-lg:break-words items-center justify-center">
        <div className="w-[100%] flex flex-col gap-2 z-1 max-md:items-left justify-center">
          <p className="font-[500] text-[1.5rem]">@fast-servicee</p>
          <h1 className="text-[#fba900] w-[50%] max-md:w-full font-bold max-md:text-[2.5rem] text-6xl">
            Seu atendimento Otimizado e simplificado.
          </h1>
          <h3 className="font-[500] max-md:w-full text-[1.5rem] w-[40%]">
            Gerencie seu estabelecimento com facilidade e um único clique!
          </h3>
          <button className="w-[30%] cursor-pointer max-md:w-auto mt-6 px-1 py-1 text-white font-bold text-[2rem] rounded-br-[15px] rounded-tl-[15px] bg-[#fba900]">
            Gerenciar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

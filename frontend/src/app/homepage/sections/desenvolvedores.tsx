import { FotoFelipe, FotoVitoria } from "@/assets";
import Image from "next/image";

const Desenvolvedores = () => {
  return (
    <section className="flex flex-col px-8 max-lg:px-4 w-full min-h-[90vh] py-20 h-[100%] ">
      <div className="max-w-[1280px] w-[100%] mx-auto flex items-center flex-col justify-center">
        <div className="flex w-full items-baseline gap-9 justify-between max-lg:flex-col">
          <div className="flex flex-col items-baseline justify-center w-[50%] max-lg:w-full mt-16 ">
            <span className="text-[#fba900] text-4xl max-lg:text-3xl font-bold">
              Sobre a Fast-Service
            </span>
            <h1 className="text-[#333] w-full break-words text-6xl max-lg:text-[3rem] font-bold">
              Confiança e <br className="max-lg:hidden" /> Credibilidade.
            </h1>
          </div>
          <div className="w-[50%] max-lg:w-full">
            <p className="text-[#555] text-[1.39rem] max-lg:text-[1.2rem]">
              Apresentamos nossa equipe de desenvolvedores. Juntos estamos
              comprometidos em entregar um sistema robusto e eficiente. Que
              atenda às necessidades de nossos usuários e supere suas
              expectativas.
            </p>
          </div>
        </div>
        <div className="flex w-full max-sm:flex-col items-center gap-10 justify-center">
          <Image src={FotoFelipe}  width={250} height={100} className="rounded-3xl mt-10 max-sm:w-[320px]" alt="Foto dos desenvolvedores"/>
          <Image src={FotoVitoria} width={250} height={100} className="rounded-3xl mt-10 max-sm:w-[320px]"  alt="Foto dos desenvolvedores"/>
        </div>
      </div>
    </section>
  );
};

export default Desenvolvedores;

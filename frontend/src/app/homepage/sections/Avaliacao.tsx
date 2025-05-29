import { infoCardsAssessment } from "@/constants/info-cards-assessment";
import { Assesesment } from "../components/CardAssessment";

const Avaliacao = () => {
  return (
    <section className="bg-[#F5F5DC] w-full py-20 px-4 auto">
      <div className="max-w-[1280px] w-[100%] mx-auto h-auto flex flex-col items-center justify-between gap-20">
        <div className="">
          <h1 className="text-7xl max-lg:text-5xl max-lg:leading-12 max-lg:text-center text-center font-bold text-[#555] leading-20">
            Sistema com <br />{" "}
            <span className="text-[#fba900] ">avalição </span>dos clientes
          </h1>
        </div>
        <div className="w-[100%] grid grid-cols-3 place-items-center max-md:gap-20 max-lg:grid-cols-2 max-md:grid-cols-1 items-center justify-between">
          {infoCardsAssessment.map((card, index) => (
            <Assesesment.root key={index}>
              <Assesesment.photo />
              <Assesesment.name name={card.name} /> 
              <Assesesment.coment coment={card.comentars} />
              <Assesesment.star />
            </Assesesment.root>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avaliacao;

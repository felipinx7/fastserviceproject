import { Functionality } from "../components/CardFunctionality";
import { InfoCardFuncionalidade } from "@/constants/info-cards-fucionalidades";

const Funcioanalidade = () => {
  return (
    <section className="max-w-[1280px] py-20 w-full mx-auto px-8 gap-6  min-h-[60vh] grid grid-cols-3 max-lg:grid-cols-2 place-items-center justify-center max-md:grid-cols-1 max-md:gap-20 ">
      {InfoCardFuncionalidade.map((card, index) => (
        <Functionality.Card key={index}>
          <Functionality.Icon icon={card.icon} />
          <Functionality.tittle title={card.tittle} />
          <Functionality.description Description={card.description} />
        </Functionality.Card>
      ))}
    </section>
  );
};

export default Funcioanalidade;

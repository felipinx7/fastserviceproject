import Avaliacao from "./sections/Avaliacao";
import Desenvolvedores from "./sections/desenvolvedores";
import Footer from "./sections/footer";
import Funcioanalidade from "./sections/Funcioanalidade";
import Hero from "./sections/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Funcioanalidade />
      <Avaliacao />
      <Desenvolvedores />
      <Footer />
    </>
  );
};

export default HomePage;

import CardAvaliation from "../components/CardAvaliation";

const Avaliacao = () => {
  return (
    <div className="bg-[#EAEAEA] w-[100%] p-6 h-[92vh] max-md:h-[100vh] rounded-2xl shadow-2xl flex flex-col">
      <div>
        <h1 className="text-[#646464] font-bold text-5xl">Avalição</h1>
        <p className="text-3xl text-black">dos Clientes</p>
      </div>
      <div className="overflow-y-auto h-[80vh] p-6 mt-3 bg-white rounded-2xl grid gap-3 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
      <CardAvaliation/>
      </div>
    </div>
  );
};

export default Avaliacao;

import CardRemover from "../components/CardRemover";

const Excluir = () => {
    return ( 
        <div className="bg-white w-[100%] p-6 h-[92vh] max-md:h-[100vh] rounded-2xl shadow-2xl flex flex-col">
            <h1 className="font-bold text-4xl">Pratos Cadastrados</h1>
            <div className="overflow-y-auto h-[90vh] mt-2 ">
                <CardRemover/>
            </div>
        </div>
     );
}
 
export default Excluir;
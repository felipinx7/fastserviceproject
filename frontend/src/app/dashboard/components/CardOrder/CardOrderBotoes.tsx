interface BotoesProps {
  handlePrevStatus: () => void;
  handleRemoveProduct: () => void;
}

const Botoes = ({ handlePrevStatus, handleRemoveProduct }: BotoesProps) => {
  return (
    <div className="flex items-center max-md:flex-col justify-center gap-3">
      <button
        onClick={handlePrevStatus}
        className="bg-[#9FDB6A] hover:bg-[#749c52] duration-[0.5s] ease-in-out transition-all p-1 w-[10rem] rounded-2xl cursor-pointer font-[500] text-white"
      >
        Aceitar
      </button>
      <button
        onClick={handleRemoveProduct}
        className="bg-[#A1A1A1] hover:bg-[#8a8787] duration-[0.5s] ease-in-out transition-all p-1  w-[10rem] rounded-2xl cursor-pointer font-[500] text-white"
      >
        Remover
      </button>
    </div>
  );
};

export default Botoes;

interface NumberMesaProps {
  numberMesa: number;
}

const NumberMesa = ({ numberMesa }: NumberMesaProps) => {
  return (
    <p className="text-[#484848] font-[600] text-[1.1rem]">
      Mesa: {numberMesa}
    </p>
  );
};

export default NumberMesa;

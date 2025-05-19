interface QuantifyProps{
    quantify: number
}

const Quantify = ({quantify}: QuantifyProps) => {
    return ( 
        <p className="text-[#484848] font-[600] text-[1.1rem]">Quantidade: {quantify}</p>
     );
}
 
export default Quantify;
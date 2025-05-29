interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return <h1 className="font-[600] text-[1.1rem]">R${price}</h1>;
};

export default Price;

interface PaymentProps {
  Payment: string;
}

const Payment = ({ Payment }: PaymentProps) => {
  return <h1 className="font-[600] w-full text-[1.2rem]">Método de Pagamento: {Payment}</h1>;
};

export default Payment;

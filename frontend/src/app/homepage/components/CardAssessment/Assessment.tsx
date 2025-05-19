interface avaliacaoProps {
  coment: string;
}

const avaliacao = ({ coment }: avaliacaoProps) => {
  return <p className="text-[500] text-[1.2rem] text-left">{coment}</p>;
};

export default avaliacao;

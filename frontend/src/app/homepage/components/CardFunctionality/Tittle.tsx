interface TittleProps {
  title: string;
}

const Tittle = ({ title }: TittleProps) => {
  return (
    <h1 className="font-bold text-2xl text-center">
      {title}
    </h1>
  );
};

export default Tittle;

interface NameProps {
  name: string;
}

const Name = ({ name }: NameProps) => {
  return <h1 className="font-[600] text-[1.6rem]">{name}</h1>;
};

export default Name;

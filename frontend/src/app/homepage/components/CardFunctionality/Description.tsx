interface DescriptionProps {
  Description: string;
}

const Description = ({ Description }: DescriptionProps) => {
  return (
    <h1 className="text-center text-[1.1rem] max-md:text-left">
     {Description}
    </h1>
  );
};

export default Description;

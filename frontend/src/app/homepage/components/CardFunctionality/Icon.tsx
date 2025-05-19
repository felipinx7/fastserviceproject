import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
}

const Icon = ({ icon: IconComponent }: IconProps) => {
  return (
    <h2 className="text-[3.2rem]">
      <IconComponent />
    </h2>
  );
};

export default Icon;

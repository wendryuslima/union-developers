import { Button } from "./ui/button";

interface ButtonPersonalizedProps {
  text: string;
  onClick?: () => void;
}

const ButtonPersonalized = ({ text }: ButtonPersonalizedProps) => {
  return (
    <Button className="rounded-lg bg-gradient-to-r from-purple-800 to-blue-600 px-7 py-7 text-xl font-bold text-white">
      {text}
    </Button>
  );
};

export default ButtonPersonalized;

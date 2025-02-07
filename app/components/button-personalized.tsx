import { Button } from "./ui/button";

interface ButtonPersonalizedProps {
  text: string;
}

const ButtonPersonalized = ({ text }: ButtonPersonalizedProps) => {
  return (
    <Button className="rounded-lg bg-gradient-to-r from-purple-700 to-blue-600 px-8 py-8 text-2xl font-bold text-white">
      {text}
    </Button>
  );
};

export default ButtonPersonalized;

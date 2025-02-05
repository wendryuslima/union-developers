import { Button } from "./ui/button";

const Main = () => {
  return (
    <div
      className="flex flex-col w-full h-[400px] bg-cover p-[5.6rem_1.6rem_1.2rem]"
      style={{
        backgroundImage:
          "url('https://media.graphassets.com/j1rOxE97RsCbeyFrMU4z')",
      }}
    >
      <div className="items-left w-[300px] flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-white">
          Ganhe{" "}
          <span className="font-semibold text-transparent bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text">
            experiência{" "}
          </span>{" "}
          como desenvolvedor júnior
        </h2>
        <p>
          Descubra como o Union oferece um ambiente prático e imersivo para
          desenvolvedores juniors ganharem experiência de mercado, mesmo sem
          estar em uma empresa. Participe dessa experiência única e impulsione
          sua carreira como desenvolvedor!
        </p>
        <Button className="bg-gradient-to-r from-purple-700 text-2xl to-blue-600 text-white font-bold py-8 px-8 rounded-lg">
          Quero participar
        </Button>
      </div>
    </div>
  );
};

export default Main;

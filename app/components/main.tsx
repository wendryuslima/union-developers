import ButtonPersonalized from "./button-personalized";

const Main = () => {
  return (
    <div
      className="flex h-[400px] w-full flex-col bg-cover p-[5.6rem_1.6rem_1.2rem]"
      style={{
        backgroundImage:
          "url('https://media.graphassets.com/j1rOxE97RsCbeyFrMU4z')",
      }}
    >
      <div className="items-left flex w-[300px] flex-col gap-4">
        <h2 className="text-2xl font-bold text-white">
          Ganhe{" "}
          <span className="bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text font-semibold text-transparent">
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
        <ButtonPersonalized text="Quero participar" />
      </div>
    </div>
  );
};

export default Main;

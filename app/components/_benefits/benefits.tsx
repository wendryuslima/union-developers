import BenefitsItem from "./benefits-item";

const Benefits = () => {
  return (
    <div className="justif mx-auto mt-12 flex w-[450px] flex-col items-center gap-6 space-y-4 rounded-lg bg-gradient-to-br p-6 px-4 lg:w-[1200px]">
      <div
        id="benefícios"
        className="relative flex w-full max-w-md items-center justify-center lg:max-w-5xl"
      >
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent lg:w-5/12"></div>
        <h2 className="mt-14 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
          Benefícios
        </h2>
        <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent lg:w-5/12"></div>
      </div>

      <div className="m-auto mt-5 flex justify-center p-4 lg:items-center lg:text-center">
        <h1 className="mt-4 px-4 text-center text-base lg:w-[950px] lg:px-12 lg:text-xl lg:leading-relaxed">
          Conheça os benefícios incríveis que o Union proporciona para seus
          membros!
        </h1>
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 lg:max-w-5xl lg:flex-row lg:justify-between">
        <BenefitsItem />
      </div>
    </div>
  );
};

export default Benefits;

import BenefitsItem from "./benefits-item";

const Benefits = () => {
  return (
    <>
      <div className="relative m-auto flex w-full max-w-md items-center justify-center">
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent"></div>
        <h2 className="mt-12 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent">
          Beneficios
        </h2>
        <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent"></div>
      </div>

      <div className="m-auto mt-5 flex justify-center p-4">
        <h1 className="max-w-[350px] justify-center text-center">
          Conheça os benefícios incríveis que o Union proporciona para seus
          membros!
        </h1>
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-6">
        <div className="w-fit">
          <BenefitsItem />
        </div>
      </div>
    </>
  );
};

export default Benefits;

import StepsItems from "./steps-items";

const Steps = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative m-auto flex w-full max-w-md items-center justify-center">
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent"></div>
        <h2 className="mt-12 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent">
          Etapas
        </h2>
        <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent"></div>
      </div>

      <div className="mt-4">
        <h2 className="font-bold">
          Conheça as etapas do nosso processo seletivo
        </h2>
      </div>

      <div className="mt-4 flex flex-col gap-8 md:grid-cols-2 md:place-items-center">
        <StepsItems
          number="1"
          title="Pré-inscrição"
          description="Inicie a sua inscrição preenchendo o nosso formulário"
        />

        <div className="items-right ml-10 max-w-5 text-center">
          <StepsItems
            number="2"
            title="Análise de formulário"
            description="O nosso time irá analisar suas informações"
          />
        </div>

        <div className="items-center justify-center text-center">
          <StepsItems
            number="3"
            title="Desafio técnico"
            description="Após a análise você receberá um desafio prático"
          />
        </div>

        <div className="items-right ml-10 max-w-5 text-center">
          <StepsItems
            number="4"
            title="Entrevista"
            description="Nessa fase iremos bater um papo para que possamos conhecer melhor você"
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;

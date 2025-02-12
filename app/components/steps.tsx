import StepsItems from "./_steps/steps-items";

const Steps = () => {
  return (
    <div
      id="etapas"
      className="mt-12 flex max-w-4xl flex-col items-center justify-center gap-6 space-y-4 rounded-lg bg-gradient-to-br p-6 px-4 lg:w-[1200px]"
    >
      <div className="relative flex w-full max-w-md items-center justify-center lg:max-w-5xl">
        <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent lg:w-5/12"></div>
        <h2 className="mt-14 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
          Etapas
        </h2>
        <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent lg:w-5/12"></div>
      </div>

      <div className="mt-5 flex w-full justify-center p-4 lg:items-center lg:text-center">
        <h1 className="mt-4 px-4 text-center text-base lg:w-[950px] lg:px-12 lg:text-xl lg:leading-relaxed">
          Conheça as etapas do nosso processo seletivo
        </h1>
      </div>

      <div className="mt-4 flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:gap-16">
        <StepsItems
          number="1"
          title="Pré-inscrição"
          description="Inicie a sua inscrição preenchendo o nosso formulário"
        />

        <StepsItems
          number="2"
          title="Análise de formulário"
          description="O nosso time irá analisar suas informações"
        />

        <StepsItems
          number="3"
          title="Desafio técnico"
          description="Após a análise você receberá um desafio prático"
        />

        <StepsItems
          number="4"
          title="Entrevista"
          description="Nessa fase iremos bater um papo para que possamos conhecer melhor você"
        />
      </div>
    </div>
  );
};

export default Steps;

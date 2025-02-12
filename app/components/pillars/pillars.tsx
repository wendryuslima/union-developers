import PillarsCard from "./pillars-card";

const Pillars = () => {
  return (
    <div
      id="pilares"
      className="w-50 mx-auto mt-12 flex flex-col items-center justify-center gap-4 space-y-4 p-6 px-4 lg:w-[1200px]"
    >
      <div className="relative mt-12 flex flex-col items-center text-center lg:mt-16">
        <div className="relative flex w-full max-w-md items-center justify-center lg:max-w-5xl">
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent lg:w-5/12"></div>
          <h2 className="mt-14 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent lg:text-4xl">
            Pilares
          </h2>
          <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent lg:w-5/12"></div>
        </div>

        <p className="mt-4 px-4 text-base lg:w-[950px] lg:px-12 lg:text-xl lg:leading-relaxed">
          Os pilares que sustentam o formato inovador de aprendizagem do Union é
          a junção de incríveis metodologias!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-4">
        <PillarsCard
          title="Ativa"
          description="Metodologia ativa é uma abordagem educacional que coloca o aluno como protagonista, onde ele é o responsável por ir atrás dos conhecimentos necessários, ficando o professor como um mentor, que vai mostrar o caminho para que ele possa ter sucesso no aprendizado."
        />

        <PillarsCard
          title="Andragogia"
          description="É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz, a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem."
        />

        <PillarsCard
          title="Ágil"
          description="A metodologia ágil é uma metodologia que estimula a colaboração entre o time, permitindo que tenha uma visão mais transparente, liberdade para fazer escolhas e tomar decisões, buscando a melhora continua entre os membros, os processos e a qualidade geral do trabalho."
        />
      </div>
    </div>
  );
};

export default Pillars;

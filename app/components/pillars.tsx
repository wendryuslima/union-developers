import PillarsCard from "./pillars-card";

const Pillars = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <PillarsCard
        title="Andragogia"
        description="É uma metodologia de ensino para adultos, que tem mais liberdade e colaboração, permitindo que o aluno decida quando, como e o que estudar, tornando o processo de aprendizagem mais sólido e eficaz, a andragogia valoriza a autonomia e a experiência dos adultos como base para a aprendizagem."
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
  );
};

export default Pillars;

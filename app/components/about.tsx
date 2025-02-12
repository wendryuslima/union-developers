const About = () => {
  return (
    <div
      id="sobre"
      className="w-50 mx-auto mt-12 flex flex-col items-center gap-6 space-y-4 rounded-lg bg-gradient-to-br p-6 px-4 lg:w-[650px]"
    >
      <div className="relative z-20 rounded-xl border-2 border-b-blue-600 border-l-blue-800 border-r-purple-800 border-t-purple-600 p-6 text-white lg:max-h-[350px] lg:w-[800px] lg:px-4">
        <h2 className="absolute -top-6 left-6 z-20 bg-[#1F1D2B] px-4 text-lg font-semibold text-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] lg:text-3xl">
          Quem somos?
        </h2>
        <p className="mt-6 text-center text-base lg:text-lg lg:leading-relaxed">
          O Union é uma oportunidade única para desenvolvedores juniors, nossa
          missão é proporcionar a você um ambiente prático e imersivo,
          semelhante ao que você encontrará no mercado. Aqui, você vai vivenciar
          como é o dia a dia de um desenvolvedor de software, trabalhando lado a
          lado com líderes experientes e outros talentosos desenvolvedores que
          estão no mesmo caminho que você.
        </p>
        <p className="mt-6 text-center text-base lg:text-lg lg:leading-relaxed">
          No Union, você não apenas ganhará experiência, mas também estará
          pronto para enfrentar as demandas do mercado de tecnologia. Nossa
          abordagem holística enfatiza não apenas o conhecimento técnico, mas
          também habilidades interpessoais e práticas ágeis.
        </p>
      </div>
    </div>
  );
};

export default About;

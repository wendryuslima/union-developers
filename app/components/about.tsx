const About = () => {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-lg p-6">
      <div className="relative -z-20 rounded-xl border-2 border-purple-500 p-6 text-white">
        <h2 className="b absolute -top-5 left-4 z-20 bg-[#1F1D2B] text-clip-text px-3 text-lg font-semibold text-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)]">
          Quem somos?
        </h2>
        <p className="mt-4 text-center">
          O Union é uma oportunidade única para desenvolvedores juniors, nossa
          missão é proporcionar a você um ambiente prático e imersivo,
          semelhante ao que você encontrará no mercado. Aqui, você vai vivenciar
          como é o dia a dia de um desenvolvedor de software, trabalhando lado a
          lado com líderes experientes e outros talentosos desenvolvedores que
          estão no mesmo caminho que você.
        </p>
        <p className="mt-4 text-center">
          No Union, você não apenas ganhará experiência, mas também estará
          pronto para enfrentar as demandas do mercado de tecnologia. Nossa
          abordagem holística enfatiza não apenas o conhecimento técnico, mas
          também habilidades interpessoais e práticas.
        </p>
      </div>

      <div className="relative flex flex-col items-center text-center">
        <div className="relative flex w-full max-w-md items-center justify-center">
          <div className="absolute top-0 h-9 w-1 bg-gradient-to-b from-purple-700 to-blue-500"></div>
          <div className="h-0.5 w-1/3 bg-gradient-to-r from-purple-500 to-transparent"></div>
          <h2 className="mt-12 bg-[linear-gradient(225deg,_rgb(0,72,254)_0%,_rgb(133,29,134)_100%)] bg-clip-text text-2xl font-semibold text-transparent">
            Pilares
          </h2>
          <div className="h-0.5 w-1/3 bg-gradient-to-l from-blue-500 to-transparent"></div>
        </div>

        <p className="mt-3 max-w-md text-white">
          Os pilares que sustentam o formato inovador de aprendizagem do Union é
          a junção de incríveis metodologias!
        </p>
      </div>
    </div>
  );
};

export default About;

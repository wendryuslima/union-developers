import About from "./components/about";
import Benefits from "./components/_benefits/benefits";
import Depoiments from "./components/_depoiments/depoiments";
import Doubts from "./components/doubts";
import Header from "./components/header";
import Main from "./components/main";

import Steps from "./components/steps";
import Subscribes from "./components/subscribe";
import Team from "./components/_team/team";
import Pillars from "./components/pillars/pillars";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Pillars />
      <Benefits />
      <Steps />
      <Subscribes />
      <Depoiments />
      <Team />
      <Doubts />
    </div>
  );
};

export default Home;

import About from "./components/about";
import Benefits from "./components/benefits";
import Depoiments from "./components/depoiments";
import Header from "./components/header";
import Main from "./components/main";
import Pillars from "./components/pillars";
import Steps from "./components/steps";
import Subscribes from "./components/subscribe";
import Team from "./components/team";

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
    </div>
  );
};

export default Home;

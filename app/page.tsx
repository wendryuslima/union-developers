import About from "./components/about";
import Benefits from "./components/benefits";
import Header from "./components/header";
import Main from "./components/main";
import Pillars from "./components/pillars";
import Steps from "./components/steps";
import Subscribes from "./components/subscribe";

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
    </div>
  );
};

export default Home;

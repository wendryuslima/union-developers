import About from "./components/about";
import Benefits from "./components/benefits";
import Header from "./components/header";
import Main from "./components/main";
import Pillars from "./components/pillars";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Pillars />
      <Benefits />
    </div>
  );
};

export default Home;

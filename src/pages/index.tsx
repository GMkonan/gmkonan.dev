import type { NextPage } from "next";
import Hero from "../components/Hero";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Hero />
      {/*<Projects />*/}
    </>
  );
};

export default Home;


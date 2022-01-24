import type { NextPage } from "next";
import Hero from "@components/Hero";
import Main from "@components/Main";

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <Hero />
      {/*<Projects />*/}
    </>
  );
};

export default Home;


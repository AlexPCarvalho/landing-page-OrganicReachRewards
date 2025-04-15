'use client'

import Cards from "../_components/cards";
import Content from "../_components/content";
import Dashboard from "../_components/chart";

import FaqItems from "../_components/faq";
import Footer from "../_components/footer";
import Navbar from "../_components/navbar";
import Plans from "../_components/plans";
import Steps from "../_components/steps";
import Title from "../_components/title";

const Home = () => {
  return (
    <>
      <Navbar />
      <Title />
      <Steps />
      <Content />
      <Dashboard />
      <Cards />
      <FaqItems />
      <Plans />
      <Footer />
    </>
  );
};

export default Home;

"use client";

import Footer from "../_components/footer";
import Navbar from "../_components/navbar";
import Content from "./_components/content";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Home;

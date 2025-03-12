import Content from "../_components/content";

import FaqItems from "../_components/faq";
import Footer from "../_components/footer";
import Navbar from "../_components/navbar";
import Plans from "../_components/plans";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Content />
        <FaqItems />
        <Plans />
      </div>
      <Footer />
    </>
  );
};

export default Home;

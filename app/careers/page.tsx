import Footer from "../_components/footer";
import Navbar from "../_components/navbar";
import Content from "./_components/content";
import Interviews from "./_components/interviews";
import Main from "./_components/main";
import Offer from "./_components/offer";
import Other from "./_components/other";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Content />
        <Offer />
        <Main />
        <Interviews />
        <Other />
      </div>
      <Footer />
    </>
  );
};

export default Home;

import Footer from "../components/Footer";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <div className="font-poppins flex flex-col  h-[calc(100vh-64px)] justify-between">
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;

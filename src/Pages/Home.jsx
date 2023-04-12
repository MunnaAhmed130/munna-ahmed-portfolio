import Footer from "../components/Footer";
import Intro from "../components/Intro";
import StarCanvas from "../components/canvas/StarCanvas";

const Home = () => {
  return (
    <div className="font-poppins relative z-0 bg-[#222222]">
      <Intro />
      <StarCanvas />
    </div>
  );
};

export default Home;

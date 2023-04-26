import Footer from "../components/Footer";
import Intro from "../components/Intro";
import { styles } from "../styles";

const Home = () => {
  return (
    <div
      className={` relative  font-poppins  flex flex-col overflow-hidden  ${styles.pageHeight} `}
    >
      <Intro />
      <Footer />
      <div
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')] w-full h-auto z-[-1] bg-no-repeat sm:bg-cover  lg:bg-[center_left_200px]  sm:bg-[top_10px_center] lg:scale-100 sm:scale-110 scale-150 bg-contain bg-[center_top_45%] lg:opacity-100 opacity-60 transition-all duration-300 `}
      />
    </div>
  );
};

export default Home;

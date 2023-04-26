import Footer from "../components/Footer";
import Intro from "../components/Intro";
import { styles } from "../styles";
// sm:bg-cover
const Home = () => {
  return (
    <div
      className={`relative font-poppins flex flex-col overflow-hidden ${styles.pageHeight} `}
    >
      <Intro />
      <Footer />
      <div
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')] w-full h-auto z-[-1] bg-no-repeat 2xl:bg-[center_left_300px] xl:bg-[center_left_200px]  lg:bg-[center_left_150px]  sm:bg-[left_100px_center] xl:scale-125 lg:scale-150 sm:scale-150 scale-[2] sm:bg-cover bg-contain bg-[center_top_50%] sm:opacity-100 opacity-60 transition-all duration-300 `}
      />
    </div>
  );
};

export default Home;

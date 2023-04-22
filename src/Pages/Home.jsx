import Footer from "../components/Footer";
import Intro from "../components/Intro";
import { styles } from "../styles";

const Home = () => {
  return (
    <div
      className={`font-poppins flex flex-col relative  ${styles.pageHeight} `}
    >
      <Intro />
      <div
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')] xl:w-3/4 w-full  h-auto z-[-2] bg-no-repeat lg:bg-left  bg-center ml-auto  lg:opacity-100 opacity-40  md:inline-block transition-all duration-300 `}
      />
      <Footer />
    </div>
  );
};

export default Home;

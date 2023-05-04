import Footer from "../components/shared/Footer";
import Intro from "../components/intro/Intro";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    hidden: { x: "70vw" },
    visible: {
      x: 1,
      // transition: { type: "spring" },
    },
  };
  return (
    <div
      className={`relative font-poppins flex flex-col overflow-hidden ${styles.pageHeight} `}
    >
      <Intro />
      <Footer />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className={`absolute inset-0 bg-[url('https://i.ibb.co/pnXwFgR/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.jpg')] w-full h-auto z-[-1] bg-no-repeat 2xl:bg-[center_left_400px] xl:bg-[center_left_250px]  lg:bg-[center_left_150px]  sm:bg-[left_100px_center] 2xl:scale-100 xl:scale-110 lg:scale-125 sm:scale-125 scale-[2] sm:bg-cover bg-contain bg-[center_top_50%] sm:opacity-100 opacity-60 transition-all duration-300 `}
      />
      {/* </Suspense> */}
    </div>
  );
};

export default Home;

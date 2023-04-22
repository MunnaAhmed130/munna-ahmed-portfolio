import Footer from "../components/Footer";
import Intro from "../components/Intro";
import { styles } from "../styles";

const Home = () => {
  return (
    <div className={`font-poppins flex flex-col   ${styles.pageHeight} `}>
      <Intro />
      <Footer />
    </div>
  );
};

export default Home;

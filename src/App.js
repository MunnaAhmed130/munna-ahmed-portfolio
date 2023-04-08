import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Details from "./Components/Details/Details";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Header />
      {/* <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/details/:_id" element={<Details />} />
                    <Route path="/aboutMe" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
};

export default App;

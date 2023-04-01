import React from "react";
import Contact from "../../Components/Contact/Contact";
import Footer2 from "../../Components/Footer2/Footer2";
import Intro from "../../Components/Intro/Intro";
import Projects from "../../Components/Projects/Projects";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Intro />
            <Projects />
        </div>
    );
};

export default Home;

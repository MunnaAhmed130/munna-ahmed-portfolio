import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Intro />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
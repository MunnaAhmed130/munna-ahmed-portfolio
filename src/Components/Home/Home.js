import React from 'react';
import Contact from '../Contact/Contact';
import Footer2 from '../Footer2/Footer2';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Intro />
            <Projects />
        </div>
    );
};

export default Home;
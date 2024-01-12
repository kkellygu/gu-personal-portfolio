import AboutCard from './AboutCard';
import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';
import Gallery from  './Gallery';
import Footer from './Footer';
import React, { useState } from 'react';


function App() {
    const[onClick,setOnClick]=useState(false);
    return (
        <div className="App">
            <Navbar onClick={onClick} setOnClick={setOnClick}></Navbar>
            <header id='home' className="App-header">

                <div> Kelly Gu </div>
                <div className='Tagline'> student | computer scientist | leader | artist </div>
                <div className ="social-icons">
                <a href="https://github.com/kkellygu" target="_blank" rel="noopener noreferrer" className='github'>
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/kellygu3610/" target="_blank" rel="noopener noreferrer" className='linkedin'>
                    <i className="fab fa-linkedin"></i>
                </a>
                </div>
            </header>

            <div id='about' className="About">
                <div>
                    <h1>About Me</h1>
                </div>
                <AboutCard></AboutCard>
            </div>
            <div id="projects" className="Projects">
                <div>
                    <h1>Recent Projects</h1>
                </div>
                <Projects></Projects>
            </div>
            <div id="gallery" className="Gallery">
                <div>
                    <h1>Gallery</h1>
                </div>
                <Gallery></Gallery>
            </div>
            <div id="contact" className="Contact"></div>
            <Footer></Footer>
        </div>
    );

}

export default App;

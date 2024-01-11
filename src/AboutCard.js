import './AboutCard.css';
// import Footer from './Footer'
// import Navbar from './Navbar';
import React from 'react';
import headshot from './assets/kgheadshot.PNG'

import resume from '/Users/kellygu/Desktop/gu-personal-portfolio/src/assets/KellyGuResumePortfolio.pdf'



function AboutCard({content}) {

        return (
            <div className="AboutCard">
                <div className="row">
                    <div className="column text-column">
                        <div className="About-content"><p>
                            Hey there! Welcome to my personal portfolio. My name is
                            Kelly Gu, and I am an undergraduate student
                            at the University of Virginia, majoring in computer
                            science with a double minor in data science and general
                            business." </p>
                            <p>
                                I am currently seeking for the next opportunity to apply my skills,
                                whether it be in research, interning, or working. I am interested in positions
                                for SWE, project and product management. However, I am open
                                to any experience that will enable me to learn and develop both
                                my personal and professional skills to help achieve my goals.</p>
                            <p> In my free time, I enjoy hanging out with friends and family,
                                playing the Guzheng, dancing, exploring a wide variety of shows/movies,
                                listening to music, cultivating my creativity skills, baking, and
                                saying yes to new experiences!</p>
                            <p>  Thank you so much for taking the time to check out my portfolio.
                                For a more detailed look into my experience and skills, feel free to
                                check out my resume. Please do not hesitate to reach out to me anytime if
                                you would like to chat!</p>
                        </div>
                        <a href={resume} download className='resumeButton'>
                            <span>resume</span>
                        </a>
                    </div>
                    <div className="column image-column">
                        <img src={headshot} alt="kg photo" className="About-image"/>
                    </div>
                </div>
            </div>
        );


}

export default AboutCard;

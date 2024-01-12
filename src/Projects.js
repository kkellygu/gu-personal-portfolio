import './Projects.css';
import { useState } from "react";
import React from "react";
import arrow from './assets/image.png'
import portfoliopic from './assets/portfoliopic.PNG'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Projects(){
    const [currentSlide, setCurrentSlide] = useState(0)
    const data =[
        {
            id:"1",
            title:"Personal Portfolio",
            desc:"An independently developed personal portfolio web application. Built with React, CSS, and JavaScript, this dynamic and visually captivating interface features content from various aspects of my life. With a primary focus on my computer science journey, explore the different dimensions of my life's experiences.",
            link: "https://github.com/kkellygu/gu-personal-portfolio",
            img: portfoliopic,
        },
        /*{
            id:"2",
            icon:appIcon,
            title:"BeProductive",
            desc:"An app that will make you want to be productive... COMING SOON",
            img: appIcon,
        },*/
        {
            id:"2",
            title:"Coming Soon...",
            desc:"",
        },
        {
            id:"3",
            title:"Coming Soon...",
            desc:"",
        }

    ];

    const handleClick = (way) => {
        if (way === "left") {
            setCurrentSlide((currentSlide - 1 + data.length) % data.length);
        } else {
            setCurrentSlide((currentSlide + 1) % data.length);
        }
    };
    return(
        <div className="Projects" id="Projects">
            <div
                className="slider"
                style={{ transform: `translateX(-${(currentSlide)  * (100 / data.length)}%)` }}
            >
                {data.map((d) => (
                    <div className="portContainer">
                        <div className="items">
                            <div className="leftTwo">
                                <div className="leftContainer">
                                    <div className="imgContainer2">
                                        {/*<img src={d.icon} alt=""/>*/}
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    {d.link && <a href={d.link} target="_blank" rel="noopener noreferrer" className='githubButton'>
                                        <i className="fab fa-github"></i> <span>repo</span>
                                    </a>}
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                            </div>
                        </div>

                    </div>))}
            </div>
            <img src={arrow} className="arrow left" alt="" onClick={() => handleClick("left")}/>
            <img src={arrow} className="arrow right" alt="" onClick={() => handleClick()}/>
        </div>
    )
}
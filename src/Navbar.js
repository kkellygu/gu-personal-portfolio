import './Navbar.css';
import logo3 from "./assets/logo3.PNG";
import React from 'react';

function Navbar({ onClick, setOnClick }) {
    const scrollTo = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth',
            });
        }
        setOnClick(!onClick); // Toggle the state to close the menu (if it's open)
    };

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-10vh";
        }
    }

    return (
        <div id="navbar" className="Navbar">
            <div className="Tabs">
                <div className="Logo" onClick={() => scrollTo('home')}>
                    <img src={logo3} alt="logo" />
                </div>
                <div className="Tab" onClick={() => scrollTo('about')}>
                    About
                </div>
                <div className="Tab" onClick={() => scrollTo('projects')}>
                    Projects
                </div>
                <div className="Tab" onClick={() => scrollTo('gallery')}>
                    Gallery
                </div>
                <div className="Tab" onClick={() => scrollTo('contact')}>
                    Contact
                </div>
            </div>
        </div>
    );
}

export default Navbar;
import './Navbar.css';
import logo3 from "./assets/logo3.PNG";

function Navbar() {
  window.onscroll = function() {scrollFunction()};
  return (
    <div id="navbar" className="Navbar">
      <div className="Logo"> <img src={logo3} alt="logo" height={60} width={80}/></div>
    </div>
  );
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    }
    else {
        document.getElementById("navbar").style.top = "-10vh";
    }
}

export default Navbar;
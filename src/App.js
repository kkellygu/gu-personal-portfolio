import AboutCard from './AboutCard';
import './App.css';
//import Footer from './Footer'
import Navbar from './Navbar';
import logo from './assets/logo3.PNG'
import headshot from './assets/kgheadshot.PNG'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <div className='Logo'>
            <img src={logo} alt="logo img" height={60} width={80}/>
        </div>
          <div class="Tabs">
              <div className="Tab">About</div>
              <div className="Tab">Projects</div>
              <div className="Tab">Contact</div>
          </div>
        <div> Kelly Gu </div>
        <div className='Tagline'> student | computer scientist | leader | artist </div>
      </header>
      <div className="About">
        <div>
          <h1>About Me</h1>
        </div>
        <AboutCard></AboutCard>
      </div>
      <div className="Projects"></div>
        <div className="Contact"></div>
    </div>
  );
  
}

export default App;

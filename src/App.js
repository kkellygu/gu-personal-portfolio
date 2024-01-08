import AboutCard from './AboutCard';
import './App.css';
//import Footer from './Footer'
import Navbar from './Navbar';
import logo from './assets/logo3.PNG'
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
        <AboutCard layout="left" content="We treat selling options as a market risk insurance policy. When someone sells an option, they are essentially agreeing to take on the risk of the underlying asset moving in a certain direction. In exchange for taking on this risk, the seller receives a premium from the buyer of the option. This is similar to an insurance contract." header="we are a market risk insurance firm"></AboutCard>
        <AboutCard layout="right" content="Over 20 years of experience in Mortgage-Backed Securities (MBS) guarantee, credit risk transfer through reinsurance, mortgage pipeline hedging, asset and liabilities management, and risk modeling for large financial institutions." header="built on extensive experience in financial insurance and reinsurance"></AboutCard>
        <AboutCard layout="left" content={["Other than transferring risk, risk exposures can be transformed and suppressed by processes that are:",<ul><li>Dynamically correcting as Puts and Calls have offsetting risk profiles</li><li>Numerically convergent by the law of large numbers</li></ul>, "By suppressing uncertainties, we can achieve risk neutrality and zeroing cost."]} header="we leverage alternative risk processes"></AboutCard>
        <AboutCard layout="right" content={["We can construct a large-scale profit engine by:",<ul><li>Selling options selectively to generate smart revenue in a trillion dollar market</li><li>Employing risk-suppressive processes</li><li>Harvesting the conservative profit target</li></ul>, "Thus managing risk better with the streamlined execution as a commodities trader."]} header="to generate sustainable profitability"></AboutCard>
      </div>
      <div className="Projects"></div>
        <div className="Contact"></div>
    </div>
  );
  
}

export default App;

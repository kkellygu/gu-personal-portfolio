import './AboutCard.css';
// import Footer from './Footer'
// import Navbar from './Navbar';

function AboutCard({layout,content,header}) {
    if (layout === "left") {
        return (
            <div className="AboutCard">
                <div className="row">
                        
                    <div className="column">
                        <div className="About-header">{header}</div>
                    </div>
                    <div className="column">
                        <div className="About-content">{content}</div>
                    </div>
                    
                </div>
            
            </div>
        );
    }
    else {
        return (
            <div className="AboutCard">
                <div className="row">
                    <div className="column">
                        <div className="About-content">{content}</div>
                    </div>
                    <div className="column">
                        <div className="About-header">{header}</div>
                    </div>
                        
                    
                </div>
            
            </div>
        );
    }
  
}

export default AboutCard;

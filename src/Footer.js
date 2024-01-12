import './Footer.css';

function Footer() {
  const web3FormsKey = process.env.REACT_APP_WEB3FORMS_KEY;

  return (
      <div className="Footer">
        <div className="row">
          <div className="column">
            <div className="Header">contact me!</div>
            <div className="contact">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value={web3FormsKey}/>
                <div className="inputContainer">
                  <input type = "text" name="name" placeholder="your name" required/>
                  <input type="text" name="email" placeholder="your email" required/>
                  <textarea name="message" placeholder="let's chat!" required/>
                </div>
                <button type="submit">send</button>
              </form>
            </div>
          </div>
        </div>



      </div>
  );
}

export default Footer;

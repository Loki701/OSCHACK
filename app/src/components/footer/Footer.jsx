import { logo } from "../../images";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="content">
          <div className="newsletter">
            {/* <h2 className="logo">Logo</h2> */}
            <img src={logo} className="logo" />
            <p>
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="actions">
              <form className="footer-form">
                <input type="email" placeholder="Enter your email " />
                <button>Subscribe</button>
              </form>
              <p>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
          </div>

          <ul className="links">
            <li className="link">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </li>
            <li className="link">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </li>
            <li className="link">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </li>
            <li className="link">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </li>
            <li className="link">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </li>
            <li className="link">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
        <div className="credits">
          <div className="row">
            <p>&copy; 2024 Dino Luzzi Energy Drink. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

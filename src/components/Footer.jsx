import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="social-media-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
        <div className="footer-links">
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

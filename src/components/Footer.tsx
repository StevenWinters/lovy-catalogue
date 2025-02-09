import { HashLink } from "react-router-hash-link";
import Logo from "../assets/LP-logo.png";

const Footer = () => {
  return (
    <footer className="block">
      <div className="container footer__container">
        <img src={Logo} className="footer__logo" alt="Lovy Logo" />
        <div className="footer__content">
          <h2 className="footer__header">Lovy Catalogue</h2>
          <div className="flex flex--column justify--between align--center footer__sections">
            <div className="footer__navigation">
              <h4>Menu</h4>
              <ul className="footer__lists">
                <li className="footer__list">
                  <HashLink smooth to="#popcorn-menu" className="footer__link">
                    Popcorn
                  </HashLink>
                  <HashLink smooth to="#drinks-menu" className="footer__link">
                    Drinks
                  </HashLink>
                </li>
              </ul>
            </div>
            <div className="footer__navigation">
              <span className="footer__message">
                Check out our other website!
              </span>
              <a
                className="footer__link message__link"
                href="https://lovy-lingua.vercel.app"
                target="_blank"
              >
                https://lovy-lingua.vercel.app
              </a>
            </div>
          </div>
        </div>
        <p className="footer__copyright">
          Copyright © 2025. Powered by the PWU ICT/HE/ABM Students.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

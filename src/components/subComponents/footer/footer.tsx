import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer container-small margin-center">
      <div className="contact">
        <div className="logo">
          <h1 className="logo__title">Zano</h1>
        </div>
        <span>Address: 184 Main Collins Street</span>
        <span>
          Phone: <a href="tel:+1619888999">(619) 888 999</a>
        </span>
        <span>
          Email: <a href="mailto:support@zano.com">support@zano.com</a>
        </span>
        <span>
          <a href="http://www.zano.someaddress.com">zano.someaddress.com</a>
        </span>
      </div>
      <div className="company">
        <h3 className="footer__title">Company</h3>
        <span>
          <Link to="/aboutUs">About Us</Link>
        </span>
        <span>
          <Link to="/offices">Offices</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <span>
          <Link to="/faqs">Help & FAQ</Link>
        </span>
      </div>
      <div className="links">
        <h3 className="footer__title">Useful Links</h3>
        <span>
          <a href="#">Privacy Protection</a>
        </span>
        <span>
          <a href="#">Safe Payments</a>
        </span>
        <span>
          <a href="#">Terms of Service</a>
        </span>
        <span>
          <a href="#">Privacy Policy</a>
        </span>
      </div>
      <div className="newslatter">
        <h3 className="footer__title">Newsletter</h3>
        <span>Stay Updated on all that's new add noteworthy</span>
        <form className="newslatter__form display-flex flex-space-between align-center">
          <input
            className="newslatter__input"
            type="text"
            placeholder="Email"
          />
          <button className="newslatter__btn">
            <img src="/image/footerIcon.svg" alt="" />
          </button>
        </form>
      </div>
      <div className="copyright">
        <span>
          Copyright © 2019 <strong>Zano</strong>. All rights reserved
        </span>
      </div>
      <div className="payment-logo display-flex">
        <img src="image/payment/Master.jpg" alt="master card" />
        <img src="image/payment/Visa.jpg" alt="visa card" />
        <img src="image/payment/Bank.jpg" alt="Bank" />
        <img src="image/payment/Discover.jpg" alt="Discover" />
        <img src="image/payment/Blue.jpg" alt="Blue" />
      </div>
    </footer>
  );
};

export default Footer;

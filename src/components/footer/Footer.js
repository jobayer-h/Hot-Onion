import React from "react";
import footerLogo from "../../images/logo-footer.png";
const Footer = () => {
  return (
    <section className="footer-bg">
      <div className="container">

        <div className="row py-5">
          <div className="col-md-6 col-sm-4 col-12">
            <div className="footer-logo">
              <img
                src={footerLogo}
                alt="Red Onion "
                className="img-fluid logo"
              />
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <ul className="footer-menu my-3">
              <li>About Online Food</li>
              <li>Read Our Blog</li>
              <li>Sign up to Deliver</li>
              <li>Add your restarunt</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <ul className="footer-menu my-3">
              <li>Get Help</li>
              <li>Read FAQs</li>
              <li>View all Cities</li>
              <li>Restarunts near me</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-3 coppyright">coppyright 2021 JH Rakib</div>
          <div className="col-md-2 col-sm-3 col-4">
            <ul className="footer-menu my-1">
              <li>Privicy Policy</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-3 col-4">
            <ul className="footer-menu my-1">
              <li>Term Of Use</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-3 col-4">
            <ul className="footer-menu my-1">
              <li>Pricing</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;

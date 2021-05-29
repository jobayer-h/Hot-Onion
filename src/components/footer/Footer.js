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
              <li>menu1</li>
              <li>menu2</li>
              <li>menu3</li>
              <li>menu4</li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-4 col-6">
            <ul className="footer-menu my-3">
              <li>menu5</li>
              <li>menu6</li>
              <li>menu7</li>
              <li>menu8</li>
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

import React from "react";

import logoBlue from "../../assets/img/asx_logo_blue.jpg";

import "./footer.scss";
const Footer = () => {
  return (
    <footer className="inner-page-footer">
      <div className="footer-container">
        <img className="footer-logo" src={logoBlue} alt="logo slogan" />
        <div className="footer-text">
          <span>Terms of use</span> | <span>Privacy Statement</span> |{" "}
          <span>Copyright ElastikChain Ltd 2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
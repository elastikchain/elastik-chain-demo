import React from "react";

import logoBlue from "../../assets/img/asx_logo_blue.jpg";
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
} from "ionicons/icons";
import "./footer.scss";
import { IonIcon } from "@ionic/react";
const Footer = () => {
  return (
    <footer className="inner-page-footer">
      <div className="footer-container">
        <img className="footer-logo" src={logoBlue} alt="logo slogan" />
        <div className="footer-text">
          <span>Terms of use</span> | <span>Privacy Statement</span> |{" "}
          <span>Copyright ElastikChain Ltd 2021</span>
        </div>
        <ul>
                      <li>
                        <a href="#top">
                          {" "}
                          <IonIcon icon={logoFacebook}></IonIcon>
                        </a>
                      </li>
                      <li>
                        <a href="#top">
                          {" "}
                          <IonIcon icon={logoTwitter}></IonIcon>
                        </a>
                      </li>
                      <li>
                        <a href="#top">
                          {" "}
                          <IonIcon icon={logoInstagram}></IonIcon>
                        </a>
                      </li>
                    </ul>
      </div>
    </footer>
  );
};

export default Footer;
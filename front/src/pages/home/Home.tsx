import React, { useState } from "react";
import styled from "styled-components";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonSlides,
  IonSlide,
  IonModal,
  IonLabel,
  IonInput,
  IonItem,
  IonIcon,
} from "@ionic/react";
import logo from "../../assets/img/logo-combination.png";
import logoBlue from "../../assets/img/asx_logo_blue.jpg";
import timelineLine from "../../assets/img/img-how-it-work-timeline.png";

import icWork1 from "../../assets/img/icon-idea.png";
import icWork2 from "../../assets/img/icon-product.png";
import icWork3 from "../../assets/img/icon-work.png";
import icWork4 from "../../assets/img/ic-work4.png";
import topBannerImage from "../../assets/img/img-top-section.png";

import "./Home.scss";
import { useUserDispatch, loginUser } from "../../context/UserContext";
import { RouteComponentProps } from "react-router-dom";
import { Fade, Typography } from "@material-ui/core";

import { close } from "ionicons/icons";
import loginImg from "../../assets/img/logo-slogan.jpg";
import Footer from "../../components/Footer/footer";

const StyledNewsletter = styled.div`
  margin: 4rem 0;
  background: #fff;
`;

const Newsletter = styled.div`
  margin: 0 auto;
  width: 60%;
  color: #fff;
  background: #0C3A6D;
  padding: 2rem 4rem;
  text-transform: uppercase;
  display: flex;
	align-items: center;
	justify-content: center;
`;

const NewsParent = styled.div`
  width: 100%;
`;
const workSteps = [
  {
    icon: icWork1,
    content: "You have an amazing idea and you made an MVP of it",
  },
  {
    icon: icWork2,
    content: "Now, you need sponsors to bring that into a full fledged product",
  },
  {
    icon: icWork3,
    content:
      "We give you the platform, and thousands of people will choose and vote for the ideas they love",
  },
  {
    icon: icWork4,
    content:
      "We have investors who would actually invest in the most amazing idea",
  },
];
const renderWorkSteps = () => {
  return workSteps.map((item, index) => (
    <div className="work-step">
      <img src={item.icon} alt="step" />
      <div className={"dot dot-" + (index + 1)}></div>
      <p>{item.content}</p>
    </div>
  ));
};
const categories = [
  "Fintech",
  "Healthcare",
  "Mobility",
  "Education",
  "Appliances",
];
const renderCatgoriesSlides = () => {
  const arr = categories.map((item: string, index: number) => (
    <IonSlide>
      <a className="category-item" href="#">
        <p>{item}</p>
      </a>
    </IonSlide>
    
  ));
  return arr;
};
const categoriesSlidesOptions = {
  width: 221,
  initialSlide: 0,
  loopedSlides: categories.length,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  pager:true,
  pagination:true,
  navigation: {
    prevEl: ".slider .prev-btn",
    nextEl: ".slider .next-btn",
  },
  spaceBetween: 8,
};
const Home = (props: RouteComponentProps) => {
  const [searchText, setSearchText] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginSegement, setLoginSegement] = useState("SIGN_IN");
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(false);
  var userDispatch = useUserDispatch();

  const handleLoginSubmit = (evt: any) => {
    evt.preventDefault();
    // console.log('handleLoginSubmit', evt);
    loginUser(
      userDispatch,
      loginUserName,
      loginPassword,
      props.history,
      setIsLoading,
      setError,
      false
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <div className="container-header">
            <div className="header">
              <div className="logo-img">
                <img className="app-logo" src={logo} alt="logo" />
              </div>
              <div className="search-form">
                <IonSearchbar
                  placeholder="Explore amazing ideas"
                  value={searchText}
                  onIonChange={(e) => setSearchText(e.detail.value!)}
                ></IonSearchbar>
              </div>
              <div className="header-menu">
                <IonButtons slot="end" className="toolbar-buttons-container">
                  <div className="toolbar-buttons">
                    <IonButton>Explore</IonButton>
                    <IonButton
                      className="activeButton"
                      onClick={() => setShowLoginModal(true)}
                    >
                      Log in
                    </IonButton>
                  </div>
                </IonButtons>
              </div>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonModal
          isOpen={showLoginModal}
          onDidDismiss={() => setShowLoginModal(false)}
          cssClass="my-custom-class"
        >
          <div className="content login-modal-content">
            <Fade in={error}>
              <Typography color="secondary" className="error-message">
                Something is wrong with your login or password :(
              </Typography>
            </Fade>
            <img className="logo-slogan" src={loginImg} alt="logo slogan" />
            {loginSegement === "SIGN_IN" ? (
              <div className="sign-in">
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <IonItem>
                    <IonLabel position="floating">Login</IonLabel>
                    <IonInput
                      value={loginUserName}
                      onIonChange={(e) => setLoginUserName(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel position="floating">Password</IonLabel>
                    <IonInput
                      type="password"
                      value={loginPassword}
                      onIonChange={(e) => setLoginPassword(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonButton className="submit-button" type="submit">
                    Login
                  </IonButton>
                </form>
                <div className="d-flex justify-content-center align-items-center">
                  <IonButton fill="clear" color="secondary">
                    Forgot password?
                  </IonButton>
                  ·
                  <IonButton
                    fill="clear"
                    color="secondary"
                    onClick={(e) => {
                      setLoginSegement("SIGN_UP");
                    }}
                  >
                    Sign up for Elastik-Chain
                  </IonButton>
                </div>
              </div>
            ) : (
              <h1>
                <IonButton
                  color="secondary"
                  fill="clear"
                  onClick={(e) => {
                    setLoginSegement("SIGN_IN");
                  }}
                >
                  Sign in for Elastik-Chain
                </IonButton>
              </h1>
            )}
            <IonButton
              className="modal-default-close-btn"
              fill="clear"
              color="danger"
              onClick={() => {
                setShowLoginModal(false);
              }}
            >
              <IonIcon icon={close}></IonIcon>
            </IonButton>
          </div>
        </IonModal>
        <section className="app-header">
        <div className="banner-img">
                            <img src={topBannerImage} alt="Banner image"/>
         </div>      
          <div className="content-container">
            <h1>Ideas change the world we live in</h1>
            <IonButton color="primary" size="large">
              Join Us
            </IonButton>
          </div>
        </section>
        <section className="categories">
          <IonSlides  pager={true}  options={categoriesSlidesOptions}>
            {renderCatgoriesSlides()}
          </IonSlides>
        </section>
        <section className="how-it-work">
          <h1 className="title">How does it work</h1>
          <div className="wrapper">
            <img
              className="timeline-line"
              src={timelineLine}
              alt="timeline-line"
            />
            <div className="content-container">{renderWorkSteps()}</div>
          </div>
        </section>
        <StyledNewsletter>
          <NewsParent>
            <Newsletter>
              <span className="footer-subs-text">subscribe newsletters</span>
              <div className="footer-email-text">
                <IonInput className="footer-news-input" placeholder="enter your email"></IonInput>
                <IonButton className="footer-subs-button">Subscribe Now</IonButton>
              </div>
            </Newsletter>
          </NewsParent>
        </StyledNewsletter>

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

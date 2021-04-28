import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { isLocalDev } from "../../config";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
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
import googleIcon from "../../assets/img/google.svg";
import icWork1 from "../../assets/img/icon-idea.png";
import icWork2 from "../../assets/img/icon-product.png";
import icWork3 from "../../assets/img/icon-work.png";
import icWork4 from "../../assets/img/ic-work4.png";
import image1 from "../../assets/img/financial-2.png";
import image2 from "../../assets/img/financial.png";
import image3 from "../../assets/img/badbanny1.png";
import image4 from "../../assets/img/badbanny.png";
import topBannerImage from "../../assets/img/img-top-section.png";
import {ClientRole} from "@daml.js/cosmart-0.0.1/lib/Main";
import "./Home.scss";
import { useUserDispatch, loginUser,loginDablUser } from "../../context/UserContext";
import { RouteComponentProps } from "react-router-dom";
import { Fade, Typography } from "@material-ui/core";

import { close } from "ionicons/icons";
import loginImg from "../../assets/img/logo-slogan.jpg";
import { registerTemplate } from "@daml/types";

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
  const [readMore, setReadMore] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginSegement, setLoginSegement] = useState("SIGN_IN");
  const [loginUserName, setLoginUserName] = useState("");
  const defaultRegister = {name:"",email:''};
  const [registerUser, setRegisterUser] = useState(defaultRegister);
  const [loginPassword, setLoginPassword] = useState("");
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(false);
  var userDispatch = useUserDispatch();
  const handleRegisterSubmit = (evt:any)=>{
    evt.preventDefault();
    console.log(registerUser);
  }
  const responseGoogle = (response:any) => {
    setShowLoginModal(false);
    console.log("response From Google",response);
    loginUser(
      userDispatch,
      response.googleId,
      response.googleId,
      props.history,
      setIsLoading,
      setError,
      false
    );
  }
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
                      onClick={() =>{ 
                        setLoginSegement("SIGN_IN");
                        setShowLoginModal(true)}}
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
                  {!isLocalDev &&
                <>
                    <div className="auth0-lock-social-button-text"> <span className="dablLoginButton" onClick={loginDablUser}>
                    Log in with DABL
                  </span></div>
                  
                </>}
                    {/*<GoogleLogin
                      clientId="299730981258-eqrdfglhc9govugb2sntmat221fp0ec1.apps.googleusercontent.com"
                      render={renderProps => (
                        <div className="auth0-lock-social-button-text"><span onClick={renderProps.onClick} ><img src={googleIcon}/> <label>Sign in with Google</label></span></div>
                      )}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                    /> */}
                   
              
                 
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
              <div className="sign-in">
              <form className="login-form" onSubmit={handleRegisterSubmit}>
                <IonItem>
                  <IonLabel position="floating">Name</IonLabel>
                  <IonInput
                    value={registerUser.name}
                    required={true}
                    onIonChange={(e) => setRegisterUser({
                      ...registerUser,
                      name: e.detail.value!,
                    })}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    required={true}
                    value={registerUser.email}
                    onIonChange={(e) => setRegisterUser({
                      ...registerUser,
                      email: e.detail.value!,
                    })}
                  ></IonInput>
                </IonItem>
                <IonButton className="submit-button" type="submit">
                  Register
                </IonButton>
              </form>
              <div className="d-flex justify-content-center align-items-center">
                <IonButton fill="clear" color="secondary" onClick={(e) => {
                    setLoginSegement("SIGN_IN");
                  }}>
                 Go Back on Login
                </IonButton>
                
               
              </div>
            </div>
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
            <IonButton color="primary" size="large"
            onClick={(e) => {
              setLoginSegement("SIGN_UP");
              setShowLoginModal(true);
            }}
            >
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
        {/* Apps Section*/}
        <div id="showcases" className="apps mb-5 wrapper1">
                    {/* <p className="mb-4 show-case"><b>SHOW CASES</b></p> */}
                    <h4 className="mb-4 blue">Here is some Dapps</h4>
                    {/* <p className="description mb-4">
                        Dapps is a decentralized computer application that runs on a distributed computing system.
                    </p> */}
                    <Row >
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">SALT</h4>
                                    <p>Offering cash loans in return for cryptocurrency collateral, SALT managed to serve those who are in need of cash but don't want to sell their tokens.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src={image2} alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">Stellar</h4>
                                    <p>Stellar, or Stellar Lumens, is an open source, decentralized protocol for digital currency to fiat money transfers which allows cross-border transactions between any pair of currencies.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src={image3} alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">OmiseGo</h4>
                                    <p>The OMG Network allows you to access, manage, and transact with digital assets that are kept securely on the blockchain.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={12}>
                            <div className="box">
                                <div className="box-img">
                                    <img src={image4} alt="" />
                                </div>
                                <div className="box-body">
                                    <h4 className="blue">Fintech Pro</h4>
                                    <p>Pro Fintech provide liquidity and trading management, IT support, development and consultancy services to the financial sector. With our proactive and strategic approach to your requirements, we are poised to deliver first time, every time.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


                {/* About Section */}
                <div id="about" className="about wrapper1">
                    {/* <p className="mb-4 show-case"><b>ABOUT</b></p> */}
                    {/* <h4 className="mb-4">Learn More <b className='text-danger'>About Us</b></h4> */}
                    <h4 className="mb-4 blue">Learn More About Us</h4>
                    {/* <p className="description mb-4">
                        Here is simply how Elastik-Chain works we are making it easy for Dapps to scale by getting funded and brought the light to our community.
                    </p> */}
                    <Row >
                        <Col md={6} sm={12}>
                            <p>
                                When it comes to personalizing your online store, 
                                nothing is more effective than an About Us page. 
                                This is a quick summary of your company's history and purpose, 
                                and should provide a clear overview of the company's brand story. 
                                A great About Us page can help tell your brand story, 
                                establish customer loyalty, 
                                and turn your bland ecommerce store into an well-loved brand icon. 
                                Most importantly, it will give your customers a reason 
                                to shop from your brand.
                                A great About Us page can help tell your brand story, 
                                establish customer loyalty, 
                                and turn your bland ecommerce store into an well-loved brand icon. 
                                Most importantly, it will give your customers a reason .
                            </p>
                        </Col>
                        <Col md={6} sm={12}>
                            <p>
                                When it comes to personalizing your online store, 
                                nothing is more effective than an About Us page. 
                                This is a quick summary of your company's history and purpose, 
                                and should provide a clear overview of{readMore ? <></> :
                                <span id="dots">...</span>}
                                {readMore?<span id="more"> the company's brand story. 
                                A great About Us page can help tell your brand story, 
                                establish customer loyalty, 
                                and turn your bland ecommerce store into an well-loved brand icon. 
                                Most importantly, it will give your customers a reason 
                                to shop from your brand.</span>:<></>}
                                
                            </p>
                            {readMore ?
                                <button onClick={() => setReadMore(false)} id="myBtn">Show Less</button>

                                : <button onClick={() => setReadMore(true)} id="myBtn">Learn More</button>}
                        </Col>
                    </Row>
                </div>
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

        <footer>
          <div className="footer-container">
            <img className="footer-logo" src={logoBlue} alt="logo slogan" />
            <div className="footer-text">
              <span>Terms of use</span> | <span>Privacy Statement</span> |{" "}
              <span>Copyright ASX Ltd 2021</span>
            </div>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Home;

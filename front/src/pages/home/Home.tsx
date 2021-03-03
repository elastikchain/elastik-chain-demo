import React, { useState } from 'react';
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
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/react';
import logo from '../../assets/img/logo-combination.svg';
import timelineLine from '../../assets/img/img-how-it-work-timeline.png';

import icWork1 from '../../assets/img/ic-work1.png';
import icWork2 from '../../assets/img/ic-work2.png';
import icWork3 from '../../assets/img/ic-work3.png';
import icWork4 from '../../assets/img/ic-work4.png';

import './Home.scss';

const workSteps = [
    {
      icon: icWork1,
      content: 'You have an amazing idea and you made an MVP of it'
    },
    {
      icon: icWork2,
      content: 'Now, you need sponsors to bring that into a full fledged product'
    },
    {
      icon: icWork3,
      content: 'We give you the platform, and thousands of people will choose and vote for the ideas they love'
    },
    {
      icon: icWork4,
      content: 'We have investors who would actually invest in the most amazing idea'
    }
  ];
  const renderWorkSteps = () => {
    return workSteps.map((item, index) => (
      <div className="work-step">
        <img src={item.icon} alt="step"/>
        <div className={'dot dot-'+(index+1)}></div>
        <p>{item.content}</p>
      </div>
    ));
  }
  const categories = ['Fintech', 'Healthcare', 'Mobility', 'Education', 'Appliances'];
  const renderCatgoriesSlides = () => {
    const arr = categories.map((item: string, index: number) => (
      <IonSlide>
        <a className="category-item" href="#">
          <p>{item}</p>
        </a>
      </IonSlide>
    ));
    return arr;
  }
  const categoriesSlidesOptions = {
    width: 221,
    initialSlide: 0,
    loopedSlides: categories.length,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1500,
    },
    navigation: 
      {
        prevEl: '.slider .prev-btn',
        nextEl: '.slider .next-btn',
      }, 
    spaceBetween: 5
}
const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  return  (
      <IonPage>
        <IonHeader>
          <IonToolbar className="toolbar">
            <div className="d-flex">
              <img className="app-logo" src={logo} alt="logo"/>
              <IonSearchbar 
              placeholder="Explore amazing ideas"
              value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>  
            </div>
            <IonButtons slot="end" className="toolbar-buttons-container">
              <div className="toolbar-buttons">
                <IonButton>
                  Explore
                </IonButton>
                <IonButton onClick={() => setShowLoginModal(true) }>
                  Log in
                </IonButton>
              </div>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonModal isOpen={showLoginModal} onDidDismiss={() => setShowLoginModal(false) } cssClass='my-custom-class'>
              <div className="content">
                <IonSegment mode="md" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                  <IonSegmentButton value="SIGN_IN">
                    <IonLabel>Sign in</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="SIGN_UP">
                    <IonLabel>Sign up</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </div>
              <IonButton onClick={() =>{
                  setShowLoginModal(false) 
              }}>Close Modal</IonButton>
          </IonModal>
          <section className="app-header">
            <div className="content-container">
              <h1>Ideas change the world we live in</h1>
              <IonButton color="primary" size="large">
                Join Us
              </IonButton>
            </div>
          </section>
          <section className="categories">
            <IonSlides options={categoriesSlidesOptions}>
              { renderCatgoriesSlides() }
            </IonSlides>
          </section>
          <section className="how-it-work">
            <h1 className="title">How does it work</h1>
            <div className="wrapper">
              <img className="timeline-line" src={timelineLine} alt="timeline-line"/>
              <div className="content-container">
                { renderWorkSteps() }
              </div>
            </div>
          </section>
        </IonContent>
      </IonPage>
    )
};

export default Home;

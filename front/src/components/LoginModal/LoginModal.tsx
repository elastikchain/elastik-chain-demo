import React, { useEffect, useState } from 'react';
import { IonModal, IonButton } from '@ionic/react';

export const LoginModal = (props: any) => {
  console.log('props', props);
  
  const [showModal, setShowModal] = useState(props.showModal);
  useEffect(() => {
    if (props && props.showModal) {
        setShowModal(props.showModal);
    }
  }, [props]);
  return (
    <IonModal isOpen={props.showModal} cssClass='my-custom-class'>
        <div className="content">

        </div>
        <IonButton onClick={() =>{
            setShowModal(!showModal) 
        }}>Close Modal</IonButton>
    </IonModal>
  );
};
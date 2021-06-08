import React from "react";
import { RouteComponentProps } from "react-router-dom";
import {
    IonHeader,
    IonToolbar,
    IonContent,
    IonMenu,
    IonTitle,
    IonItem,
    IonList,
    IonLabel,
   } from "@ionic/react";
  import menuItemImg from "../../assets/img/img-menu-item.png"; 
const ProfileMenu = (props: RouteComponentProps) => {


    return (

          <IonMenu contentId="main" className="leftbar-main">
                <IonHeader className="d-none">
                  <IonToolbar>
                    <IonTitle></IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent>
                  <IonList className="menu-items-list">
                   
                    <IonItem>
                      <img slot="start" src={menuItemImg} alt="menu item" />
                      <IonLabel  onClick={(e)=>
                            props.history.push("/main/profile/view")
                        }>Profile</IonLabel>
                    </IonItem>
                    {/* <IonItem>
                      <img slot="start" src={menuItemImg} alt="menu item" />
                      <IonLabel onClick={(e)=>
                            props.history.push("/main/profile/setting")
                        }>Settings</IonLabel>
                    </IonItem> */}
                  </IonList>
                </IonContent>
              </IonMenu>
    )
}
export default ProfileMenu;
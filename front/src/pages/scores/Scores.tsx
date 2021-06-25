import React from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  IonPage,
  IonButton,
  IonContent,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import SubHeader from "../../components/Header/subheader";
import Footer from "../../components/Footer/footer";
import "./Scores.scss" ;
import {
  useUserState,
} from "../../context/UserContext";
import { useStreamQueries } from "@daml/react";
import GetJudge from '../project/getjudge';
import { arrowBack,arrowUp,arrowDown } from "ionicons/icons";
import { Scorecard } from "@daml.js/cosmart-0.0.1/lib/Main";
function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
type Order = 'asc' | 'desc';
function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
} 
const Scores = (props: RouteComponentProps) => {
  const user = useUserState();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const scorecard = useStreamQueries(Scorecard, () => {
    return [{ client: (user as any).party }];
  }).contracts;
 console.log("scorecard",scorecard)
  const rows:any = scorecard.map((c, i) => {
        return c.payload;
  });
  const changeOrderData = (name="",type="")=>{
      let orderType:Order = (type === 'asc') ? 'desc':'asc';
      setOrderBy(name);
      setOrder(orderType);
  }

  return (
    <IonPage>
     <SubHeader {...props} />
      <IonContent>
      <div className="content-container"> 
        <div className="proj-wrapper">
          <IonButton fill="clear" onClick={(e) => props.history.goBack()}>
            <IonIcon slot="start" icon={arrowBack}></IonIcon>
            Back
          </IonButton>

          <IonList>
            <IonItem className="table-header">
              <IonLabel>Submission Name  <IonIcon slot="start" icon={order === 'asc' ? arrowUp : arrowDown} onClick={()=>{changeOrderData("name",order)}}></IonIcon></IonLabel>
              <IonLabel>Submission Id</IonLabel>
              <IonLabel>Judge</IonLabel>
              <IonLabel>Scores</IonLabel>
              <IonLabel>Final Score</IonLabel>
            </IonItem>
           
            {scorecard.length > 0 ? (
              stableSort(rows, getComparator(order, orderBy)).map((c,index) => (
                <IonItem key={index}>
                  
                  <IonLabel>{c.name}
                  
                  </IonLabel>
                  <IonLabel>{c.submissionId}</IonLabel>
                  <IonLabel> <GetJudge name={c.judge}/>
                  <p>{c.judgeComment}</p>
                  </IonLabel>
                  {(scorecard[index].payload.scoretable || []).length > 0 ? (
                    <IonLabel>
                      {(scorecard[index].payload.scoretable || []).map((s:any,indx) => (
                        <p key={indx}>
                          {s.name}: {s.point}
                        </p>
                      ))}
                    </IonLabel>
                  ) : null}
                  <IonLabel> {c.finalScore}</IonLabel>
                </IonItem>
                
              ))
            ) : (
              <IonItem lines="none">
                <IonLabel>
                  <p className="no-scores">No scores found</p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
        </div>
        <Footer />
        </div>
      </IonContent>
      
    </IonPage>
  );
};

export default Scores;

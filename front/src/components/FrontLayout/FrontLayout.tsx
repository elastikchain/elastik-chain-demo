import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import DamlLedger from "@daml/react";
import { useUserState } from "../../context/UserContext";
import { wsBaseUrl, httpBaseUrl } from "../../config";
import Profile from "../../pages/profile/Profile";
import Project from "../../pages/project/Project";
import EditSubmission from "../../pages/submission/EditSubmission";
import Submission from "../../pages/submission/Submission";
import EditProject from "../../pages/project/EditProject";
import EditProfile from "../../pages/profile/EditProfile";
import ViewProfile from "../../pages/profile/viewProfile";
import AccountSetting from "../../pages/profile/AccountSetting"
import Scores from "../../pages/scores/Scores";



const FrontLayout = (props: any) => {

  const user = useUserState();
  if (!user.isAuthenticated) {
    return null;
  } else {
    return (
      <DamlLedger
        party={user.party}
        token={user.token}
        httpBaseUrl={httpBaseUrl}
        wsBaseUrl={wsBaseUrl}
      >
        {/* <WellKnownPartiesProvider>
                <PublicProvider> */}
        <Switch>
          <Route path="/main/profile/edit" component={EditProfile} />
          <Route path="/main/profile/view" component={ViewProfile} />
          <Route path="/main/profile/setting" component={AccountSetting} />
          <Route path="/main/projects/:id/edit" component={EditProject} />
          <Route path="/main/project/:id" component={Project} />
          <Route path="/main/profile" component={Profile} />
          <Route path="/main/submission-edit/:submissionId" component={EditSubmission} />
          <Route path="/main/submission/:submissionId" component={Submission} />
          <Route path="/main/scores/:id" component={Scores} />
        </Switch>
        {/*  </PublicProvider>
            </WellKnownPartiesProvider> */}
      </DamlLedger>
    );
  }
};

export default withRouter(FrontLayout);

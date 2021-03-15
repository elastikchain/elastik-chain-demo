import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import DamlLedger from "@daml/react";
import { useUserState } from "../../context/UserContext";
import { wsBaseUrl, httpBaseUrl } from "../../config";
import Profile from "../../pages/profile/Profile";
import Project from "../../pages/project/Project";
import Submission from "../../pages/submission/Submission";

const FrontLayout = (props: any) => {
    console.log('FrontLayout', props);
    const user = useUserState();

    if(!user.isAuthenticated){
        return null;
    } else {
        return (
        <DamlLedger party={user.party} token={user.token} httpBaseUrl={httpBaseUrl} wsBaseUrl={wsBaseUrl}>
            <Switch>
                <Route path="/main/project" component={Project} />
                <Route path="/main/profile" component={Profile} />
                <Route path="/main/submission" component={Submission} />
            </Switch>
        </DamlLedger>
        );
    }
}

export default withRouter(FrontLayout);

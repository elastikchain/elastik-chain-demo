import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import DamlLedger from "@daml/react";
import { useUserState } from "../../context/UserContext";
import { wsBaseUrl, httpBaseUrl, ledgerId } from "../../config";
import Profile from "../../pages/profile/Profile";
import Project from "../../pages/project/Project";
import Submission from "../../pages/submission/Submission";
import EditProject from "../../pages/project/EditProject";

import {
  PublicLedger,
  useWellKnownParties,
  WellKnownPartiesProvider,
} from "@daml/hub-react/lib";
import Scores from "../../pages/scores/Scores";

const PublicProvider: React.FC = ({ children }) => {
  // This component fetches the public party ID and uses it to instantiate a PublicLedger context
  const { parties, loading } = useWellKnownParties();

  if (loading || !parties) {
    return <div>Loading...</div>;
  }

  return (
    <PublicLedger ledgerId={ledgerId} publicParty={parties.publicParty}>
      {children}
    </PublicLedger>
  );
};

const FrontLayout = (props: any) => {
  console.log("FrontLayout", props);
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
        <div>
          <p>hello mohit</p>
          <Switch>
            <Route path="/main/project" component={Project} />
            <Route path="/main/projects/:id/edit" component={EditProject} />
            <Route path="/main/profile" component={Profile} />
            <Route path="/main/submission/:id" component={Submission} />
            <Route path="/main/scores" component={Scores} />
          </Switch>
          {/*  </PublicProvider>
            </WellKnownPartiesProvider> */}
        </div>
      </DamlLedger>
    );
  }
};

export default withRouter(FrontLayout);

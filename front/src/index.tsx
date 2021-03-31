import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from "./components/App";
import { UserProvider } from "./context/UserContext";

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDf7LRmR2QKPKUf-IGcBrh52k5qFeBmlQ0",
  authDomain: "elastiktest.firebaseapp.com",
  projectId: "elastiktest",
  storageBucket: "elastiktest.appspot.com",
  messagingSenderId: "9275268296",
  appId: "1:9275268296:web:a5a38b5e146f2bc17699fd"
};
firebase.initializeApp(config);

ReactDOM.render(
  <UserProvider>
    <ThemeProvider theme={Themes.default}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </UserProvider>,
  document.getElementById("root"),
);

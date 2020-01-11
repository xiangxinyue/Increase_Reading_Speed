import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Main from "./pages/mainpage/mainpage";
import Train from "./pages/trainpage/trainingpage";
import Test from "./pages/testingpage/testingpage";
import { SignUp } from "./pages/signuppage/signuppage";
import { SignIn } from "./pages/signinpage/signinpage";
import { User } from "./pages/userpage/userpage";
import Test0 from "./components/trainingpart/test";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/train" component={Train} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user" component={User} />
        <Route exact path="/q" component={Test0} />
      </Switch>
  )
}

export default App;

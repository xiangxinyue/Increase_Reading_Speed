import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import Main from "./pages/mainpage/mainpage";
import Train from "./pages/trainpage/trainingpage";
import Test from "./pages/testingpage/testingpage";
import { SignIn } from "./pages/signinpage/signinpage";
import { User } from "./pages/userpage/userpage";
import Test0 from "./components/trainingpart/test";
import { Header } from "./components/header/header";

import { auth, createUserProfileDocument } from './firebase/firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/train" component={Train} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/user" component={User} />
          <Route exact path="/q" component={Test0} />
        </Switch>
      </div>
    )
  }
}

export default App;

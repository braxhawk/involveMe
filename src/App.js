import React, { Component } from "react";
import "./App.scss";
import { Content } from "carbon-components-react/lib/components/UIShell";
import Header from "./components/IMHeader";
import Watson from "./components/Watson";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./content/LandingPage";
import InfoPage from "./content/InfoPage";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Watson>Hello</Watson>
            <Route path="/infos" component={InfoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;

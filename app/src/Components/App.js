import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../CSS/App.css";
import Header from "./Header";
import Home from "./Home";
import Setting from "./Setting";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/setting"} component={Setting} />
            {/*<Route path={"/about"} component={About} />*/}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

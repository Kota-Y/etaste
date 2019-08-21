import React from "react";
import { Switch, Route } from "react-router-dom";
import "../CSS/Main.css";
import Home from "./Home";
import Setting from "./Setting";
import Item from "./Item";
import AllRecommends from "./allRecommends";

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <div>
          <div>
            <div>
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/item"} component={Item} />
                <Route exact path={"/setting"} component={Setting} />
                <Route path={"/allRecommends"} component={AllRecommends} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

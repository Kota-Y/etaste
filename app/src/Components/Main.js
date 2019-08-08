import React from "react";
import { Switch, Route } from "react-router-dom";
import "../CSS/Main.css";
import Home from "./Home";
import Setting from "./Setting";
import Item from "./Item";
import Recommend from './Recommend';

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <div class="bg-image">
          <div class="bg-mask">
            <h1>↓　MainPage　↓</h1>
            <div>
              <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/item"} component={Item} />
                <Route exact path={"/setting"} component={Setting} />
                {/*<Route path={"/about"} component={About} />*/}
              </Switch>
            </div>
          </div>
          <div className='recommend'>
            <Recommend />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

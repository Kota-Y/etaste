import React from "react";
import { Switch, Route } from "react-router-dom";
import "../CSS/Main.css";
import Home from "./Home";
import Setting from "./Setting";
import Item from "./Item";
import AllRecommends from "./allRecommends";
import StoreDetail from "./StoreDetail";

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
                <Route exact path={"/allRecommends"} component={AllRecommends} />
                <Route exact path={"/StoreDetail"} component={StoreDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

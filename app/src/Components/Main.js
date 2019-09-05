import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Setting from "./Setting";
import Item from "./Item";
import AllRecommends from "./allRecommends";
import StoreDetail from "./StoreDetail";
import FavoriteList from "./favoriteList";
import "../CSS/Main.css";

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
                <Route exact path={"/all-recommends"} component={AllRecommends} />
                <Route exact path={"/store-detail"} component={StoreDetail} />
                <Route exact path={"/favorite-list"} component={FavoriteList} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

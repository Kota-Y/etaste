import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Setting from "./Setting";
import Item from "./Item";
import AllRecommends from "./allRecommends";
import StoreDetail from "./StoreDetail";
import FavoriteList from "./favoriteList";
import Opensource from "./Opensource";
import TradeHistory from "./TradeHistory";
import Branching from "./Branching";
import Profileset from "./Profileset";
import QandA from "./QandA";
import Contact from "./Contact";
import Unsubscribe from "./Unsubscribe";
import UserFin from "./UserFin";
import "../CSS/Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/item"} component={Item} />
          <Route exact path={"/setting"} component={Setting} />
          <Route exact path={"/all-recommends"} component={AllRecommends} />
          <Route exact path={"/store-detail"} component={StoreDetail} />
          <Route exact path={"/favorite-list"} component={FavoriteList} />
          <Route exact path={"/opensource"} component={Opensource} />
          <Route exact path={"/tradehistory"} component={TradeHistory} />
          <Route exact path={"/deal"} component={Branching} />
          <Route exact path={"/profileset"} component={Profileset} />
          <Route exact path={"/qanda"} component={QandA} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/unsubscribe"} component={Unsubscribe} />
          <Route exact path={"/user-fin"} component={UserFin} />
        </Switch>
      </div>
    );
  }
}

export default Main;
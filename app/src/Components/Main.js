import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Setting from "./Setting";
import Item from "./Item";
import AllRecommends from "./allRecommends";
import StoreDetail from "./StoreDetail";
import FavoriteList from "./favoriteList";
import Opensource from "./Opensource";
import Branching from "./Branching";
import Profileset from "./Profileset";
import QandA from "./QandA";
import Contact from "./Contact";
import Unsubscribe from "./Unsubscribe";
import StoreInput from "./Store-Input";
import StoreSyuppin from "./Store-Syuppin";
import Storefin from "./Store-fin";
import UserFin from "./UserFin";
import Login from "./Login";
import SignUp from "./SignUp";
import MailCheck from "./MailCheck";
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
          <Route exact path={"/deal"} component={Branching} />
          <Route exact path={"/profileset"} component={Profileset} />
          <Route exact path={"/qanda"} component={QandA} />
          <Route exact path={"/contact"} component={Contact} />
          <Route exact path={"/unsubscribe"} component={Unsubscribe} />
          <Route exact path={"/user-fin"} component={UserFin} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/sign-up"} component={SignUp} />
          <Route exact path={"/mail-check"} component={MailCheck} />
          <Route exact path={"/store-input"} component={StoreInput} />
          <Route exact path={"/store-syuppin"} component={StoreSyuppin} />
          <Route exact path={"/store-fin"} component={Storefin} />
        </Switch>

      </div>
    );
  }
}

export default Main;
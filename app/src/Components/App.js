import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../CSS/App.css";
import Header from "./Header";
import Main from "./Main";
import Recommend from "./Recommend";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <body>
          <div id="wrapper">
            <Main />
            <Recommend />
            <Footer />
          </div>
        </body>
      </BrowserRouter>
    );
  }
}

export default App;

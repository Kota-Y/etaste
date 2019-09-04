import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../CSS/App.css";
import Header from "./Header";
import Main from "./Main";
//import Recommend from "./Recommend";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <body>
            <div id="wrapper">
              <Main />
            </div>
          </body>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../CSS/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

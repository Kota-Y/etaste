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
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

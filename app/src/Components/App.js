import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../CSS/App.css";
import BranchingHeader from "./BranchingHeader";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <BranchingHeader />
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

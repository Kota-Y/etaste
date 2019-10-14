import React from "react";
import { withRouter } from "react-router";

import "../CSS/LoginFeature.css";
import ValidatedSignUpForm from "./ValidatedSignUpForm";

class SignUp extends React.Component {
    render() {
        return (
        <div className='signup-container'>
            <ValidatedSignUpForm />  
        </div>
    );
  }
}

export default withRouter(SignUp);

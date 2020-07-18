import React from "react";

import SignIn from "../../components/signin/SignIn";

import "./SignInSignUp.scss";
import SignUp from "../../components/signup/SignUp";

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;

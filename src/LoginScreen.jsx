import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen({token ,setToken}) {
  const [signIn, setSignIn] = useState(false);
  const [enterEmail, setEnterEmail] = useState([]);
  const [submitEmail, setSubmitEmail] = useState();
  const [colorBar, setColorBar] = useState(false);
  const Onupdate = (e) => {
    
    setEnterEmail(e.target.value);
    setColorBar("none-border");
    console.log(e.target.value);
   
  };

  const LoginIn = (e) => {
    e.preventDefault();
  setColorBar("white-border")
    if (enterEmail.length === 0) {
      setColorBar("red-border");
      return;
    } else {
      setColorBar("none-border");
    }

    
    setSubmitEmail(enterEmail);
    setSignIn(true);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
          alt="Netflix-logo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Login
        </button>
        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen token={token} setToken={setToken} />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input
              
                    type="email"
                    placeholder=" Email Address"
                    className={`${colorBar} ${'white-border'}` }
                    onChange={Onupdate}
                  />
                  <button onClick={LoginIn} className="loginScreen__GetStarted">
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

import React, { useState } from "react";

const Contact = () => {
  const [show, setShow] = useState();
  const [loginRegex, setLoginRegex] = useState();

  const displaySignup = () => {
    const showSignup = document.getElementsByClassName("signup_container")[0];
    const hideLogin = document.getElementsByClassName("login_container")[0];
    setShow(
      (hideLogin.style.display = "none"),
      (showSignup.style.display = "block")
    );
  };
  const displayLogin = () => {
    const showSignup = document.getElementsByClassName("signup_container")[0];
    const hideLogin = document.getElementsByClassName("login_container")[0];
    setShow(
      (hideLogin.style.display = "flex"),
      (showSignup.style.display = "none")
    );
  };

  const regExp = () => {
    let name = document.getElementsByClassName("nameLogin")[0];
    let email = document.getElementsByClassName("emailLogin")[0];
    let pass = document.getElementsByClassName("passLogin")[0];

    let nameRegex = /^[A-Z][a-z]{2,}/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    let nameTest = nameRegex.test(name.value);
    let emailTest = emailRegex.test(email.value);
    let passTest = passRegex.test(pass.value);

    let nameTrue = document.getElementById("nameTrue");
    let nameFalse = document.getElementById("nameFalse");
    let emailTrue = document.getElementById("emailTrue");
    let emailFalse = document.getElementById("emailFalse");
    let passTrue = document.getElementById("passTrue");
    let passFalse = document.getElementById("passFalse");

    if (nameTest) {
        setLoginRegex(
        nameTrue.style.display = "block",
        name.style.borderColor = "green",
        nameFalse.style.display = "none"
        )
      } else {
        setLoginRegex(
        nameFalse.style.display = "block",
        name.style.borderColor = "red",
        nameTrue.style.display = "none"
        )
      }
    
      if (emailTest) {
        setLoginRegex(
        emailTrue.style.display = "block",
        email.style.borderColor = "green",
        emailFalse.style.display = "none"
        )
      } else {
        setLoginRegex(
        emailFalse.style.display = "block",
        email.style.borderColor = "red",
        emailTrue.style.display = "none"
        )
      }
    
      if (passTest) {
        setLoginRegex(
        passTrue.style.display = "block",
        pass.style.borderColor = "green",
        passFalse.style.display = "none"
        )
      } else {
        setLoginRegex(
        passFalse.style.display = "block",
        pass.style.borderColor = "red",
        passTrue.style.display = "none"
        )
      }
  };

  return (
    <div className="contact-container">
      <div className="login_container">
        <div className="login">
          <h2>Login</h2>
          <div>
                <i id="nameFalse" class="fas fa-times-circle"></i>
                <i id="nameTrue" class="fas fa-check-circle"></i>
            <input className="nameLogin" type="text" placeholder="Name" />
          </div>
          <div>
                <i id="emailFalse" class="fas fa-times-circle"></i>
                <i id="emailTrue" class="fas fa-check-circle"></i>
            <input className="emailLogin" type="email" placeholder="Email" />
          </div>
          <div>
                <i id="passFalse" class="fas fa-times-circle"></i>
                <i id="passTrue" class="fas fa-check-circle"></i>
            <input
              className="passLogin"
              type="password"
              placeholder="Password"
            />
          </div>
          <button onCLick={regExp}>Login</button>
          <p onClick={displaySignup} className="display_signup">
            Create account
          </p>
        </div>
        <div className="send_message">
          <h2>Send us message</h2>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <textarea rows="7" cols="50" placeholder="Type message" />
          </div>
          <button>Send message</button>
        </div>
        <div className="contact_us">
          <h2>Contact us</h2>
          <div>
            <i class="fas fa-map-marker-alt"></i>Knez Mihailova 40b
          </div>
          <div>
            <i class="fas fa-globe-europe"></i>Belgrade, Serbia
          </div>
          <div>
            <i class="fas fa-building"></i>Workdays 7 days 24 hours
          </div>
          <div>
            <i class="fas fa-phone-alt"></i>+381631188180
          </div>
          <div>
            <i class="far fa-envelope"></i>timotijevicvlada@gmail.com
          </div>
        </div>
      </div>
      <div className="signup_container">
        <h2>Signup</h2>
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="Phone" />
        </div>
        <div>
          <input type="text" placeholder="Zip code" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <input type="password" placeholder="Confirm password" />
        </div>
        <button>Signup</button>
        <p onClick={displayLogin} className="display_login">
          Go to login form
        </p>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ submitForm }) => {
  const [show, setShow] = useState();
  const [eye, setEye] = useState();

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

  const viewPass = () => {
    let pass = document.getElementsByClassName("passLogin")[0];
    let eyeOpen = document.getElementsByClassName("eye_open")[0];
    let eyeClose = document.getElementsByClassName("eye_close")[0];
    if (pass.type == "password") {
      setEye(
        (pass.type = "text"),
        (eyeOpen.style.display = "none"),
        (eyeClose.style.display = "block")
      );
    }
  };

  const hidePass = () =>{
    let pass = document.getElementsByClassName("passLogin")[0];
    let eyeOpen = document.getElementsByClassName("eye_open")[0];
    let eyeClose = document.getElementsByClassName("eye_close")[0];
    if(pass.type == "text") {
      setEye(
        (pass.type = "password"),
        (eyeOpen.style.display = "block"),
        (eyeClose.style.display = "none")
      )
    }
  }

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="contact-container">
      <div className="login_container">
        <form onSubmit={handleSubmit} className="login" noValidate>
          <h2>Login</h2>
          <div>
            <input
              className="nameLogin form-input"
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="form_errors">{errors.username}</p>
            )}
          </div>
          <div>
            <input
              className="emailLogin form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="form_errors">{errors.email}</p>}
          </div>
          <div className="input_pass">
            <FontAwesomeIcon
              onClick={viewPass}
              className="eye_open"
              icon={faEye}
            />
            <FontAwesomeIcon
              onClick={hidePass}
              className="eye_close"
              icon={faEyeSlash}
            />
            <input
              className="passLogin form-input"
              type="password"
              name="password"
              placeholder="Password"
              valuer={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="form_errors">{errors.password}</p>
            )}
          </div>
          <button class="form-input-btn" type="submit">
            Login
          </button>
          <p onClick={displaySignup} className="display_signup">
            Create account
          </p>
        </form>
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

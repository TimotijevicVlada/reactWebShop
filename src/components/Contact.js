import React from "react";


const Contact = () => {

  return (
    <div className="contact-container">
      <div className="login_container">
        <form className="login">
          <h2>Login</h2>
          <div>
            <input
              className="nameLogin form-input"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              className="emailLogin form-input"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="input_pass">
            <input
              className="passLogin form-input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="form-input-btn" type="submit">
            Login
          </button>
          <p className="display_signup">
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
            <i className="fas fa-map-marker-alt"></i>Knez Mihailova 40b
          </div>
          <div>
            <i className="fas fa-globe-europe"></i>Belgrade, Serbia
          </div>
          <div>
            <i className="fas fa-building"></i>Workdays 7 days 24 hours
          </div>
          <div>
            <i className="fas fa-phone-alt"></i>+381631188180
          </div>
          <div>
            <i className="far fa-envelope"></i>timotijevicvlada@gmail.com
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
        <div className="pass_signup">
          <input className="pass_signup_input" type="password" placeholder="Password" />
        </div>
        <div className="pass_confirm_signup">
          <input className="pass_conf_input" type="password" placeholder="Confirm password" />
        </div>
        <button>Signup</button>
        <p className="display_login">
          Go to login form
        </p>
      </div>
    </div>
  );
};

export default Contact;

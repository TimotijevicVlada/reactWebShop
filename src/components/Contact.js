import React, {useState} from 'react';

const Contact = () => {

    const [show, setShow] = useState();
   
    const displaySignup = () => {
        const showSignup = document.getElementsByClassName("signup_container")[0];
        const hideLogin = document.getElementsByClassName("login_container")[0];
        setShow(
            hideLogin.style.display = "none",
            showSignup.style.display = "block"
            );
    }
    const displayLogin = () => {
        const showSignup = document.getElementsByClassName("signup_container")[0];
        const hideLogin = document.getElementsByClassName("login_container")[0];
        setShow(
            hideLogin.style.display = "flex",
            showSignup.style.display = "none"
            );
    }

    return (
        <div className="contact-container">
            <div className="login_container">
                <div className="login">
                    <h2>Login</h2>
                    <div><input type="text" placeholder="Name"/></div>
                    <div><input type="email" placeholder="Email"/></div>
                    <div><input type="password" placeholder="Password"/></div>
                    <button>Login</button>
                    <p onClick={displaySignup} className="display_signup">Create account</p>
                </div>
                <div className="send_message">
                    <h2>Send us message</h2>
                    <div><input type="text" placeholder="Subject"/></div>
                    <div><textarea rows="7" cols="50" placeholder="Type message"/></div>
                    <button>Send message</button>
                </div>
                <div className="contact_us">
                    <h2>Contact us</h2>
                    <div><i class="fas fa-map-marker-alt"></i>Knez Mihailova 40b</div>
                    <div><i class="fas fa-globe-europe"></i>Belgrade, Serbia</div>
                    <div><i class="fas fa-building"></i>Workdays 7 days 24 hours</div>
                    <div><i class="fas fa-phone-alt"></i>+381631188180</div>
                    <div><i class="far fa-envelope"></i>timotijevicvlada@gmail.com</div>
                </div>
            </div>
            <div className="signup_container">
                <h2>Signup</h2>
                <div><input type="text" placeholder="Name"/></div>
                <div><input type="email" placeholder="Email"/></div>
                <div><input type="text" placeholder="Phone"/></div>
                <div><input type="text" placeholder="Zip code"/></div>
                <div><input type="password" placeholder="Password"/></div>
                <div><input type="password" placeholder="Confirm password"/></div>
                <button>Signup</button>
                <p onClick={displayLogin} className="display_login">Go to login form</p>
            </div>
        </div>
    )
}

export default Contact;

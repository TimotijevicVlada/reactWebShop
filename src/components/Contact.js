import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Login</h2>
            <div><input type="text" placeholder="Name"/></div>
            <div><input type="email" placeholder="Email"/></div>
            <div><input type="password" placeholder="Password"/></div>
            <button>Login</button>
        </div>
    )
}

export default Contact;

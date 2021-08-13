import React from "react";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="made_by">
          &copy; React shop by |<span> Vladimir Timotijevic</span>
      </div>
      <div className="socialNetwork_icon">
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-youtube-square"></i>
          <i className="fab fa-google-plus-square"></i>
      </div>
    </div>
  );
};

export default Footer;

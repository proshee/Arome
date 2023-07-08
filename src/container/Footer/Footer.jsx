import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer app__bg section__padding" id="login">
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <a href="https://www.google.com/maps/place/9+W+53rd+St,+New+York,+NY+10019,+USA/@40.7611122,-73.9789014,17z/data=!3m1!4b1!4m6!3m5!1s0x89c258fbd0b82edf:0x41af87d148d1a374!8m2!3d40.7611122!4d-73.9767127!16s%2Fg%2F11bw3_9g1v?entry=ttu" >
          <div>
            <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="p__opensans">+1 212-344-1230</p>
            <p className="p__opensans">+1 212-555-1230</p>
          </div>
        </a>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.aroma} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Aroma. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

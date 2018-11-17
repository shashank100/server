import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="form">
        <div className="form-container">
          <form action="/action_page.php">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" rows="8" cols="80" placeholder="Message" row="1" cols="5 "></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
      <div className="contact" id="contact">
        <h2>CONTACT</h2>
        <p>We are always available for your fitness queries!</p>
        <p>Call Us at +91 9910665273</p>
      </div>
    </div>
  );
};

export default ContactUs;

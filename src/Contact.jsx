import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";


const Contact = () => {
  return (
    <>
      <div className="contact-heading" id="contact">
        {" "}
        <h1>Contact</h1>
      </div>
      <section className="contact-main">
        <main className="contact-article">
          <h2>Let's work together</h2>
          <p className="contact-info">
            A unique experience in to how each customer has spent over te past
            yearA unique experience in to how each customer has spent over te
            past yearA unique experience in to how
          </p>
          <div className="conatct-contact">
            <div>
              {" "}
              <span>
                <MdEmail className="contact-icon" />
              </span>
              <span className="contact-name"> awedaifeoluwa@yahoo.com</span>
            </div>
            <div>
              {" "}
              <span>
                <IoCall className="contact-icon" />
              </span>
              <span className="contact-name"> 2348131305840</span>
            </div>
          </div>
        </main>
        <div className="form">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              placeholder="Enter Your  Message"
            ></textarea>
            <div className="contact-btn-container">
              {" "}
              <button className="contact-btn">Submit</button>
            </div>
          </form>
        </div>
      </section>
     
    </>
  );
};

export default Contact;

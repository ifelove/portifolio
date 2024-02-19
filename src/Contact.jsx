import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const url = "http://localhost:5000/api/contact";
import { toast } from "react-toastify";

const Contact = () => {
  AOS.init();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleContact = (e) => {
    e.preventDefault();

    const contact = { name, email, message };
    axios
      .post(url, contact)
      .then((response) => {
        if (response.status == "201") {
          toast.success("Sent Successfully");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="contact-heading">
        {" "}
        <h1 data-aos="fade-right" data-aos-offset="300">
          Contact
        </h1>
      </div>
      <section className="contact-main">
        <main className="contact-article" data-aos="fade-down">
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
        <div className="form" data-aos="fade-up">
          <form action="">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              name="message"
              id=""
              placeholder="Enter Your  Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="contact-btn-container">
              {" "}
              <button className="contact-btn" onClick={handleContact}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import "../../styles/main.scss";
import { Divider } from "../custom/Components";
import { Form, Input, Email, TextArea } from "../forms/Components";

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* <!-- Icon Divider--> */}
        <Divider icon="fa-paper-plane" />
        {/* <!-- Contact Section Form--> */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <Form id="contactForm" method="POST" name="contact">
              <Input
                label="Name"
                id="name"
                name="Name"
                placeholder="Name"
                required={true}
                validationMessage="Please enter your name"
              />
              <Email
                label="Email Address"
                id="email"
                name="Email"
                placeholder="Email Address"
                required={true}
                validationMessage="Please enter your email address"
              />
              <TextArea
                label="Message"
                id="message"
                name="Message"
                placeholder="Message"
                rows={5}
                required={true}
                validationMessage="Please enter a valid messsage"
              />
              <br />
              <div id="success"></div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

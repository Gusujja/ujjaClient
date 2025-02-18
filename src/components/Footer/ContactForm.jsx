import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { IoMdAlert } from "react-icons/io";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Form from "react-bootstrap/Form";
import Button from "../common/Button/Button";
import { LoadingOutlined } from "@ant-design/icons";
import "./ContactForm.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_xtl26ro", "template_d53tmld", form.current, {
        publicKey: "rMro0PHMnbToeSI6I",
      })
      .then(
        () => {
          setMessage("Email sent successfully!");
          setLoading(false);
          setError(false);
          resetMsg();
        },
        () => {
          setMessage("Failed to send Email. Try again later!");
          setLoading(false);
          setError(true);
          resetMsg();
        }
      );
  };

  const [value, setValue] = useState();

  // Remove message after 5 seconds
  const resetMsg = () => {
    setTimeout(() => {
      setMessage(null);
      setError(false);
    }, 5000);
  };

  return (
    <Card className="contact-card">
      <Card.Body>
        <Form onSubmit={sendEmail} ref={form} className="contact-form">
          <Form.Label className="form-label">
            Name <span className="required">*</span>
          </Form.Label>
          <Form.Control type="text" name="from_name" required className="form-input" />
          
          <Form.Label className="form-label">
            Email <span className="required">*</span>
          </Form.Label>
          <Form.Control type="email" name="reply_to" required className="form-input" />
          
          <Form.Label className="form-label">
            Phone Number
          </Form.Label>
          <div className="phone-container">
            <PhoneInput
              initialValueFormat="national"
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              className="phone-input"
            />
          </div>
          <div className="alert-container">
            <IoMdAlert size={"1.1rem"} />
            <span>
              By opting in to SMS, the person agrees to receive announcements
              and billing alerts from Brighton Marina Jiu Jitsu Academy.
            </span>
            <br />
            <span>Standard messaging rates may apply. Reply STOP to opt out.</span>
          </div>
          
          <Form.Label className="form-label">
            Gender <span className="required">*</span>
          </Form.Label>
          <Form.Select name="gender" required className="form-select">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
          
          <Form.Label className="form-label">
            Birthdate <span className="required">*</span>
          </Form.Label>
          <Form.Control type="date" name="birthdate" required className="form-input" />
          
          <Button type="submit" className="submit-button" disable={loading}>
            {loading ? <LoadingOutlined /> : "Submit"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;


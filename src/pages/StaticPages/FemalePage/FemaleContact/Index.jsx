import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { IoMdAlert } from "react-icons/io";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import Form from "react-bootstrap/Form";
import Button from "../../../../components/common/Button/Button"
import { LoadingOutlined } from "@ant-design/icons";
import "./FemaleContact.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false); // State to manage form visibility
  const form = useRef();
  const [birthdate, setBirthdate] = useState(null);

  const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create form data object
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("from_name"),
      email: formData.get("reply_to"),
      phone: value || "", // Use phone input state
      gender: formData.get("gender"),
      birthdate: birthdate ? birthdate.toISOString() : "", // Convert to string format
    };
    console.log(data);
const formType='females'
    try {
      const response = await fetch(`${web_Url}forms/${formType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });



      if (response.ok) {
        setMessage("Form submitted successfully!");
        setError(false);
        setSubmitted(true);
      } else {
        setMessage("Failed to submit the form. Please try again.");
        setError(true);
      }
    } catch (err) {
      setMessage("An error occurred. Please try again later.");
      setError(true);
    } finally {
      setLoading(false);
      resetMsg();
    }
  };
  console.log(birthdate);

  const [value, setValue] = useState();

  // Remove message after 5 seconds
  const resetMsg = () => {
    setTimeout(() => {
      setMessage(null);
      setError(false);
    }, 5000);
  };

  return (
    <div className="contact-card">
      <Card.Body>
      {!submitted ? ( // Show form only if not submitted
        <Form onSubmit={sendEmail} ref={form} className="contact-form">
            <h5 >Female Jiu Jitsu</h5>
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
       
          
          <Form.Label className="form-label">
            Gender <span className="required">*</span>
          </Form.Label>
          <Form.Select name="gender" required className="form-select">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
          
          <Form.Label className="form-label">Birthdate <span className="required">*</span></Form.Label>
          <DatePicker
        selected={birthdate}
        onChange={(date) => setBirthdate(date)} 
        dateFormat="dd/MM/yyyy" 
        className="professional-date-picker" 
        placeholderText="dd/mm/yyyy" 
        showYearDropdown 
        showMonthDropdown 
        dropdownMode="select" 
        yearDropdownItemNumber={100} 
        minDate={new Date(1900, 0, 1)} 
        maxDate={new Date()} 
        required 
      />
          
          <Button type="submit" className="female-submit-button" disable={loading}>
            {loading ? <LoadingOutlined /> : "Submit"}
          </Button>
        </Form>
              ) : (
                // Show Thank You message
                <div className="thank-you-message">
                  <h3>Thank You!</h3>
                  <p>Your form has been submitted successfully. A member of our staff will contact you within 48 hours</p>
                </div>
              )}
      </Card.Body>
    </div>
  );
};

export default Index;


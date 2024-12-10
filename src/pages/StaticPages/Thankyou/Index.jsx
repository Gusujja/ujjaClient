
import { Card } from "react-bootstrap";
import "./Thankyou.css";

const Index = () => {
 

  return (
    <Card className="contact-card">
      <Card.Body>
      <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Your form has been successfully submitted. We will get back to you soon.</p>

    </div>
      </Card.Body>
    </Card>
  );
};

export default Index;


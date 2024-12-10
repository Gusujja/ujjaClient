import React from "react";
import "./styles.css";
import beginners from "../../../assets/images/beginners.jpg";
import beginnersmain from "../../../assets/images/beginnersmain.jpg";
import TimeTable from "../../Home/TimeTable/TimeTable";
import Location from "../../Home/Location/Location";
import BeginnersContact from "./BeginnersContact/Index"

// const handleSignup = () => {
//   // Redirect to the provided link
//   window.open("https://kick.site/v0jcatvs", "_blank");
// };

const Index = () => {
  return (
    <div className="page-container">
      {/* Full-Width Image Section */}
      <div className="image-section">
        <img src={beginnersmain} alt="Main"  />
      </div>

      {/* Left Text - Right Image Section */}
      <div className="text-image-section">
        <div className="text-content2">
          <h3>Jiu Jitsu For Beginners</h3>
          <p>
            Discover the Art of Jiu Jitsu with Brighton Marina Jiu Jitsu
            Academy! Are you ready to challenge yourself get fit, and learn a
            valuable new skill?
          </p>
          <h5>Join us for a FREE One-Day Beginner's Trial Class at Brighton Marina Jiu Jitsu Academy!</h5>
          <p>Why Jiu Jitsu?</p>
          <p>
            Learn effective self-defense techniques. <br /> Build strength,
            flexibility, and confidence. <br /> Be part of a welcoming,
            supportive community. <br /> Have fun while getting a full-body
            workout!
          </p>
          <p>The Benefit of Starting Jiu Jitsu</p>
          <p>
            Improved Fitness <br /> Effective Self-Defense <br /> Mental
            Resilience and Discipline <br /> Confidence and Personal Growth
            <br /> Community and Camaraderie
          </p>
          <h5>Prioritize Mental Well-being:</h5>
          <p>
            Nurture your mental health as you engage in the mindfulness
            practices inherent in Jiu-Jitsu. Our Jiu-Jitsu Acdemy explores how
            the art promotes stress relief, focus, and emotional resilience,
            providing teenagers with invaluable tools to navigate the
            complexities of adolescence. Discover the therapeutic benefits of
            Jiu-Jitsu as it becomes a sanctuary for self-expression, <span>growth, and
            personal development.</span>
          </p>
          <h5>Master Self-Defense:</h5>
          <p>
            Equip yourself with essential self-defense skills that empower you
            to navigate the world with confidence and safety. Learn practical
            techniques tailored to real-life scenarios, empowering you to
            protect yourself and others in any situation. Our self-defense
            training isn't just about physical prowess; it's about cultivating a
            mindset of <span> awareness, assertiveness, and personal safety.</span>
          </p>
          <h5>No Experience Need </h5>
        <p>
          Our beginner-friendly classes are designed for all fitness levels.
          Whether you’re a complete novice or looking for something new, our
          expert instructors will guide you every step of the way.
        </p>
        <h5>Reserve Your Spot Now!</h5>
        <p>
          Spaces are limited, so don’t miss out! Sign up today and take the
          first step on your Jiu Jitsu journey.
        </p>
        </div>
        <div className="image-content">
          {/* <img src={beginners} alt="Side" onClick={handleSignup} /> */}
          <img src={beginners} alt="Side"  />
          <div  className="beginners_div">
            SIGN UP NOW LIMITED SPACES
          </div>
          <BeginnersContact/>
        </div>
      </div>
      <div className="text-text-section">
        <div className="text-content">
          {/* <h5>Prioritize Mental Well-being:</h5>
          <p>
            Nurture your mental health as you engage in the mindfulness
            practices inherent in Jiu-Jitsu. Our Jiu-Jitsu Acdemy explores how
            the art promotes stress relief, focus, and emotional resilience,
            providing teenagers with invaluable tools to navigate the
            complexities of adolescence. Discover the therapeutic benefits of
            Jiu-Jitsu as it becomes a sanctuary for self-expression, <span>growth, and
            personal development.</span>
          </p> */}
        </div>
        <div className="text-content">
          {/* <h5>Master Self-Defense:</h5>
          <p>
            Equip yourself with essential self-defense skills that empower you
            to navigate the world with confidence and safety. Learn practical
            techniques tailored to real-life scenarios, empowering you to
            protect yourself and others in any situation. Our self-defense
            training isn't just about physical prowess; it's about cultivating a
            mindset of <span> awareness, assertiveness, and personal safety.</span>
          </p>
          <h5>No Experience Need </h5>
        <p>
          Our beginner-friendly classes are designed for all fitness levels.
          Whether you’re a complete novice or looking for something new, our
          expert instructors will guide you every step of the way.
        </p>
        <h5>Reserve Your Spot Now!</h5>
        <p>
          Spaces are limited, so don’t miss out! Sign up today and take the
          first step on your Jiu Jitsu journey.
        </p> */}
        </div>
      </div>

      {/* Responsive Text Section */}
      <div className="responsive-text-section">
        {/* <h5>No Experience Need </h5>
        <p>
          Our beginner-friendly classes are designed for all fitness levels.
          Whether you’re a complete novice or looking for something new, our
          expert instructors will guide you every step of the way.
        </p>
        <h5>Reserve Your Spot Now!</h5>
        <p>
          Spaces are limited, so don’t miss out! Sign up today and take the
          first step on your Jiu Jitsu journey.
        </p> */}
      </div>
      <Location />
      <TimeTable />
    </div>
  );
};

export default Index;

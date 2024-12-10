import React from "react";
import "./styles.css";
import teenagers from "../../../assets/images/teenagers.jpg";
import teenagersmain from "../../../assets/images/teenagersmain.jpg";
import TimeTable from "../../Home/TimeTable/TimeTable";
import Location from "../../Home/Location/Location";
import { SiTicktick } from "react-icons/si";
import TeenagersContact from "./TeenagersContact/Index"

// const handleSignup = () => {
//   // Redirect to the provided link
//   window.open("https://kick.site/b1zmdhze", "_blank");
// };

const Index = () => {
  return (
    <div className="page-container">
      {/* Full-Width Image Section */}
      <div className="image-section">
        <img src={teenagersmain} alt="Main"  />
      </div>

      {/* Left Text - Right Image Section */}
      <div className="text-image-section">
        <div className="text-content2">
          <h3>Jiu Jitsu For Teenager’s</h3>
          <p>
            We have set up our youth programme to accommodate students of
            different ages and skill levels
          </p>

          <p> <SiTicktick style={{marginRight:"8px", color:"#87CEEB"}} />
          Little champs (4-7 years old) </p>
          <p> <SiTicktick style={{marginRight:"8px", color:"#87CEEB"}}  />
          Jr. Grapplers (8-11 years old)</p>
          <p> <SiTicktick style={{marginRight:"8px", color:"#87CEEB"}} />
          Teens Grapplers (12-15 years old)</p>
          <p>
            Our Jiu Jitsu programme is created to provide children and young
            people aged 4-15 with an environment that allows them to experience
            and understand core values like focus, discipline, persistence,
            cooperation and respect - while at the same time, having fun.
          </p>
          <p>
            {" "}
            We have seen the hugely positive effect this has on kids and young
            people, as they grow in confidence on the mat and throughout the
            rest of their lives. To make sure our younger members can stay
            consistent our timetable (hyperlink to timetable) has Youth Classes
            available Monday to Saturday. If you'd like more information or to
            have a chat about your child, please get in touch.
          </p>
          <h5>Prioritize Mental Well-being:</h5>
          <p>
            Nurture your mental health as you engage in the mindfulness
            practices inherent in Jiu-Jitsu. Our Jiu-Jitsu Acdemy explores how
            the art promotes stress relief, focus, and emotional resilience,
            providing teenagers with invaluable tools to navigate the
            complexities of adolescence. Discover the therapeutic benefits of
            Jiu-Jitsu as it becomes a sanctuary for self-expression,{" "}
            <span>growth, and personal development.</span>
          </p>
          <h5>Master Self-Defense:</h5>
          <p>
            Equip yourself with essential self-defense skills that empower you
            to navigate the world with confidence and safety. Learn practical
            techniques tailored to real-life scenarios, empowering you to
            protect yourself and others in any situation. Our self-defense
            training isn't just about physical prowess; it's about cultivating a
            mindset of{" "}
            <span> awareness, assertiveness, and personal safety.</span>
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
          {/* <img src={teenagers} alt="Side" onClick={handleSignup} /> */}
          <img src={teenagers} alt="Side" />
          <div  className="teenagers_div">
            SIGN UP NOW LIMITED SPACES
          </div>
          <TeenagersContact/>
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
            Jiu-Jitsu as it becomes a sanctuary for self-expression,{" "}
            <span>growth, and personal development.</span>
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
            mindset of{" "}
            <span> awareness, assertiveness, and personal safety.</span>
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

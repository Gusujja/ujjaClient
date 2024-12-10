import React from "react";
import "./PageStyles.css";
import femalepageimg from "../../../assets/images/femaleimg.jpg";
import femalejiujitsu from "../../../assets/images/femalejiujitsuimg.jpg";
import TimeTable from "../../Home/TimeTable/TimeTable";
import Location from "../../Home/Location/Location";
import FemaleContact from "./FemaleContact/Index"

// const handleSignup = () => {
//     // Redirect to the provided link
//     window.open("https://kick.site/njfvbjnk", "_blank");
//   };

const ResponsivePage = () => {
  return (
    <div className="page-container">
      {/* Full-Width Image Section */}
      <div className="image-section">
      <img src={femalepageimg} alt="Main" />
      </div>

      {/* Left Text - Right Image Section */}
      <div className="text-image-section">
   
        <div className="text-content">
        <h3>Jiu Jitsu For Female</h3> 
          <p>
            Welcome to <span> "EmpowerHer Jiu-Jitsu"</span> – Embark on a
            transformative journey that not only hones your physical strength
            but also elevates your mental fortitude and empowers you with
            invaluable self-defense skills.
          </p>
          <h5>A Safe Haven for Female Empowerment:</h5>
          <p>
            Discover a supportive community where females of all ages and
            backgrounds come together to thrive. Our website is a beacon of
            inclusivity, offering a welcoming space for women to explore the art
            of Jiu-Jitsu. Dive into our resources and testimonials, and witness
            firsthand the inspiring stories of women who have found empowerment,
            camaraderie, and confidence through their Jiu-Jitsu journey.
          </p>
          <h5>Forge Lifelong Bonds:</h5>
          <p>
            Experience the profound sense of sisterhood that blossoms within our
            Jiu-Jitsu community. Delve into articles and personal anecdotes
            illustrating the friendships forged on the mats – bonds that extend
            far beyond the training room. Connect with like-minded women who
            share your passion for growth, resilience, and mutual support.
          </p>
          <h5>Prioritize Mental Well-being:</h5>
          <p>
            Nurture your mental health as you delve into the meditative aspects
            of Jiu-Jitsu. Our website delves into the mindfulness practices
            inherent in the art, offering strategies to alleviate stress,
            anxiety, and promote mental clarity. Experience the therapeutic
            benefits of Jiu-Jitsu as it becomes a sanctuary for self-care and
            personal growth.
          </p>
          <h5>Join the Movement:</h5>
        <p>
          Step into your power and join the thriving community of empowered
          women at EmpowerHer Jiu-Jitsu. Whether you're seeking to improve your
          fitness, boost your confidence, or simply connect with like-minded
          individuals, our website provides the resources, support, and
          inspiration you need to embark on your Jiu-Jitsu journey.
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
       <img src={femalejiujitsu} alt="Side" />
       {/* <img src={femalejiujitsu} alt="Side" onClick={handleSignup}/> */}
          <div  className="singup_div">SIGN UP NOW LIMITED SPACES</div>
        
          <FemaleContact/>
        </div>
      
      </div>
      {/* Responsive Text Section */}
      <div className="responsive-text-section">
        {/* <h5>Join the Movement:</h5>
        <p>
          Step into your power and join the thriving community of empowered
          women at EmpowerHer Jiu-Jitsu. Whether you're seeking to improve your
          fitness, boost your confidence, or simply connect with like-minded
          individuals, our website provides the resources, support, and
          inspiration you need to embark on your Jiu-Jitsu journey.
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
      <Location/>
      <TimeTable/>
    
    </div>
  );
};

export default ResponsivePage;

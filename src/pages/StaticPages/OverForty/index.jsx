import React from "react";
import "./OverForty.css";
import over40main from "../../../assets/images/Over40main.jpg";
import over40 from "../../../assets/images/Over40.jpg";
import TimeTable from "../../Home/TimeTable/TimeTable";
import Location from "../../Home/Location/Location";
import OverFortyContact from "./OverFortyContact/Index"
// const handleSignup = () => {
//   // Redirect to the provided link
//   window.open("https://kick.site/swhbnnlo", "_blank");
// };

const index = () => {
  return (
    <div className="page-container">
      {/* Full-Width Image Section */}
      <div className="image-section">
        <img src={over40main} alt="Main" />
      </div>

      {/* Left Text - Right Image Section */}
      <div className="text-image-section">
        <div className="text-content1">
          <h3>Jiu Jitsu For Over 40’s</h3>
          <h5>Unlock a Fountain of Youth:</h5>
          <p>
            Discover the transformative power of Jiu Jitsu in maintaining and
            even rejuvenating your physical well-being. Contrary to common
            misconceptions, age is not a barrier to entry. Our jiu jitsu Academy
            delves into how Jiu Jitsu can be tailored to suit the needs of
            individuals over 40, promoting flexibility, balance, and overall
            fitness. Learn how this dynamic martial art becomes a key ally in
            your journey to stay active and agile well into your golden years.
          </p>
          <h5>Forge Lasting Connections:</h5>
          <p>
            Discover the transformative power of Jiu Jitsu in maintaining and
            even rejuvenating your physical well-being. Contrary to common
            misconceptions, age is not a barrier to entry. Our jiu jitsu Academy
            delves into how Jiu Jitsu can be tailored to suit the needs of
            individuals over 40, promoting flexibility, balance, and overall
            fitness. Learn how this dynamic martial art becomes a key ally in
            your journey to stay active and agile well into your golden years.
          </p>
          <h5>Mental Health Mastery:</h5>
          <p>
            Embark on a journey of self-discovery as we emphasize the profound
            impact Jiu Jitsu has on mental health. Stress relief, increased
            focus, and heightened cognitive function that are direct outcomes of
            consistent Jiu Jitsu practice. Explore the mindfulness aspect of the
            art and learn how it promotes mental resilience, self-discipline,
            and a positive outlook on life.
          </p>
          <h5>Expert Guidance and Resources:</h5>
          <p>
            Take the first step towards a healthier, more fulfilling life by
            exploring the world of Jiu Jitsu tailored to those over 40. Join our
            community, embrace the art, and experience the multifaceted benefits
            that extend far beyond the mat. Welcome to a new chapter of
            vitality, connection, and mental resilience – welcome to "Jiu Jitsu
            Life Beyond 45."
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
          <img src={over40} alt="Side"  />
          {/* <img src={over40} alt="Side" onClick={handleSignup} /> */}
          <div className="overforty_div">
            SIGN UP NOW LIMITED SPACES
          </div>
          <OverFortyContact/>
        </div>
      </div>
      <div className="text-text-section">
        <div className="text-content">
          {/* <h5>Mental Health Mastery:</h5>
          <p>
            Embark on a journey of self-discovery as we emphasize the profound
            impact Jiu Jitsu has on mental health. Stress relief, increased
            focus, and heightened cognitive function that are direct outcomes of
            consistent Jiu Jitsu practice. Explore the mindfulness aspect of the
            art and learn how it promotes mental resilience, self-discipline,
            and a positive outlook on life.
          </p> */}
        </div>
        <div className="text-content">
          {/* <h5>Expert Guidance and Resources:</h5>
          <p>
            Take the first step towards a healthier, more fulfilling life by
            exploring the world of Jiu Jitsu tailored to those over 40. Join our
            community, embrace the art, and experience the multifaceted benefits
            that extend far beyond the mat. Welcome to a new chapter of
            vitality, connection, and mental resilience – welcome to "Jiu Jitsu
            Life Beyond 45."
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

export default index;

import React from "react";
import "./PageStyles.css";
import { SiTicktick } from "react-icons/si";
import femalepageimg from "../../assets/images/femaleimg.jpg";
import femalejiujitsu from "../../assets/images/femalejiujitsuimg.jpg";

const ResponsivePage = () => {
  return (
    <div className="page-container">
      {/* Full-Width Image Section */}
      <div className="image-section">
        <img src={femalepageimg} alt="Main" />
      </div>

      {/* Embedded iFrame Section */}
      <div className="iframe-section">
        <iframe
          src="https://bmjja.kicksite.net/bizbuilders/landing_pages/eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoibGRwZ18yMDAwNSJ9.MexZME6CjIVGZdVFkvF5Gy4dt1i1kG4-H-xqbizV9qA"
          title="Embedded Content"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      {/* <div className="textarea">
        <h5>Jiu Jitsu For Female</h5>
        <div className="tick_text">
          <span>
            <SiTicktick />
          </span>
          <p>Female Jiu Jitsu (16+ years old)</p>
        </div>
      </div> */}
        <div className="responsive-text-section">
        <h3>Jiu Jitsu For Female</h3>
            <div className="tick_text">
        {/* <span>
            <SiTicktick />
          </span>
          <p>Female Jiu Jitsu </p> */}
        </div>
      
      </div>
      {/* Left Text - Right Image Section */}
      <div className="text-image-section">
        <div className="text-content">
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
        </div>
        <div className="image-content">
          <img src={femalejiujitsu} alt="Side" />
        </div>
      </div>
      {/* Responsive Text Section */}
      <div className="responsive-text-section">
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
    </div>
  );
};

export default ResponsivePage;

import { Container } from "react-bootstrap";
import { CardGridStyled } from "./styles";
import TextCard from "./TextCard";
import teenagers from "../../../assets/images/white img.jpg";
import over40 from "../../../assets/images/white img.jpg";
import female from "../../../assets/images/white img.jpg";
import imgCard2 from "../../../assets/images/MAP45THUMB-1 (1).png";
import imgCard3 from "../../../assets/images/homepage img.d7b4199edb7c179f5e40.jpg";
import { useNavigate } from "react-router-dom";
import { SiTicktick } from "react-icons/si";

import ImageCard from "./ImageCard";
import {
  SmallHeadingBlack,
  lightGreen2,
  pink1,
  pureDark5,
} from "../../../components/GlobalStyle";

const handleClickfemale = () => {
  // Redirect to the provided link
  window.open("/femalepage");
};

const Row1 = () => {
  const navigate = useNavigate();
  const handleClickteenagers = () => {
    window.open(
      "https://bmjja.kicksite.net/public/landing_pages/5749825c-38e8-4280-adee-cb9240cfa9ea/submission/new",
      "_blank"
    );
  };
  return (
    <div className="d-flex flex-row flex-column gap-5">
      <TextCard id={"KidsAndTeens"}>
        <div className="contentTeens">
          <h4>Jiu Jitsu For Kids & Teenagers</h4>

          <p style={{ marginTop: "5px", marginBottom: "5px" }}>
            We have set up our youth programme to accommodate students of
            different ages and skill levels
          </p>
          <div className="levels">
            <p>
              {" "}
              <SiTicktick style={{ marginRight: "8px", color: "#87CEEB" }} />
              Little champs (4-7 years old){" "}
            </p>
            <p>
              {" "}
              <SiTicktick style={{ marginRight: "8px", color: "#87CEEB" }} />
              Jr. Grapplers (8-11 years old)
            </p>
            <p>
              {" "}
              <SiTicktick style={{ marginRight: "8px", color: "#87CEEB" }} />
              Teens Grapplers (12-15 years old)
            </p>
          </div>

          <p>
            Our Jiu Jitsu programme is created to provide children and young
            people aged 4-15 with an environment that allows them to experience
            and understand core values like focus, discipline, persistence,
            cooperation and respect - while at the same time, having fun.
          </p>
          <p>
            We have seen the hugely positive effect this has on kids and young
            people, as they grow in confidence on the mat and throughout the
            rest of their lives. To make sure our younger members can stay
            consistent our timetable (hyperlink to timetable) has Youth Classes
            available Monday to Saturday. If you'd like more information or to
            have a chat about your child, please get in touch.
          </p>
        </div>
      </TextCard>
      <ImageCard
        id={1}
        btnBackground="#466CAB"
        image={teenagers}
        btnLabel={"SIGN UP NOW LIMITED SPACES"}
        handleClick={handleClickteenagers}
      />
    </div>
  );
};
const Row2 = () => {
  return (
    <div className="d-flex justify-content-between flex-lg-row flex-column gap-5 rowTeens">
      <TextCard
        smallHeading={"Prioritize Mental Well-being:"}
        id={"KidsAndTeens"}
      >
        <p>
          Nurture your mental health as you engage in the mindfulness practices
          inherent in Jiu-Jitsu. Our Jiu-Jitsu Acdemy explores how the art
          promotes stress relief, focus, and emotional resilience, providing
          teenagers with invaluable tools to navigate the complexities of
          adolescence. Discover the therapeutic benefits of Jiu-Jitsu as it
          becomes a sanctuary for self-expression,{" "}
          <strong> growth, and personal development.</strong>
        </p>
      </TextCard>

      <TextCard smallHeading={"Master Self-Defense:"}>
        <p>
          Equip yourself with essential self-defense skills that empower you to
          navigate the world with confidence and safety. Learn practical
          techniques tailored to real-life scenarios, empowering you to protect
          yourself and others in any situation. Our self-defense training isn't
          just about physical prowess; it's about cultivating a mindset of
          <strong> awareness, assertiveness, and personal safety.</strong>
        </p>
      </TextCard>
    </div>
  );
};

const Row3 = () => {
  const navigate = useNavigate();
  const handleClickover40 = () => {
    window.open(
      "https://bmjja.kicksite.net/public/landing_pages/5749825c-38e8-4280-adee-cb9240cfa9ea/submission/new",
      "_blank"
    );
  };
  return (
    <div
      className="d-flex justify-content-between flex-row flex-column gap-5"
      id="JiuJitsuLife"
    >
     

      <TextCard>
        <div className="overforty">
          <h4>Beginners Jiu Jitsu </h4>
          <div className="d-flex align-items-center gap-2 mb-5">
            <p className="mb-0">
              {" "}
              <SiTicktick style={{ marginRight: "8px", color: "#87CEEB" }} />
              Teenager’s & Adult’s ( 16+)
            </p>
          </div>
          {/* <SmallHeadingBlack>Unlock a Fountain of Youth:</SmallHeadingBlack> */}
          <p style={{ marginTop: "30px" }}>
            Discover the transformative power of Jiu Jitsu in maintaining and
            even rejuvenating your physical well-being. Our jiu jitsu Academy
            delves into how Jiu Jitsu can be tailored to suit the needs of
            individuals over 16, promoting flexibility, balance, and overall
            fitness. Learn how this dynamic martial art becomes a key ally in
            your journey to stay active and agile well into your golden years.
          </p>
        </div>
      </TextCard>
       <ImageCard
        id={1}
        btnBackground="#CEB290"
        image={over40}
        btnLabel={"SIGN UP NOW LIMITED SPACES"}
        handleClick={handleClickover40}
      />
    </div>
  );
};

const Row6 = () => {
  return (
    <div className="overfortyRow">
      <TextCard smallHeading={"Forge Lasting Connections:"}>
        <p style={{ marginTop: "20px" }}>
          Jiu Jitsu is not just a sport; it's a community. Engage in our
          insightful articles and testimonials, illustrating the camaraderie and
          lasting friendships that bloom on the mats. Connect with like-minded
          individuals who share your passion for personal growth and the art of
          Jiu Jitsu. Explore how the supportive atmosphere of a Jiu Jitsu gym
          becomes a social hub, fostering a{" "}
          <strong> sense of belonging and camaraderie.</strong>
        </p>
      </TextCard>
    </div>
  );
};

const Row4 = () => {
  return (
    <div
      className="d-flex justify-content-between  flex-lg-row flex-column gap-3"
      style={{ marginLeft: "30px" }}
    >
      <TextCard smallHeading={"Mental Health Mastery:"}>
        <p>
          Embark on a journey of self-discovery as we emphasize the profound
          impact Jiu Jitsu has on mental health. Stress relief, increased focus,
          and heightened cognitive function that are direct outcomes of
          consistent Jiu Jitsu practice. Explore the mindfulness aspect of the
          art and learn how it promotes mental resilience, self-discipline, and
          <strong> a positive outlook on life.</strong>
        </p>
      </TextCard>
      <TextCard smallHeading={"Expert Guidance and Resources:"}>
        <p>
          Take the first step towards a healthier, more fulfilling life by
          exploring the world of Jiu Jitsu tailored to those over 40. Join our
          community, embrace the art, and experience the multifaceted benefits
          that extend far beyond the mat. Welcome to a new chapter of vitality,
          connection, and mental resilience – welcome to
          <strong> "Jiu Jitsu Life Beyond 40."</strong>
        </p>
      </TextCard>
    </div>
  );
};

const Row5 = () => {
  // const navigate = useNavigate();
  const handleClickfemale = () => {
    window.open(
      "https://bmjja.kicksite.net/public/landing_pages/5749825c-38e8-4280-adee-cb9240cfa9ea/submission/new",
      "_blank"
    );
  };
  return (
    <div
      className="d-flex justify-content-between my-5 flex-row flex-column gap-3 rowFemale"
      id="femaleJiuJitsu"
    >
      <TextCard>
        <div className="rowFemaleDiv">
          <h4> Jiu Jitsu For Female</h4>
          <div className="d-flex align-items-center gap-2 mb-3">
            <p className="mb-0">
              {" "}
              <SiTicktick style={{ marginRight: "8px", color: "#87CEEB" }} />
              Female Jiu Jitsu (16+ years old)
            </p>
          </div>
          <p>
            Welcome to <strong> "EmpowerHer Jiu-Jitsu" – </strong> Embark on a
            transformative journey that not only hones your physical strength
            but also elevates your mental fortitude and empowers you with
            invaluable self-defense skills.
          </p>
        </div>

        <TextCard
          smallHeading={"A Safe Haven for Female Empowerment:"}
          className={"p-0"}
        >
          <p>
            Discover a supportive community where females of all ages and
            backgrounds come together to thrive. Our website is a beacon of
            inclusivity, offering a welcoming space for women to explore the art
            of Jiu-Jitsu. Dive into our resources and testimonials, and witness
            firsthand the inspiring stories of women who have found empowerment,
            camaraderie, and confidence through their Jiu-Jitsu journey.
          </p>
        </TextCard>

        <TextCard smallHeading={"Forge Lifelong Bonds:"} className={"p-0"}>
          <p>
            Experience the profound sense of sisterhood that blossoms within our
            Jiu-Jitsu community. Delve into articles and personal anecdotes
            illustrating the friendships forged on the mats – bonds that extend
            far beyond the training room. Connect with like-minded women who
            share your passion for growth, resilience, and mutual support.
          </p>
        </TextCard>
      </TextCard>

      <ImageCard
        id={1}
        btnBackground="#CEB290"
        image={female}
        btnLabel={"SIGN UP NOW LIMITED SPACES"}
        handleClick={handleClickfemale}
      />
    </div>
  );
};

const Row7 = () => {
  return (
    <div className="rowFemaleTwo">
      <TextCard
        smallHeading={"Prioritize Mental Well-being:"}
        className={"p-0"}
      >
        <p>
          Nurture your mental health as you delve into the meditative aspects of
          Jiu-Jitsu. Our website delves into the mindfulness practices inherent
          in the art, offering strategies to alleviate stress, anxiety, and
          promote mental clarity. Experience the therapeutic benefits of
          Jiu-Jitsu as it becomes a sanctuary for self-care and personal growth.
        </p>
      </TextCard>
      <TextCard smallHeading={"Join the Movement:"} className={"p-0 "}>
        <p>
          Step into your power and join the thriving community of empowered
          women at EmpowerHer Jiu-Jitsu. Whether you're seeking to improve your
          fitness, boost your confidence, or simply connect with like-minded
          individuals, our website provides the resources, support, and
          inspiration you need to embark on your Jiu-Jitsu journey.
        </p>
      </TextCard>
    </div>
  );
};

const CardGrid = () => {
  const navigate = useNavigate();
  return (
    <CardGridStyled>
      <Container style={{ maxWidth: "1263px" }}>
        <Row1 />
        <Row2 />
        <Row3 />
        <Row6 />
        <Row4 />
        <Row5 />
        <Row7 />
      </Container>
    </CardGridStyled>
  );
};

export default CardGrid;

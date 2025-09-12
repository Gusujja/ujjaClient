import React from "react";
import { JoiningContainer } from "./styles";
import { Container } from "react-bootstrap";
import {
  FlexContainer,
  SmallHeadingBlack,
  pureDark3,
} from "../../../components/GlobalStyle";
import iconTick from "../../../assets/icons/ic_tick.png";
import Button from "../../../components/common/Button/Button";
import ourMissionImg from "../../../assets/images/ourMissionImg.jpg";
import TextCard from "../Cards/TextCard";

const Joining = () => {
  const Array = [
    { keyPoint: "Develop self-confidence" },
    {
      keyPoint:
        "Become familiar with core concepts, ideas and philosophy of Jiu Jitsu",
    },
    { keyPoint: "Learn attacks, escapes, and submissions" },
    {
      keyPoint: "Gain experience in positional, situational, and live sparring",
    },
    { keyPoint: "Positional, Situational, and Live sparring" },
    { keyPoint: "Safe application of self-defence techniques" },
  ];

  //   const [openModal,setOpenModal]=useState(false)
  // const handleModal=()=>{
  // setOpenModal(true);
  // }
  // const closeModal=()=>{
  //   setOpenModal(false)
  // }

  const handleClick = () => {
    // Redirect to the provided link
    window.open(
      "https://bmjja.kicksite.net/public/landing_pages/5749825c-38e8-4280-adee-cb9240cfa9ea/submission/new ",
      "_blank"
    );
  };

  return (
    <JoiningContainer className="mt-3">
      
      <div className="bg-image py-6 bookContainer">
        <Container>
          <div style={{ marginLeft: "-14px"}}>
            <TextCard
              // background="#ffffffa6"
              // className={"mb-5"}
              id="MaleJiu"
            >
              <div>
              <h2>Valour Brighton</h2>
              <p>
                Provides a challenging yet safe and caring environment for all
                our members, no matter your age or ability. An environment where
                children, teenagers and adults can grow in their skills towards
                a rewarding life on and off the mats.
              </p></div>
            </TextCard>
          </div>
          <div className="secondPassage" >
            <h2>The Benefit of Joining our Jiu Jitsu Program</h2>
            <TextCard
              className="description"
              width="500px"
              background={"#405f74"}
            >
              <ul>
                {Array.map((c) => (
                  <li key={c}>
                    <img src={iconTick} alt="" />
                    {c.keyPoint}
                  </li>
                ))}
              </ul>
            </TextCard>
          </div>
          {/* <TextCard className="book-class text-center" width={"445px"}> */}
          <Button
            bgColor={pureDark3}
            borderColor={pureDark3}
            width={"290px"}
            className={"bookButton "}
            onClick={handleClick}
          >
            BOOK A FREE INTRO CLASS TODAY
          </Button>

          {/* <CustomModal
          isModalVisible={openModal}
          setIsModalVisible={setOpenModal}
          onCancel={closeModal}
          ><ContactForm/></CustomModal> */}
          {/* </TextCard> */}
        </Container>
      </div>
      {/* <div className="our-mission-section">
        <FlexContainer className="py-lg-0 py-5">
          
          <div className="image d-lg-block d-none">
            <img src={ourMissionImg} alt="Our mission banner" />
          </div>
        </FlexContainer>
         
      </div> */}
    {/* <div className="our-mission-section">
  <FlexContainer >
    <div
      className="image"
      style={{ backgroundImage: `url(${ourMissionImg})` }}
    >
      <div className="overlay-content">
        <h1>Our Mission</h1>
        <p>Making a difference with every step.</p>
      </div>
    </div>
  </FlexContainer>
</div> */}

<div >
  <div className="image">
    <img  src={ourMissionImg} alt="Our mission banner" className="hero-img" />
    {/* <div className="overlay-content">
      <h1>Our Mission</h1>
      <p>Making a difference with every step.</p>
    </div> */}
  </div>
</div>

    </JoiningContainer>
  );
};

export default Joining;

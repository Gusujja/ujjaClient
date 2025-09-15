import styled from "styled-components";
import { FaCheckCircle, FaStar, FaHeart, FaPlus } from "react-icons/fa";
import leftImage from "../../../assets/images/leftImage.jpg";
import rightImage from "../../../assets/images/rightImage.jpg";
import img1 from "../../../assets/icons/img1.png";
import img2 from "../../../assets/icons/img2.png";
import img3 from "../../../assets/icons/img3.png";
import img4 from "../../../assets/icons/img4.png";
import img5 from "../../../assets/icons/img5.png";
import img6 from "../../../assets/icons/img6.png";
import line from "../../../assets/icons/Line.png"

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 70vh;
  transition: all 0.5s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* stack on mobile */
    min-height: auto;
  }
`;

const ImageBox = styled.div`
  background: url(${(props) => props.bg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
  padding: 40px;
  text-align: left;
  min-height: 450px;
  transition: all 0.5s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    // background: rgba(0, 0, 0, 0.5); /* dark overlay */
    z-index: 1;
    transition: all 0.5s ease;
  }

  > div {
    position: relative;
    z-index: 2;
    max-width: 500px;
    transition: all 0.5s ease;

    h2 {
      font-size: 34px;
      margin-bottom: 20px;
      color: white;
      transition: all 0.5s ease;

      @media (max-width: 1600px) {
        font-size: 34px;
        text-align: center; /* center heading on mobile */
      }
      @media (max-width: 768px) {
        font-size: 34px;
        text-align: center; /* center heading on mobile */
      }
    }

   lineImg { 
    position: absolute;
    top: -55px;
    left: -55px;}

    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        font-size: 16px;
        margin: 10px 0;
        transition: all 0.5s ease;

       

        @media (max-width: 1600px) {
          font-size: 16px;
          justify-content: left; /* center list items on mobile */
        }
        @media (max-width: 768px) {
          font-size: 16px;
          justify-content: left; /* center list items on mobile */
        }
      }
    }
  }
`;

export default function DualImageSection() {
  
    const handleBookFree = () => {
    // Redirect to the provided link
    window.open("https://bmjja.kicksite.net/public/landing_pages/5749825c-38e8-4280-adee-cb9240cfa9ea/submission/new ", "_blank");
  };
  return (
    <SectionWrapper>
      <ImageBox bg={leftImage}>
        <div>
          {/* <img className="lineImg" src={line} alt="line" /> */}
          <h2>Kids & Teenagers</h2>
          <ul>
            <li>
              <img
                src={img1}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />
              Tracking your progress & attendance
            </li>
            <li>
              <img
                src={img2}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />
              Communicate directly with coaches & members
            </li>
            <li>
              <img
                src={img3}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />
              from 4 years to 15 years
            </li>
            <li>
              <img
                src={img4}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />
              Easy To access via train and buses
            </li>
            <li>
              <img
                src={img5}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />
              Easy to manage memberships
            </li>
            <li>
              <img
                src={img6}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />
              Links to valour videos library
            </li>
            <li onClick={handleBookFree} style={{cursor:"pointer"}}>
              <span style={{ marginRight: "1px", width: "15px" }}> +</span> Click here to book a free intro class today!
            </li>
          </ul>
        </div>
      </ImageBox>

      <ImageBox bg={rightImage}>
        <div>
          <h2>Adults & Over 40’s</h2>
          <ul>
            <li>
               <img
                src={img1}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />Tracking your progress & attendance
            </li>
            <li>
               <img
                src={img2}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              /> Communicate directly with coaches & members
            </li>
            <li>
               <img
                src={img3}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              />Over 20 classes a week
            </li>
            <li>
               <img
                src={img4}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              /> Easy To access via train and buses
            </li>
            <li>
              <img
                src={img5}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              /> Easy to manage memberships
            </li>
            <li>
               <img
                src={img6}
                alt=""
                style={{ marginRight: "15px", width: "15px" }}
              /> Links to valour videos library
            </li>
            <li onClick={handleBookFree} style={{cursor:"pointer"}}>
              <span style={{ marginRight: "1px", width: "15px", }}> +</span> Click here to book a free intro class today!
            </li>
          </ul>
        </div>
      </ImageBox>
    </SectionWrapper>
  );
}

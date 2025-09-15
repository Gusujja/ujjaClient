import styled from "styled-components";
import { FaCheckCircle, FaStar, FaHeart } from "react-icons/fa";
import leftImage from "../../../assets/images/leftImage.jpg";
import rightImage from "../../../assets/images/rightImage.jpg";

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 90vh;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
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
  padding: 60px 40px;
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); /* overlay for readability */
  }

  > div {
    position: relative;
    z-index: 2;
    max-width: 500px;

    h2 {
      font-size: 32px;
      margin-bottom: 20px;
      font-weight: bold;

      @media (max-width: 768px) {
        font-size: 24px;
        text-align: center;
      }
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        font-size: 18px;
        margin: 12px 0;

        svg {
          margin-right: 10px;
          color: #ffd700; /* gold icons */
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          font-size: 16px;
          justify-content: center;
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    text-align: center;
  }
`;

export default function DualImageSection() {
  return (
    <SectionWrapper>
      {/* Left image section */}
      <ImageBox bg={leftImage}>
        {/* <div>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <FaCheckCircle /> Trusted by thousands
            </li>
            <li>
              <FaStar /> High quality standards
            </li>
            <li>
              <FaHeart /> Customer focused
            </li>
          </ul>
        </div> */}
      </ImageBox>

      {/* Right image section */}
      <ImageBox bg={rightImage}>
        {/* <div>
          <h2>Our Mission</h2>
          <ul>
            <li>
              <FaCheckCircle /> Empower communities
            </li>
            <li>
              <FaStar /> Deliver excellence
            </li>
            <li>
              <FaHeart /> Build long-term impact
            </li>
          </ul>
        </div> */}
      </ImageBox>
    </SectionWrapper>
  );
}

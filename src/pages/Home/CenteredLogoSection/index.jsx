
import styled from "styled-components";
import logo from "../../../assets/images/VB-white.png"; 

const Section = styled.section`
  background-color: #076A99; 
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px; 
  min-height: 40vh; 

  img {
    width: 200px;
    height: auto;
    margin-bottom: 20px;
    

    @media (max-width: 768px) {
      width: 150px; /* smaller logo on mobile */
    }
  }

  p {
    font-size: 20px;
    line-height: 1.5;
  

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (min-width: 1200px) {
      font-size: 22px;
    }
  }
`;

const CenteredLogoSection = () => {
  return (
    <Section>
      <img src={logo} alt="Logo" />
      <p>
      Our mission is to help to preserve the foundations and principles of 
        <br />
        Jiu-jitsu whilst embracing a modern approach to learning.
      </p>
    </Section>
  );
};

export default CenteredLogoSection;

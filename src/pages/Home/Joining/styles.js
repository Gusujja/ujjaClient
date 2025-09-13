import styled from "styled-components";
import bgImg from "../../../assets/images/joining_bg.png";
import missionImg from "../../../assets/images/missionImage.jpg";
import {
  fontFamilyRegular,
  mediaDeviceMax,
  pureDark3,
} from "../../../components/GlobalStyle";
export const JoiningContainer = styled.div`
.bookContainer{
position:relative;
top:0;
}
h2{
font-size:20px;
font-weight:bold;
}
.secondPassage{
margin-top:0px;
padding-bottom: 20px;

}


  .bookButton{
    position: absolute;
    bottom: 32px; 
    right: 40px; 
    padding: 10px 20px;
    font-size: 14px;
    background-color: #1F3340; 
    color: #fff;
    border: none;
    /* border-radius: 5px; */
    cursor: pointer;
    transition: transform 0.2s, background-color 0.3s;
  font-family: ${fontFamilyRegular};

      } 

       .bookButton:hover {
    color: black;
    background-color: white; /* Hover state */
 
  }
  

.image{
    background: url(${missionImg}) no-repeat;
    background-position: center;
    background-size: cover;
}
.full-img {
  width: 100%;

  object-fit: contain;  /* ensures full image is visible */
 
}
 

  .bg-image {
    background: url(${bgImg}) no-repeat;
    background-position: center;
    background-size: cover;

    .text-card {
      width: 445px;

    


      @media screen and ${mediaDeviceMax.tabletS} {
        width: 350px;
      }

      @media screen and ${mediaDeviceMax.mobileXL} {
        width: 90%;
        margin: auto;
      }
    }
    .description {
      margin-top: 10px;
      margin-bottom:10px;
      .content {
        margin-top: 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          color: #fff;
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .our-mission-section {
 
.image{
width:100%;
}
    .text {
    color:white;
      font-size: 26px;
      font-weight: 900;
      font-family: ${fontFamilyRegular};
      letter-spacing: 1px;
      line-height: 37px;
      margin-left: 30px;

      @media screen and ${mediaDeviceMax.tabletL} {
        font-size: 23px;
        line-height: 30px;
      }

      @media screen and ${mediaDeviceMax.mobileBS} {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
   .our-mission-section .image {
  position: relative;
  height: 100vh;        /* always full screen */
  width: 100%;
  overflow: hidden;
 

.hero-img {

  height: 100%;
  width: 100%;
  object-fit: contain;     /* default = hero look */
  object-position: center;
  transition: object-fit 0.5s ease-in-out; /* smooth switch */
}

/* 📱 Mobile & Tablet: show full image */
@media (max-width: 991px) {
  .hero-img {
    object-fit: cover;   /* full image visible */
    background-color: #000; /* optional to avoid white gaps */
  }
}




`;

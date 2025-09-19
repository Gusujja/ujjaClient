import styled from "styled-components";
import bgImg from "../../../assets/images/image2.jpg";
import {
  fontFamilyRegular,
  mediaDeviceMax,
  pureDark3,
} from "../../../components/GlobalStyle";
export const JoiningContainer = styled.div`
.bookContainer{
position:relative;
top:0;
 min-height: 40vh; !important
}

.description {
  color: black !important;
}
.description li {
  color: black !important;
}
h2{
font-size:20px;
font-weight:bold;
}
.secondPassage{
margin-top:0px;
padding-bottom: 20px;


}
.qrCode{
 position: absolute;
    bottom: 85px; 
    right: 40px; 
    width: 150px;
    height:150px;
}

  .bookButton{
    position: absolute;
    bottom: 32px; 
    right: 40px; 
    padding: 10px 20px;
    font-size: 14px;
    // background-color: #1F3340; 
    background-color:var(--button-color);   
    color: black;
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
  @media (max-width: 768px) {
  .qrCode,
  .bookButton {
    position: static;   /* remove absolute positioning */
    display: block;     /* stack them vertically */
    margin: 15px auto 0; /* center them with margin */
    text-align: center; /* ensure button text stays centered */
  }

  .qrCode {
    width: 120px;   /* slightly smaller for mobile */
    height: 120px;
  }

  .bookButton {
    font-size: 16px; /* slightly larger tap target */
    padding: 12px 10px;
      
  }
}
/* Tablet + Mobile */
@media (max-width: 991px) {
  .qrCode,
  .bookButton {
    position: static;        /* remove absolute positioning */
    display: block;          /* stack vertically */
    margin: 15px auto 0;     /* center them */
    text-align: center;
  }

  .qrCode {
    width: 120px;
    height: 120px;
  }

  .bookButton {
    font-size: 16px;
    padding: 12px 10px;
  }
}





.full-img {
  width: 100%;
  height: auto;   
  display: block;
  margin-top: 0;
  min-height: 40vh; 
  object-fit: cover;
  object-position: left;
}

@media (max-width: 1600px) {
  .full-img {
    height: 41vh;
    object-fit: cover;
    object-position: left;
  }
}

@media (max-width: 1400px) {
  .full-img {
    height: 40vh;
    object-fit: cover;
    object-position: left;
  }
}

@media (max-width: 768px) {
  .full-img {
    height: 70vh;
    object-fit: cover;
    object-position: left;
  }
}

 

  .bg-image {
    background: url(${bgImg}) no-repeat;
    background-position: center;
    background-size: cover;

    .text-card {
      width: 560px;

    


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
      margin-bottom: -20px;
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

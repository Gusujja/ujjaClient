import styled from "styled-components";
import bgImg from "../../../assets/images/joining_bg.png";
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
margin-top:30px;
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
    background: ${pureDark3};
.image{
width:120%;
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
  width: 100%;
  height: 100vh;                 /* desktop = hero */
  background-size: cover;        
  background-position: center;   
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /* ✨ Smooth transition */
  transition: height 0.6s ease-in-out, background-position 0.6s ease-in-out;
}

.our-mission-section .image::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.overlay-content {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

/* 📱 Tablet & Mobile */
@media (max-width: 991px) {
  .our-mission-section .image {
    height: 50vh;                     /* shrink smoothly */
    background-position: top center;  /* crop top part */
  }

  .overlay-content h1 {
    font-size: 1.6rem;
  }

  .overlay-content p {
    font-size: 0.95rem;
  }
}

`;

// import React from "react";
// import { FooterStyled } from "./styles";
// import { Container } from "react-bootstrap";

// import footerBg from "../../assets/images/footer-bg.png";
// import fbIcon from "../../assets/icons/ic_fb.png";
// import instaIcon from "../../assets/icons/ic_insta.png";
// import twitterIcon from "../../assets/icons/ic_twitter.png";
// import ContactUs from "./ContactUs";
// // import ContactForm from "./ContactForm";
// const Footer = () => {
//   return (
//     <FooterStyled className="mt-5 mb-3" id="contactUsSection">
//       <Container>
//         <div className="footer-wrapper py-2">
//           <div className="bg_img">
//             <img src={footerBg} alt="" />
//           </div>
//           <div className="contact d-flex justify-content-between flex-wrap  ">
//             <div className="contact-text-section">
//               <div className="heading">
//                 <h3>Contact Us</h3>
//                 <h5>for more information</h5>
//                 <p>
//                   Our friendly team members will reach out to you either via
//                   email <br /> or phone, whichever method you prefer. Kindly
//                   inform us of the most <br /> convenient time for us to contact
//                   you.
//                 </p>
//               </div>
//               <div className="address d-block d-lg-none">
//                 <p>
//                  Kings gym 78-81 Queens Rd, Brighton and Hove, Brighton BN1 3XE
//                 </p>
//               </div>
//             </div>
//             <div className="contact-form-section">
//               <ContactUs />
//               {/* <ContactForm /> */}
//             </div>
//           </div>
//           <div className="address d-lg-block d-none position-absolute address-at-bottom">
//             <p>
//             Kings gym 78-81 Queens Rd, Brighton and Hove, Brighton BN1 3XE
//             </p>
//           </div>
//         </div>
//         {/* <div style={{ paddingTop: "100px" }}></div> */}
//         <div className="social-media-row d-flex align-items-center justify-content-center gap-5 mt-5 flex-wrap">
//           <div className="rights-reserved">
//             <p>
//               ©2024 Valour Brighton. All rights reserved.{" "}
//             </p>
//           </div>
//           <div className="social-media-icons d-flex gap-3">
//             <img src={fbIcon} alt="" />
//             <img src={instaIcon} alt="" />
//             <img src={twitterIcon} alt="" />
//           </div>
//         </div>
//       </Container>
//     </FooterStyled>
//   );
// };

// export default Footer;
// Footer.jsx
// Footer.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import logo from "../../assets/images/footer-logo.png";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiThreadsLogo } from "react-icons/pi";

// MAIN FOOTER
// FOOTER WRAPPER
const FooterWrapper = styled.footer`
  margin-top: 100px;
  background: #076A99;
  color: #fff;
  position: relative;
  padding: 80px 160px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 60vh;

  @media (max-width: 1200px) {
    padding: 60px 80px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 20px;
    min-height: auto; /* allow footer to grow naturally */
  }
`;

// LEFT SIDE (grid of 3 columns + logo/social)
const LeftSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  flex: 4;
  z-index: 2;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
    width: 100%;
    justify-items: center; /* centers children inside */
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: white;
  }

  a {
    font-size: 12px;
    margin: 6px 0;
    color: white;
    text-decoration: none;
        line-height: 0.5rem;

    &:hover {
      color: #ddd;
    }
  }

  p {
    color: white;
    font-size: 12px;
    margin: 4px 0;
    line-height: 0.7rem;
  }

  img.logoImg {
    width: 240px;
    margin-bottom: 15px;
    margin-right: 30px;

    @media (max-width: 992px) {
      width: 200px;
    }

    @media (max-width: 576px) {
      width: 150px;
    }
  }

  @media (max-width: 992px) {
    align-items: center; /* center items on small screens */
  }
`;

// SOCIAL ICONS
const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: -20px;
  margin-left: 95px;
  margin-right: 15px;
  justify-content: center;

  a {
    color: white;
    font-size: 22px;
    transition: 0.3s;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
    margin-top: 10px;
    margin-right: 0;
  }
`;

// FLOATING RIGHT SECTION
const RightSection = styled.div`
  flex: 1;
  position: absolute;
  right: 20px;
  top: -120px; /* floats above footer */
  width: 350px;
  max-width: 95%;

  @media (max-width: 1200px) {
    right: 40px;
    top: -100px;
    width: 320px;
  }

  @media (max-width: 992px) {
    position: relative;
    margin: 40px auto 0;
    top: auto;
    right: auto;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center; /* centers ContactUs form */
  }
`;

// NAV LINKS
const NavLink = styled(Link)`
  font-size: 12px;
  margin: 6px 0;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ddd;
  }
`;


export default function Footer() {
  return (
    <FooterWrapper>
      {/* Left 3 Columns */}
      <LeftSection>
        {/* Logo + Socials */}
        <Column>
          <img className="logoImg" src={logo} alt="Valour Brighton" />
          <SocialIcons>
            <a href="https://wa.me/07846997004" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.threads.net/" target="_blank" rel="noreferrer">
              <PiThreadsLogo />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </SocialIcons>
        </Column>

        {/* Navigation */}
        <Column>
          <h3>Navigation</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Programmes</NavLink>
          <NavLink to="/videosSection">Videos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Column>

        {/* Address */}
        <Column>
          <h3>Address</h3>
          <p>Kings Gym</p>
          <p>78-81 Queens Rd - Brighton and Hove</p>
          <p>Brighton - BN1 3XE</p>
          <p>Email: chat@valourbrighton.com</p>
          <p>Phone: 07846997004</p>
        </Column>
      </LeftSection>

      {/* Floating Contact Form */}
      <RightSection>
        <ContactUs />
      </RightSection>
    </FooterWrapper>
  );
}

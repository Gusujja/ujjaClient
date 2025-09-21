import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import logo from "../../assets/images/footer-logo.png";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { PiThreadsLogo } from "react-icons/pi";

// MAIN FOOTER
const FooterWrapper = styled.footer`
  margin-top: 100px;
  background: var(--secondary-color);
  // background: #076a99;
  color: #fff;
  position: relative;
  padding: 50px 160px 5px; /* add bottom padding for copyright */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column; /* change to column so bottom copyright stays */
  min-height: 40vh;

  @media (max-width: 1200px) {
    padding: 40px 80px 5px;
  }

  @media (max-width: 992px) {
    padding: 20px 20px 5px;
    align-items: center;
    text-align: center;
  }
`;

// LEFT SIDE (grid of 3 columns + logo/social)
const LeftSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: 100%;
  z-index: 2;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 30px;
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
    font-size: 16px;
    margin: 6px 0;
    color: white;
    text-decoration: none;
    line-height: 0.7rem;

    &:hover {
      color: #ddd;
    }
  }

  p {
    color: white;
    font-size: 16px;
    margin: 4px 0;
    line-height: 0.7rem;
  }

  img.logoImg {
    width: 240px;
    margin-bottom: 15px;
    margin-right: 30px;

    @media (max-width: 992px) {
      width: 200px;
      margin-right: 0;
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
    margin-top: -18px;
    margin-left: 0;
    // margin-right: -50px;
        gap: 5px;
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
  font-size: 14px;
  margin: 6px 0;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ddd;
  }
`;

// COPYRIGHT TEXT
const Copyright = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
  font-size: 16px;

  @media (max-width: 992px) {
    margin-top: 40px;
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
          {/* <SocialIcons>
            <a
              href="https://wa.me/07846997004"
              target="_blank"
              rel="noreferrer"
            >
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
          </SocialIcons> */}
        </Column>

        {/* Navigation */}
       <Column>
          <h3>Navigation</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Timetable</NavLink>
          {/* <NavLink to="/services">Programmes</NavLink>
          <NavLink to="/videosSection">Videos</NavLink> */}
          <NavLink to="/contact">Contact Us</NavLink>
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
        <div className="contact-form-section">
          <ContactUs />
        </div>
      </RightSection>

      {/* COPYRIGHT */}
      <Copyright >©2024 Valour Brighton. All rights reserved.</Copyright>
    </FooterWrapper>
  );
}

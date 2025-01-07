import styled from "styled-components";
import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const VideoSectionStyled = styled.div`

margin-top:50px;
.cards{
display:flex;
gap:20px;
}

.carousel-container {
  display: flex;
  gap: 20px; /* This will add spacing between the cards */
 
  overflow: hidden; /* Ensure the extra space doesn't affect layout */
}

.videoCard {
  margin: 10px; /* Adds spacing between cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px; /* Padding inside the card */
  max-width: 250px; /* Card width */
  flex-wrap: wrap;
}

.videoPreview iframe {
  width: 100%;
  height: 150px; /* Set a consistent height for video preview */
  border-radius: 8px;
}

.videoInfo {
  margin-top: 10px;
  text-align: center;
}

.videoInfo h6 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.videoInfo p {
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
}



.videoSectionHeading h4{
font-weight:600;
}

  .video-card {
    border: 1px solid #e7e5f2;
    border-radius: 10px 10px 0 0;
    margin: 0px 6px;
    display:flex;
    gap:20px;

    .thumbnail {
      .thumbnail-image {
        img {
          width: 100%;
        }
      }
    }
    .body {
      // padding: 10px;

      .title {
        h4 {
          font-size: 16px;
          min-width: 265px;

          @media screen and ${mediaDeviceMax.laptopL} {
            font-size: 14px;
          }
        }
      }
      .description {
        font-size: 14px;
        color: #333333;

        @media screen and ${mediaDeviceMax.laptopL} {
          font-size: 12px;
        }
      }
      .date {
        color: #4f4f4f;
        font-size: 12px;

        @media screen and ${mediaDeviceMax.laptopL} {
          font-size: 10px;
        }
      }
      .rating {
        div {
          font-size: 13px;
        }
      }
      .learn-more a {
        font-size: 12px;
        color: #1c394b;
        text-decoration: none;

        @media screen and ${mediaDeviceMax.laptopL} {
          font-size: 10px;
        }
      }
    }
  }
`;

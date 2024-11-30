import styled from "styled-components";
import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const VideoDetailsStyled = styled.div`
  .video-details-section {
    flex: 3;
margin-top: 7.3rem;


    @media screen and (max-width: 1200px) {
      flex: 3;
    }
    @media screen and ${mediaDeviceMax.tabletL} {
      flex: 100%;
    }
    .video-container {
      width: 100%;
      height: 584px;
      border-radius: 10px;
     
   
     

      video {
        width: 100%;
        height: 100%;
      border-radius: 10px;
      }
    }
    .details {
      border: 1px solid #dedef9;
      padding: 20px 18px;
      border-radius: 10px;
    

      p {
        font-size: 13px;
        line-height: 25px;
        letter-spacing: 1px;
      }
    }
  }
  .videos-section {
  margin-top: 7.3rem;
    flex: 1;
   margin-right: 0px;
    @media screen and ${mediaDeviceMax.tabletL} {
      height: 600px;
      overflow: auto;
      border: 1px solid #dedef9;
      border-radius: 6px;
    }
    .video-card {
    
      
      .image {
        width: 128px;
        height: 80px;
        
      
        
        img {
     
          width: 100%;
          height: 100%;
            
      
        }
      }
    }
  }
`;

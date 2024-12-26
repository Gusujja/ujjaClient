import styled from "styled-components";
// import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const VideoCardStyled = styled.div`
  padding-bottom: 10px;


  

  // .videos_videoCard {
  //   background-color: #fff;
  //   border-radius: 10px;
  //   overflow: hidden;
  //   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  // }

 .videos_videoCard {
  width: 300px; 
  height: 280px; 
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9; 
  border-radius: 8px;
  overflow: hidden; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease; 
}

.videos_videoCard:hover {
  transform: scale(1.05); 
}



  .play_Button {
    display: flex;
    position: relative;
    right: 10px;
    float: left;
    cursor: pointer;
  }

  .play_Button p {
    margin-top: 4px;
    margin-left: 5px;
    font-size: 14px;
  }

  .image-container {
    position: relative;
    img {
      border-radius: 10px 10px 0px 0px;
      width: 100%;
    }
    .time {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: #000000cc;
      color: white;
      padding: 0 5px;
      border-radius: 2px;

      p {
        font-size: 7px;
        margin-top: 10px;
        letter-spacing: 1px;
      }
    }
  }
`;

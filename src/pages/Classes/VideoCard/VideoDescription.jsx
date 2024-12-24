import React from "react";
import styled from "styled-components";

const VideoDescriptionStyled = styled.div`
  padding: 0px 10px;
  align-items: center;
    // margin-top:-35px;
 border-radius: 10px;



  .heading {
    color: #0f0f0f;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
       margin-bottom: 10px;
    margin-top: 10px;
  }
  .views-and-likes {
    color: #606060;
    font-size: 10px;
    letter-spacing: 1px;
    // display: flex;
    align-items: center;
    gap: 4px;
     margin-bottom: 10px;

   
  }
`;
const VideoDescription = ({ heading, description, smallDescription, views,time }) => {

  return (
    <VideoDescriptionStyled>
   <h4 className="heading">{heading}</h4>
<div className="views-and-likes">
<p className="description">{description}</p>
<p className="smallDescription">{smallDescription}</p>
  

</div>
    </VideoDescriptionStyled>
  );
};

export default VideoDescription;

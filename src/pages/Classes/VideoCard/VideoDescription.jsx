import React from "react";
import styled from "styled-components";

const VideoDescriptionStyled = styled.div`
  padding: 8px 10px;
  align-items: center;
    // margin-top:-35px;
 border-radius: 10px;


  .heading {
    color: #0f0f0f;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    margin-bottom: 3px;
    // margin-top:-35px;
  }
  .views-and-likes {
    color: #606060;
    font-size: 12px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 4px;

   
  }
`;
const VideoDescription = ({ heading,description, smallDescription, views,time }) => {

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

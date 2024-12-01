import React from "react";
import styled from "styled-components";

const VideoDescriptionStyled = styled.div`
  padding: 8px 10px;
      margin-top: 40px;
  border-radius: 10px;
 

  .heading {
    color: #0f0f0f;
    font-weight: 600;
    font-size: 14px;
    align-items: center;
    // margin-bottom: 3px;
      margin-top:-30px;
      //  line-height: 1.5; /* Adjusts the spacing between lines */

  }
  .views-and-likes {
    color: #606060;
    font-size: 12px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 4px;

   
  }
    .smallDescription{
    margin-left:-5px
      color: #606060;
    font-size: 12px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 4px;}
`;
const VideoDescriptionOfDetail = ({ heading,description,smallDescription }) => {

  return (
    <VideoDescriptionStyled>
   <h4 className="heading"> <span>{heading.slice(0, 20)}</span>
  <br />
  <span>{heading.slice(20, 40)+ '...'}</span></h4>
  <p className="description">{description}</p>
  <div>

    {/* <p>Brighton Marina</p> */}
<div className="views-and-likes">
    <p className="smallDescription">{smallDescription.slice(0,20)+'...'}</p>
  
  </div>

</div>
    </VideoDescriptionStyled>
  );
};

export default VideoDescriptionOfDetail ;

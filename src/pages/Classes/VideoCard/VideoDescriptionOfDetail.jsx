import React from "react";
import styled from "styled-components";

const VideoDescriptionStyled = styled.div`
  padding: 8px 10px;
  // margin-bottom: 20px
      // margin-top: 20px;
  border-radius: 10px;
 
.text_portion{

 margin-bottom: 20px
}


  .heading {
    color: #0f0f0f;
    font-weight: 400;
    font-size: 12px;
    // align-items: center;
    // margin-bottom: 50px;
      // margin-top:30px;
      //  line-height: 1.5; /* Adjusts the spacing between lines */

  }
  .views-and-likes {
    color: #606060;
    font-size: 10px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 4px;

   
  }
    .smallDescription{
    margin-left:-5px
      color: #606060;
    font-size: 10px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 4px;}
    //  margin-bottom: 70px;
`;
const VideoDescriptionOfDetail = ({ heading,description,smallDescription }) => {

  return (
    <VideoDescriptionStyled>
      <div className="text_portion">
   <h4 className="heading"> <span>{heading.slice(0, 25)}</span>
  <br />
  <span>{heading.slice(25, 50)+ '...'}</span></h4>
  <p className="description">{description}</p>
  <div>

    {/* <p>Brighton Marina</p> */}
<div className="views-and-likes">
    <p className="smallDescription">{smallDescription.slice(0,20)+'...'}</p>
  
  </div>
  </div>
</div>
    </VideoDescriptionStyled>
  );
};

export default VideoDescriptionOfDetail ;

import React from "react";
import { TextCardStyled } from "./styles";
import { SmallHeadingBlack } from "../../../components/GlobalStyle";
import { CardHeadingBlack } from "../../../components/GlobalStyle";


const TextCard = ({ smallHeading, heading, children, className, width, background,id }) => {
  return (
    <TextCardStyled
      className={"text-card " + className}
      width={width}
      background={background}
      id={id}
    >
      {heading && <CardHeadingBlack>{heading}</CardHeadingBlack>}
      {smallHeading && <SmallHeadingBlack>{smallHeading}</SmallHeadingBlack>}
      <div className="content">{children}</div>
    </TextCardStyled>
  );
};

export default TextCard;

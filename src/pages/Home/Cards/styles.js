import styled from "styled-components";
import { mediaDeviceMax } from "../../../components/GlobalStyle";

export const ImageCardStyled = styled.div`
  
  .button {
    padding: 10px 0;
    font-size: 16px;
    text-transform: uppercase;
    background: ${(prop) => prop.btnbackground};
  }
`;

export const TextCardStyled = styled.div`
  padding: 22px 20px;
  border-radius: 9px 9px 0px 0;
  background: ${(prop) => prop.background || "transparent"};

  @media screen and ${mediaDeviceMax.laptop} {
    padding: 16px;
  }

  .content {
    font-size: 13px;
    font-weight: 400;
    margin-top: 10px;
    line-height: 21px;
    letter-spacing: 1px;

    p {
      color: #2a4556;
      margin-bottom: 10px;
    }
  }
`;

export const CardGridStyled = styled.div`

.contentTeens{
margin: 30px 0px 0px 50px;
}



.contentTeens h4{
font-size: 22px;
  font-weight: 600;
  letter-spacing: 0px;
}

.rowTeens{
margin-top: 35px;
}

.rowTeens p{
margin: 20px 0px 30px 0px;
}

.levels {
margin: 30px 0px 30px 0px;

}
.overforty h4{
font-size: 22px;
  font-weight: 600;
  letter-spacing: 0px;
}



.overforty{
margin: 50px 0px 0px 50px;

}

.overforty p {
margin: 15px 0px 40px 0px;
}

.overfortyRow{
  text-align: justify;
  text-justify: inter-word;
  margin: 30px 0px 0px 30px;
  }

.rowFemale{
margin-left: 50px;
}
.rowFemale p{
margin-top: 10px;
margin-bottom: 35px;
}

.rowFemaleDiv h4{
font-size: 22px;
  font-weight: 600;
  letter-spacing: 0px;
}

.rowFemaleTwo{
  text-align: justify;
  text-justify: inter-word;
margin: 0px 0px 30px 50px;

}


  .text-card {
    flex: 2;
  }
  .image-card {
    flex: 1;
    display: flex;
    flex-direction: column;

    .image {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

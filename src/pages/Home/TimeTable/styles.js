import styled from "styled-components";
import {
  fontFamilyMedium,
  fontFamilyRegular,
} from "../../../components/GlobalStyle";

export const TimeTableStyled = styled.div`

background: var(--bg-color) !important;

.my-custom-table th.col-heading {
  font-weight: normal !important; /* override Bootstrap bold */
}

.timeTableContainer{
background: white !important;
}
.timetableHeading p{
margin: 0px 0px 0px 50px;
margin-bottom: 35px;
margin-top: 10px;
}

.timetableHeading p{
font-size: 6px;
}


.timetableHeading h4 {
font-weight:600;



margin: 0px 0px 40px 50px;
// color: var(--text-color-reverse) !important;

@media (max-width: 1400px) {
 .timetableHeading h4{
font-weight:600;
margin: 0px 0px 35px 50px;

}
@media (max-width: 1600px) {
  .timetableHeading h4{
font-weight:600;
margin: 0px 0px 11px -137px;

}



}
  .table-responsive {
    &::-webkit-scrollbar {
      width: 12px;
      height: 3px;
    }

     &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-button {
      display: none;
    }
  }
  .table {
    border: 1px solid #ebdede !important;
    thead {
      tr {
        .col-heading {
          color: #302c36;
          font-size: 12px;
  font-weight: normal;     
      font-family: ${fontFamilyRegular};
        }
      }
    }
    tbody {
      tr {
        td {
          min-width: 183px;
          padding: 0 !important;
          white-space: nowrap;
        }
        p {
          font-size: 12px;
          color: #000000;
          display: inline-block;
        }
        .col-time {
          width: 43px;
          text-align: center;
          padding: 4px 3px !important;
          background: #ffc0cb;
          border: 1px solid #ebdede;
          font-family: ${fontFamilyMedium};
          display: inline-block;
        }
      }
    }
  }
`;


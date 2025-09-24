import React from "react";
import { TimeTableStyled } from "./styles";
// import HeadingWithLine from "../Headings/HeadingWithLine";
import { Container } from "react-bootstrap";
import { EVENTS_DB } from "./DB";
const TimeTable = () => {
  const daysOfWeek = EVENTS_DB.map((e) => e.day);
  const timeSlots = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const timetable = {
    Monday: [...timeSlots],
    Tuesday: [...timeSlots],
    Wednesday: [...timeSlots],
    Thursday: [...timeSlots],
    Friday: [...timeSlots],
    Saturday: [...timeSlots],
    Sunday: [...timeSlots],
  };

  return (
    <TimeTableStyled className="timeTableMain" id={"timeTableSection"}>
      <div className="timetableHeading">
        <h4>Valour Brighton Weekly Time Table</h4>
        {/* <p>
          27 The Waterfront, Marina Way, Brighton Marina, Brighton and Hove,
          Brighton BN2 5WA
        </p> */}
      </div>
      <Container className="timeTableContainer" style={{ maxWidth: "1600px" }}>
        <div className="table-responsive mt-4" style={{ width: "101%" }}>
          <table className="table table-bordered table-sm">
            <thead>
              <tr>
                {daysOfWeek.map((day, index) => (
                  <td key={index} className="col-heading ps-3">
                    {day}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((timeSlot, timeIndex) => (
                <tr key={timeIndex}>
                  {daysOfWeek.map((day, dayIndex) => {
                    const oneDayEvents = EVENTS_DB.find((e) => e.day === day);
                    const oneHour = timetable[day][timeIndex];
                    const eventAtHour = oneDayEvents.events.find(
                      (e) => e.time === oneHour
                    );

                    // Function to find color according to event time
                    function findColor(day, time) {
                      // Find the day object in EVENTS_DB
                      // Check if the day object exists
                      if (oneDayEvents) {
                        // Check if the colors object exists for the day
                        if (oneDayEvents.colors) {
                          // Check if the time exists in the colors object
                          if (oneDayEvents.colors[time]) {
                            // Return the color for the specific time
                            return oneDayEvents.colors[time];
                          }
                        }
                      }

                      // Return null if color is not found
                      return null;
                    }

                    const evt = eventAtHour?.event;
                    return (
                      <React.Fragment key={dayIndex}>
                        <td
                          style={{
                            background:
                              evt !== null
                                ? findColor(day, oneHour)
                                : "transparent",
                          }}
                        >
                          <p className="col-time" style={{fontSize:"11px"}}>{oneHour}</p>

                          <p
                            style={{
                              padding: evt ? "5px" : "0px", fontSize: "11px" }}
                          >
                            {evt}
                          </p>
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </TimeTableStyled>
  );
};

export default TimeTable;

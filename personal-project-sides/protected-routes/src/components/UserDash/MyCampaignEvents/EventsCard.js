import React from "react";
import moment from "moment";
import "./Events.css";

const EventsCard = props => {
  return (
    <div className="event">
      <h2>{props.eventName}</h2>
      <p>
        {props.eventStart} {props.startTime}-{props.endTime}
      </p>
      <p>{props.desc}</p>
      <p />

      <div>
        <p>{props.location}</p>
        <p>{props.address}</p>
        <p>{props.city}</p>
        <p>{props.state}</p>
        <p>{props.zip}</p>
      </div>
      <button
        onClick={e => {
          console.log(props.campaign_id, props.event_id, props.user_id);
          props.schedule(props.campaign_id, props.event_id, props.user_id);
          console.log(props);
        }}
      >
        Sign Up To Volunteer
      </button>
    </div>
  );
};

export default EventsCard;

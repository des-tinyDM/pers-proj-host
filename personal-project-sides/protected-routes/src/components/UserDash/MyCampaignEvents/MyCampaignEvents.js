import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { getEvents, scheduleUserAsVol } from "../../../ducks/campaignReducer";
import EventsCard from "./EventsCard";
import moment from "moment";
import ScheduledEvents from "./ScheduledEventCard";

class MyCampaignEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreating: false,
      eventName: "",
      eventType: "",
      eventDate: "",
      eventTimeStart: "",
      eventTimeEnd: "",
      eventLocation: "",
      eventAddress: "",
      eventCity: "",
      eventState: "",
      eventZip: null
    };
    this.handleEventName = this.handleEventName.bind(this);
    this.handleEventType = this.handleEventType.bind(this);
    this.handleEventDate = this.handleEventDate.bind(this);
    this.handleEventTimeStart = this.handleEventTimeStart.bind(this);
    this.handleEventTimeEnd = this.handleEventTimeEnd.bind(this);
    this.handleEventLocation = this.handleEventLocation.bind(this);
    this.handleEventAddress = this.handleEventAddress.bind(this);
    this.handleEventCity = this.handleEventCity.bind(this);
    this.handleEventState = this.handleEventState.bind(this);
    this.handleEventZip = this.handleEventZip.bind(this);
  }

  handleCreate(e) {
    this.setState({ isCreating: !this.state.isCreating });
    console.log(this.state.isCreating);
  }
  handleEventName(e) {
    this.setState({ eventName: e.target.value });
    console.log(e.target.value);
  }
  handleEventType(e) {
    this.setState({ eventType: e.target.value });
    console.log(e.target.value);
  }
  handleEventDate(date) {
    this.setState({ eventDate: date });
    console.log(date);
  }
  handleEventTimeStart(e) {
    this.setState({ eventTimeStart: e.target.value });
    console.log(e.target.value);
  }
  handleEventTimeEnd(e) {
    this.setState({ eventTimeEnd: e.target.value });
    console.log(e.target.value);
  }
  handleEventLocation(e) {
    this.setState({ eventLocation: e.target.value });
    console.log(e.target.value);
  }
  handleEventAddress(e) {
    this.setState({ eventAddress: e.target.value });
    console.log(e.target.value);
  }
  handleEventCity(e) {
    this.setState({ eventCity: e.target.value });
    console.log(e.target.value);
  }
  handleEventState(e) {
    this.setState({ eventState: e.target.value });
    console.log(e.target.value);
  }
  handleEventZip(e) {
    this.setState({ eventZip: e.target.value });
    console.log(e.target.value);
  }

  componentDidMount() {
    this.props.getEvents(this.props.joined[0].campaign_id);
    console.log(`LOOK HERE`, this.props);
  }
  render() {
    let eventsMapped = this.props.events.map((e, i) => {
      let sday = moment(e.date_start).format("MMM Do, YYYY");
      let stime = moment(e.time_start, "HH:mm:ss").format("LT");
      let eday = moment(e.date_end).format("MMM Do, YYYY");
      let etime = moment(e.time_end, "HH:mm:ss").format("LT");
      return (
        <EventsCard
          key={i}
          event_id={e.event_id}
          eventName={e.event_name}
          eventStart={sday}
          startTime={stime}
          eventEnd={eday}
          endTime={etime}
          desc={e.description}
          location={e.location}
          address={e.address}
          city={e.city}
          stateName={e.state}
          zip={e.zip}
          campaign_id={this.props.joined[0].campaign_id}
          user_id={this.props.user.user_id}
          schedule={this.props.scheduleUserAsVol}
        />
      );
    });
    return (
      <div>
        <h1>Upcoming Events</h1>
        {this.props.joined[0].role === "Admin" && (
          <button onClick={e => this.handleCreate(e)}>Add an Event</button>
        )}

        {this.state.isCreating ? (
          <div>
            <form>
              <input
                onChange={e => this.handleEventName(e.target.value)}
                placeholder="Event Name"
                value={this.state.eventName}
              />
              <input
                onChange={e => this.handleEventType(e.target.value)}
                placeholder="Event Type"
                value={this.state.eventType}
              />
              <input
                onChange={e => this.handleEventType(e.target.value)}
                placeholder="Event Type"
                value={this.state.eventType}
                type="date"
              />
              <DatePicker
                selected={this.state.eventDate}
                onChange={this.handleEventDate}
                style={{ width: "100%" }}
              />
              <input type="time" />
              <input
                onChange={e => this.handleEventLocation(e.target.value)}
                placeholder="Event Location"
                value={this.state.value}
              />
              <input
                onChange={e => this.handleEventAddress(e.target.value)}
                placeholder="Event Address"
                value={this.state.value}
              />
              <input
                onChange={e => this.handleEventCity(e.target.value)}
                placeholder="Event City"
                value={this.state.value}
              />
              <input
                onChange={e => this.handleEventState(e.target.value)}
                placeholder="Event State"
                value={this.state.value}
              />
              <input
                onChange={e => this.handleEventZip(e.target.value)}
                placeholder="Zip"
                value={this.state.value}
              />
            </form>
          </div>
        ) : null}
        <ScheduledEvents />
        {!this.props.events.length ? (
          <h1>No Events Scheduled at this time.</h1>
        ) : (
          <div>
            <h1>Events:</h1>
            {eventsMapped}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.campaignReducer,
    scheduled: state.campaignReducer.scheduled
  };
};
export default connect(mapStateToProps, {
  getEvents,
  scheduleUserAsVol
})(MyCampaignEvents);

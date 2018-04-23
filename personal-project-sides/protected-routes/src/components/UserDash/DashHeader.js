import React from "react";
import { Link } from "react-router-dom";
import "./DashHeader.css";

const DashHeader = props => {
  return (
    <nav className="dash-header">
      <Link to="/">
        <h1> Dash</h1>
      </Link>
      <Link to="/profile">My Profile</Link>
      <Link to="/mycampaign">My Campaign</Link>
      <Link to="/mycampaign/events">Events</Link>
      <Link to="/mycampaign/data">Data</Link>
    </nav>
  );
};

export default DashHeader;

import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import logo from "./logo.jpg";
import UserDash from "./components/UserDash/UserDash";
import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/UserDash/ProfilePage/ProfilePage";
import { getUser } from "./ducks/userReducer";
import Forbidden from "./components/Forbidden";
import CampaignList from "./components/CampaignList/CampaignList";
import MyCampaignInfo from "./components/UserDash/MyCampaignInfo/MyCampaignInfo";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
    // console.log(this.props);
  }

  render() {
    // console.log(this.props.user);

    return (
      <div className="App">
        <header className="website-header">
          <img
            className="logo"
            src="https://arizonachristian.edu/wp-content/uploads/2017/06/logo-placeholder-300x120.png"
            alt="The website's logo."
          />
          <div>About</div>
          <div>Contact</div>
          <div>OtherThing</div>
          <div>
            {this.props.user.authid ? (
              <div>
                <a href={process.env.REACT_APP_LOGOUT}>
                  <button>Logout</button>
                </a>
              </div>
            ) : (
              <a href={process.env.REACT_APP_LOGIN}>
                <button>Login to Volunteer</button>
              </a>
            )}
          </div>
        </header>
        <Switch>
          <Route
            exact
            path="/campaigns"
            render={() =>
              this.props.user.authid ? (
                <CampaignList />
              ) : (
                <h1>Login to View Campaigns</h1>
              )
            }
          />

          <Route
            path="/"
            component={this.props.user.authid ? UserDash : Forbidden}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.userReducer
  };
};
export default withRouter(connect(mapStateToProps, { getUser })(App));

import * as auth from "../auth";
// import "../styles/SpotifyProfile.css";
import React from "react";

class SpotifyProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      connected: false,
    };
  }

  /*--- HANDLERS -------------------------------------------------------------*/

  handleAuth = async() => {
    auth.checkCode();
    this.setState({connected: true});
  }

  /*--------------------------------------------------------------------------*/

  render() {

    if (!this.state.connected) {
      return (
        <section id="profile">
          <h3 className="">
            Looks like you haven't connected to Spotify yet. Please Sign In.
          </h3>
          <button className="btn btn-secondary" onClick={this.handleAuth}>
            Sign in with Spotify!
          </button>
        </section>
      )
    }

    else {
      return (
        <section id="profile">
          <h3 className="">Spotify Connected!</h3>
          <ul>
            <li className="d-flex justify-content-between">
              Username:&nbsp;
              <div id="displayName" className="profile-info"></div>
            </li>
            <li className="d-flex justify-content-between">
              User ID:&nbsp;
              <div id="id" className="profile-info"></div>
            </li>
            <li className="d-flex justify-content-between">
              Email:&nbsp;
              <div id="email" className="profile-info"></div>
            </li>
            {/* If profile image gets added later, id="imgUrl". */}
          </ul>
        </section>
      );
    }
  }
}

export default SpotifyProfile;
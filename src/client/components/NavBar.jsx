import React from "react";
import { Link } from "react-router-dom";
import { openSocialModal } from "src/client/actions/socialModalActions";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";
import { fbLogoutSuccess } from "src/client/actions/fbActions";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    if(this.props.loggedInType === "FACEBOOK") {
      window.FB.logout();
      this.props.dispatch(fbLogoutSuccess());
    };
  }

  render() {
    return (
      <div className="navbar">
        <div className="nav-logo"></div>
        <div className="nav-items hidden" id="navItem">
          <ul id="nav-ul">
            <li><Link to="/">HOME</Link></li>
            <li><a href="#products">PRODUCTS</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li>RECEPIES</li>
            <li><a href="#contact">CONTACT</a></li>
            <li hidden={this.props.isUserLoggedIn} onClick={()=>{this.props.dispatch(openSocialModal(true))}}>LOGIN</li>
            <li hidden={!this.props.isUserLoggedIn} onClick={()=>{this.logout()}}>LOGOUT</li>
          </ul>
        </div>
        <div className="hamburger" id="hamburger">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.loginStatus.isUserLoggedIn,
    loggedInType: state.loginStatus.type
  }
};

export default connect(mapStateToProps)(NavBar);

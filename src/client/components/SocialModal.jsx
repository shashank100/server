import React from "react";
import Modal from 'react-modal';
import { closeSocialModal } from "src/client/actions/socialModalActions";
import {
  fbLoginSuccess,
  fbLoginFailure
} from "src/client/actions/fbActions";
import {
  updateUser
} from "src/client/actions/userActions";
import { connect } from "react-redux";
import FacebookLogin from 'react-facebook-login';

class SocialModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  };

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '352535541958252',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.2'
      });

      FB.AppEvents.logPageView();

      FB.getLoginStatus(function(response) {
        switch (response.status) {
          case "connected":
            this.props.dispatch(fbLoginSuccess());
            break;
          case "not_authorized":
            break;
          case "unknown":
            break;
        }
      }.bind(this));
    }.bind(this);;
  }

  closeModal() {
    this.props.dispatch(closeSocialModal(false));
  };

  responseFacebook(response) {
    if (response.status === "unknown") {
      this.props.dispatch(fbLoginFailure());
      console.log("not logged in")
    } else {
      console.log(response);
      this.props.dispatch(updateUser({
        userId: response.id,
        name: response.name,
        email: response.email
      }));
      this.props.dispatch(fbLoginSuccess());
    }

    this.props.dispatch(closeSocialModal(false));
  };

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        width                 : '50%',
        height                : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    return (
      <Modal
          isOpen={this.props.open}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
        <FacebookLogin
          appId="352535541958252"
          autoLoad={true}
          fields="name,email"
          callback={this.responseFacebook} />
      </Modal>
    );
  };
};

export default connect()(SocialModal);

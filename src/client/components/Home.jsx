import React from "react";
import NavBar from "src/client/components/NavBar";
import Banner from "src/client/components/Banner";
import ProblemSection from "src/client/components/ProblemSection";
import SolutionSection from "src/client/components/SolutionSection";
import Products from "src/client/components/Products";
import Recepie from "src/client/components/Recepie";
import ContactUs from "src/client/components/ContactUs";
import Footer from "src/client/components/Footer";
import SocialModal from "src/client/components/SocialModal";
import styles from "src/client/styles/homepage.scss";
import { connect } from "react-redux";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <NavBar />
        <Banner />
        <ProblemSection />
        <SolutionSection />
        <Products />
        <Recepie />
        <ContactUs />
        <Footer />
        <SocialModal open={this.props.isSocialModalOpen} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isSocialModalOpen: state.socialModal.isOpen
  };
};

export default connect(mapStateToProps)(Home);

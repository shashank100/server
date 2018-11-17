import React from "react";
import sip from "src/client/images/sip.png";
import eggWhite from "src/client/images/egg-white.png";

const Products = () => {
  return (
    <div id="products" className="products">
      <h2>PRODUCTS</h2>
      <div className="product-group">
        <div className="product-item">
          <img src={sip} height="300" alt="Eggsential Sip chocolate hazelnut" />
          <div className="product-details">
            <p className="product-name">EGGSENTIAL SIP CHOCOLATE HAZELNUT</p>
            <p className="product-line"></p>
            <p className="pricing">
              <span className="old-price">&#8377;100</span>
              <span className="new-price">&#8377;90</span>
            </p>
          </div>
        </div>
        <div className="product-item">
          <img src={sip} height="300" alt="Eggsential Sip elaichi kesar" />
          <div className="product-details">
            <p className="product-name">EGGSENTIAL SIP ELAICHI KESAR</p>
            <p className="product-line"></p>
            <p className="pricing">
              <span className="old-price">&#8377;100</span>
              <span className="new-price">&#8377;90</span>
            </p>
          </div>
        </div>
        <div className="product-item">
          <img src={eggWhite} height="280" style={{"margin-top": 20 + "px"}} alt="Eggsential egg white" />
          <div className="product-details">
            <p className="product-name">EGGSENTIAL SIP CHOCOLATE HAZELNUT</p>
            <p className="product-line"></p>
            <p className="pricing">
              <span className="old-price">&#8377;500</span>
              <span className="new-price">&#8377;425</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

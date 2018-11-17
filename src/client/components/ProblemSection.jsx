import React from "react";
import problemOne from "src/client/images/prob-1.png";
import problemTwo from "src/client/images/prob-2.png";
import problemThree from "src/client/images/prob-3.png";
import problemFour from "src/client/images/prob-4.png";

const ProblemSection = () => {
  return (
    <div className="problem margin" id="problem">
      <h2>PROBLEM</h2>
      <div className="problem-block">
          <div>
              <img src={problemOne} alt="ready to consume" className="ready-to-consume" />
              <p>Inconvenience while cracking, separating egg white from yolk and shell disposal</p>
          </div>
          <div>
              <img src={problemTwo} alt="safe to consume" className="safe-to-consume" />
              <p>Prone to harmful pathogenic infestation</p>
          </div>
          <div>
              <img src={problemThree} alt="ready to consume" className="ready-to-consume" />
              <p>Undisclosed MFG. and best before dates</p>
          </div>
          <div>
              <img src={problemFour} alt="convinent to use" className="safe-to-consume" />
              <p>Difficulty in storage and handling</p>
          </div>
      </div>
    </div>
  );
};

export default ProblemSection;

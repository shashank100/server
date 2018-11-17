import React from "react";
import easyToConsume from "src/client/images/easy_to_consume.webp";
import noGerms from "src/client/images/no_germs.webp";
import convinent from "src/client/images/convinent.webp";
import easeOfStorage from "src/client/images/ease_of_storage.webp";
import consistent from "src/client/images/consistent.webp";

const SolutionSection = () => {
  return (
    <div className="solution margin">
        <h2>OUR SOLUTION</h2>
        <div className="solution-block">
          <div>
              <img src={easyToConsume} alt="ready to consume" className="ready-to-consume" />
              <p className="solution-text">Ready to consume egg products</p>
          </div>
          <div>
              <img src={noGerms} alt="safe to consume" className="safe-to-consume" />
              <p className="solution-text">Double pasteurized and homogenized that makes eggs safer to consume</p>
          </div>
          <div>
              <img src={easyToConsume} alt="ready to consume" className="ready-to-consume" />
              <p className="solution-text">Save yourself from a messy and smelly kitchen</p>
          </div>
          <div>
              <img src={convinent} alt="convinent to use" className="safe-to-consume" />
              <p className="solution-text">Reduce storage space</p>
          </div>
          <div>
              <img src={easeOfStorage} alt="easy to store" className="safe-to-consume" />
              <p className="solution-text">Separated egg whites to save your time and effort</p>
          </div>
          <div>
              <img src={consistent} alt="easy to store" className="safe-to-consume" />
              <p className="solution-text">Batch to batch consistency while ensuring long term product quality</p>
          </div>
      </div>
    </div>
  );
};

export default SolutionSection;

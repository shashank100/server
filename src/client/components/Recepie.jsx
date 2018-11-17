import React from "react";
import poster from "src/client/images/poster.webp";

const Recepie = () => {
  return (
    <div>
      <div className="recepie">
        <div className="crack">
          <h2>CRACK a SNACK</h2>
        </div>
        <div className="health">
          <h2>HEALTH &amp; BEAUTY</h2>
        </div>
      </div>
      <div className="about-us" id="about">
        <div className="about-us-background"></div>
        <div className="video">
          <video id="bgVideo" muted loop poster={poster} autoPlay>
            <source src="./video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="about-us-text-container">
          <div>
            <h2>
                ABOUT US
              </h2>
              <p>
                EGGSENTIAL Liquid EGG WHITES are born in INDIA with the natural goodness of nutrition
                that will add advantage to anyone's goal who desires to be in best healthy form. Eggs
                has always been the most preferred choice as a source of Protein and to ease this purpose
                Eggsential egg whites will evolve egg consumption super convenient.
              </p>
              <p>
                Our pure liquid egg whites are separated from yolks, pasteurized, packed and shipped to our
                consumers to ensure freshness and flavor.
              </p>
              <p>So now INDIA ..CHEERS! To pure nourishment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepie;

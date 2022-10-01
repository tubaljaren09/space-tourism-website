import React, { useState } from "react";

// Images
import Vehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import Capsule from "../assets/technology/image-space-capsule-landscape.jpg";

const Technology = () => {
  const [imageClicked, setImageClicked] = useState({
    Vehicle: true,
    Spaceport: false,
    Capsule: false,
  });
  const onClickHandler = (order) => {
    const resetImages = {
      Vehicle: false,
      Spaceport: false,
      Capsule: false,
    };
    setImageClicked({
      ...resetImages,
      [order]: true,
    });
  };
  return (
    <div className="technology-main">
      <div className="technology-container">
        <h2>
          <span>03</span> SPACE LAUNCH 101
        </h2>
        <div className="images">
          {imageClicked.Vehicle && (
            <img src={Vehicle} alt="space" width="100%" height="170px" />
          )}
          {imageClicked.Spaceport && (
            <img src={Spaceport} alt="space" width="100%" height="170px" />
          )}
          {imageClicked.Capsule && (
            <img src={Capsule} alt="space" width="100%" height="170px" />
          )}
        </div>
        <div className="buttons">
          <button
            className={imageClicked.Vehicle ? "active" : ""}
            onClick={() => onClickHandler("Vehicle")}
          >
            1
          </button>
          <button
            className={imageClicked.Spaceport ? "active" : ""}
            onClick={() => onClickHandler("Spaceport")}
          >
            2
          </button>
          <button
            className={imageClicked.Capsule ? "active" : ""}
            onClick={() => onClickHandler("Capsule")}
          >
            3
          </button>
        </div>
        <div className="content-container">
          <div className="title">
            {imageClicked.Vehicle && (
              <div>
                <h2>THE TERMINOLOGY ...</h2>
                <h1>LAUNCH VEHICLE</h1>
              </div>
            )}
            {imageClicked.Spaceport && (
              <div>
                <h2>THE TERMINOLOGY ...</h2>
                <h1>SPACEPORT</h1>
              </div>
            )}
            {imageClicked.Capsule && (
              <div>
                <h2>THE TERMINOLOGY ...</h2>
                <h1>SPACE CAPSULE</h1>
              </div>
            )}
          </div>
          <div className="paragraphs">
            {imageClicked.Vehicle && (
              <p>
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            )}
            {imageClicked.Spaceport && (
              <p>
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            )}
            {imageClicked.Capsule && (
              <p>
                A space capsule is an often-crewed spacecraft that uses a
                blunt-body reentry capsule to reenter the Earth's atmosphere
                without wings. Our capsule is where you'll spend your time
                during the flight. It includes a space gym, cinema, and plenty
                of other activities to keep you entertained.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;

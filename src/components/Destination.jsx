import React, { useState } from "react";

// Images
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";

const Destination = () => {
  const [imageClicked, setImageClicked] = useState({
    Moon: true,
    Mars: false,
    Europa: false,
    Titan: false,
  });
  const onClickHandler = (order) => {
    const resetImages = {
      Moon: false,
      Mars: false,
      Europa: false,
      Titan: false,
    };
    setImageClicked({
      ...resetImages,
      [order]: true,
    });
  };
  return (
    <div className="destination-main">
      <div className="destination-container">
        <h2>
          <span>01</span> PICK YOUR DESTINATION
        </h2>
        <div className="content-container">
          <div className="images">
            {imageClicked.Moon && (
              <img src={Moon} width="170px" height="170px" alt="MoonPic" />
            )}
            {imageClicked.Mars && (
              <img src={Mars} width="170px" height="170px" alt="MarsPic" />
            )}
            {imageClicked.Europa && (
              <img src={Europa} width="170px" height="170px" alt="EuropaPic" />
            )}
            {imageClicked.Titan && (
              <img src={Titan} width="170px" height="170px" alt="TitanPic" />
            )}
          </div>
          <ul>
            <li
              className={imageClicked.Moon ? "active" : ""}
              onClick={() => onClickHandler("Moon")}
            >
              MOON
            </li>
            <li
              className={imageClicked.Mars ? "active" : ""}
              onClick={() => onClickHandler("Mars")}
            >
              MARS
            </li>
            <li
              className={imageClicked.Europa ? "active" : ""}
              onClick={() => onClickHandler("Europa")}
            >
              EUROPA
            </li>
            <li
              className={imageClicked.Titan ? "active" : ""}
              onClick={() => onClickHandler("Titan")}
            >
              TITAN
            </li>
          </ul>
          <div className="names">
            {imageClicked.Moon && <h1>MOON</h1>}
            {imageClicked.Mars && <h1>MARS</h1>}
            {imageClicked.Europa && <h1>EUROPA</h1>}
            {imageClicked.Titan && <h1>TITAN</h1>}
          </div>
          <div className="paragraphs">
            {imageClicked.Moon && (
              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            )}
            {imageClicked.Mars && (
              <p>
                Don’t forget to pack your hiking boots. You’ll need them to
                tackle Olympus Mons, the tallest planetary mountain in our solar
                system. It’s two and a half times the size of Everest!
              </p>
            )}
            {imageClicked.Europa && (
              <p>
                The smallest of the four Galilean moons orbiting Jupiter, Europa
                is a winter lover’s dream. With an icy surface, it’s perfect for
                a bit of ice skating, curling, hockey, or simple relaxation in
                your snug wintery cabin.
              </p>
            )}
            {imageClicked.Titan && (
              <p>
                The only moon known to have a dense atmosphere other than Earth,
                Titan is a home away from home (just a few hundred degrees
                colder!). As a bonus, you get striking views of the Rings of
                Saturn.
              </p>
            )}
          </div>
          <hr />
          <div className="distance">
            {imageClicked.Moon && (
              <div className="distance-container">
                <h3>
                  AVG. DISTANCE
                  <br />
                  <br />
                  <span>384,000 KM</span>
                </h3>
                <br />
                <h3>
                  EST. TRAVEL TIME
                  <br />
                  <br />
                  <span>3 DAYS</span>
                </h3>
              </div>
            )}
            {imageClicked.Mars && (
              <div className="distance-container">
                <h3>
                  AVG. DISTANCE
                  <br />
                  <br />
                  <span>225 MIL. KM</span>
                </h3>
                <br />
                <h3>
                  EST. TRAVEL TIME
                  <br />
                  <br />
                  <span>9 MONTHS</span>
                </h3>
              </div>
            )}
            {imageClicked.Europa && (
              <div className="distance-container">
                <h3>
                  AVG. DISTANCE
                  <br />
                  <br />
                  <span>628 MIL. KM</span>
                </h3>
                <br />
                <h3>
                  EST. TRAVEL TIME
                  <br />
                  <br />
                  <span>3 YEARS</span>
                </h3>
              </div>
            )}
            {imageClicked.Titan && (
              <div className="distance-container">
                <h3>
                  AVG. DISTANCE
                  <br />
                  <br />
                  <span>1.6 BIL. KM</span>
                </h3>
                <br />
                <h3>
                  EST. TRAVEL TIME
                  <br />
                  <br />
                  <span>7 YEARS</span>
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

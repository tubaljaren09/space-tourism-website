import React, { useState } from "react";

// Images
import Douglas from "../assets/crew/image-douglas-hurley.png";
import Mark from "../assets/crew/image-mark-shuttleworth.png";
import Victor from "../assets/crew/image-victor-glover.png";
import Anousheh from "../assets/crew/image-anousheh-ansari.png";
import Circle from "../assets/shared/circle.png";

const Crew = () => {
  const [imageClicked, setImageClicked] = useState({
    Douglas: true,
    Mark: false,
    Victor: false,
    Anousheh: false,
  });
  const onClickHandler = (order) => {
    const resetImages = {
      Douglas: false,
      Mark: false,
      Victor: false,
      Anousheh: false,
    };
    setImageClicked({
      ...resetImages,
      [order]: true,
    });
  };
  // const slides = [Douglas, Mark, Victor, Anousheh];

  // const [currentIndex, setCurrentIndex] = useState(0);
  // // Trying to fix this cicle opacity onclick
  // const [isActive, setIsActive] = useState(false);

  // // const goToPrev = () => {
  // //   const isFirstSlide = currentIndex === 0;
  // //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  // //   setCurrentIndex(newIndex);
  // // };

  // // const goToNext = () => {
  // //   const isLastSlide = currentIndex === slides.length - 1;
  // //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  // //   setCurrentIndex(newIndex);
  // // };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  //   setIsActive(!isActive);
  // };
  // width="250px"
  //             height="300px"
  return (
    <div className="crew-main">
      <div className="crew-container">
        <h2>
          <span>02</span> MEET YOUR CREW
        </h2>
        <div className="content-container">
          <div className="images">
            {imageClicked.Douglas && (
              <img src={Douglas} width="250px" height="300px" alt="MoonPic" />
            )}
            {imageClicked.Mark && (
              <img src={Mark} width="250px" height="300px" alt="MarsPic" />
            )}
            {imageClicked.Victor && (
              <img src={Victor} width="250px" height="300px" alt="EuropaPic" />
            )}
            {imageClicked.Anousheh && (
              <img src={Anousheh} width="250px" height="300px" alt="TitanPic" />
            )}
          </div>
          <div className="dots-container">
            <img
              className={imageClicked.Douglas ? "active" : ""}
              onClick={() => onClickHandler("Douglas")}
              src={Circle}
              alt="dots"
              width="10px"
              height="10px"
            />
            <img
              className={imageClicked.Mark ? "active" : ""}
              onClick={() => onClickHandler("Mark")}
              src={Circle}
              alt="dots"
              width="10px"
              height="10px"
            />
            <img
              className={imageClicked.Victor ? "active" : ""}
              onClick={() => onClickHandler("Victor")}
              src={Circle}
              alt="dots"
              width="10px"
              height="10px"
            />
            <img
              className={imageClicked.Anousheh ? "active" : ""}
              onClick={() => onClickHandler("Anousheh")}
              src={Circle}
              alt="dots"
              width="10px"
              height="10px"
            />
          </div>
          <div className="title">
            {imageClicked.Douglas && (
              <div>
                <h2>COMMANDER</h2>
                <h1>DOUGLAS HURLEY</h1>
              </div>
            )}
            {imageClicked.Mark && (
              <div>
                <h2>MISSION SPECIALIST</h2>
                <h1>MARK SHUTTLEWORTH</h1>
              </div>
            )}
            {imageClicked.Victor && (
              <div>
                <h2>PILOT</h2>
                <h1>VICTOR GLOVER</h1>
              </div>
            )}
            {imageClicked.Anousheh && (
              <div>
                <h2>FLIGHT ENGINEER</h2>
                <h1>ANOUSHEH ANSARI</h1>
              </div>
            )}
          </div>
          <div className="paragraphs">
            {imageClicked.Douglas && (
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            )}
            {imageClicked.Mark && (
              <p>
                Mark Richard Shuttleworth is the founder and CEO of Canonical,
                the company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space
                as a space tourist.
              </p>
            )}
            {imageClicked.Victor && (
              <p>
                Pilot on the first operational flight of the SpaceX Crew Dragon
                to the International Space Station. Glover is a commander in the
                U.S. Navy where he pilots an F/A-18.He was a crew member of
                Expedition 64, and served as a station systems flight engineer.{" "}
              </p>
            )}
            {imageClicked.Anousheh && (
              <p>
                Anousheh Ansari is an Iranian American engineer and co-founder
                of Prodea Systems. Ansari was the fourth self-funded space
                tourist, the first self-funded woman to fly to the ISS, and the
                first Iranian in space.{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;

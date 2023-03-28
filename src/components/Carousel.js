import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tooltip from "@mui/material/Tooltip";
import "../styles/Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = [
    "Condensing Boilers",
    "Weatherstrip Windows",
    "Insulate Your Windows",
    "Low-flow Showerhead",
    "Faucet Aerator",
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          className="updateArrows"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <ArrowLeftIcon />
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <div>
              <Tooltip className="tooltip" title={titles[index]} arrow>
                <button
                  id="activateButtons"
                  className={`${index === activeIndex ? "active" : ""}`}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  {""}
                </button>
              </Tooltip>
            </div>
          );
        })}
        <button
          className="updateArrows"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

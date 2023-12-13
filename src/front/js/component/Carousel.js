import React, { useContext, useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = ({  }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "IRT",
      image: require("../../img/irbdivetackle_1_f.jpg"),
    },
    {
      title: "Marlin Jumping",
      image: require("../../img/MarlinJump.jpg"),
    },
    {
      title: "IRT inside",
      image: require("../../img/IRTinside1.jpg"),
    },
    {
      title: "snook",
      image: require("../../img/Snook_ontheLine.jpg"),
    },
    {
      title: "Ollies Cove",
      image: require("../../img/IRTinside2.jpg"),
    },
    {
      title: "Boat",
      image: require("../../img/aboveBoat.jpg"),
    },

  ];

  return (
    <>
      <div className="carousel">
        <div className="inner"
            style={{transform: `translate:(-${activeIndex *100})`}}>
          {items.map((item) => {
            return <CarouselItem item={item}/>;
          })}
        </div>
        <div className="carousel-buttons">
          <button>
          <span class="material-symbols-outlined">
            arrow_back_ios
          </span>
          </button>
          <div className="indicators">
            ...
          </div>
          <button>
            <span class="material-symbols-outlined">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Carousel;
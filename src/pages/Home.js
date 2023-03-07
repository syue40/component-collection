import React, { useEffect, useState } from "react";
import library from "../images/library.png";
import { RandomQuoteGenerator } from "../components/RandomQuoteGenerator";
import Carousel, { CarouselItem } from "../components/Carousel";

export const Home = (props) => {
  const linksList = [
    "Xnl26qh5RXc",
    "FNcJyTqUC4U",
    "iQaycSD5GWE",
    "TtcUQel6c64",
    "4CeFuBDvWxc",
  ];

  return (
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5 p-2">
        <div class="flex justify-center col-span-1 p-2 m-1 rounded-lg bg-white shadow-lg border">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-2">
            <img
              src={library}
              alt="library"
              width={460}
              height={460}
              class="shadow-lg border"
            />
            <div class="flex justify-center col-span-1 p-2 m-1 ">
              <RandomQuoteGenerator></RandomQuoteGenerator>
              {/* <p>asdf</p> */}
            </div>
          </div>
        </div>
        <div class="flex justify-center col-span-1 p-2 m-1 rounded-lg bg-white shadow-lg border">
          <p>
            This library loads data from public APIs or uses datasts collected
            from Kaggle for public use. The components stored here are meant to
            serve as code templates for future use.
          </p>
        </div>
        <div class="flex justify-center col-span-1 md:col-span-2 p-2 m-1 rounded-lg bg-white shadow-lg border">
          <div className="mb-3">
            <Carousel>
              {linksList.map((item) => {
                return (
                  <CarouselItem>
                    <iframe
                      width="100%"
                      height="510"
                      src={`https://www.youtube.com/embed/${item}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import library from "../images/library.png";
import { RandomQuoteGenerator } from "../components/RandomQuoteGenerator";
import Carousel, { CarouselItem } from "../components/Carousel";

export const Home = (props) => {
  const linksList = [
    "8iU8LPEa4o0",
    "CLeZyIID9Bo",
    "Iyp7wpyZ3BA",
    "gwDoRPcPxtc",
    "Nwj9iVq0g5Y",
  ];

  return (
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-4 mt-5 p-2">
        <div class="flex h-fit justify-center col-span-1 p-2 m-1 rounded-lg bg-white shadow-lg border">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 row-span-1 gap-2 p-2">
            <div class="flex justify-center col-span-2 row-span-1 p-5 m-2">
              <figure>
                <img src={library} alt="library" class="shadow-lg border" />
                <figcaption class="mt-5">
                  <i>Drawing by Dall-E. Prompt: library pencil sketch</i>
                </figcaption>
              </figure>
            </div>
            <div class="flex justify-center items-center md:col-span-1 lg: col-span-1 sm:col-span-2 row-span-2 p-2 m-1 ">
              <RandomQuoteGenerator></RandomQuoteGenerator>
            </div>
          </div>
        </div>
        <div class="flex h-fit justify-center col-span-1 row-span-2 p-2 m-1 rounded-lg bg-white shadow-lg border">
          <div class="p-5 m-5">
            <h2 class="font-bold text-xl mt-5">
              Welcome to the Component Library
            </h2>
            <p class="text-left p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <hr/>
            <p class="text-left p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="text-left p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="text-left p-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div class="flex h-fit justify-center items-center col-span-1 md:col-span-1 p-2 m-1 rounded-lg bg-white shadow-lg border ml-15 mr-15">
          <div className="mb-2 ml-12 mr-12">
            <div>
              <h2 class="p-2 mb-2 font-bold">Top Chillhop Playlist Carousel</h2>
            </div>
            <Carousel>
              {linksList.map((item) => {
                return (
                  <CarouselItem>
                    <iframe
                      width="100%"
                      height="420"
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

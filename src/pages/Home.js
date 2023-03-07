import React, { useEffect, useState } from "react";
import library from "../images/library.png";
import { RandomQuoteGenerator } from "../components/RandomQuoteGenerator";
import Carousel, { CarouselItem } from "../components/Carousel";
import ReactMarkdown from "react-markdown";

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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-4 mt-5 p-2">
        <div class="flex justify-center col-span-1 p-2 m-1 rounded-lg bg-white shadow-lg border">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 row-span-1 gap-2 p-2">
            <div class="flex justify-center col-span-2 row-span-1 p-2 m-1">
              <figure>
              <img
              src={library}
              alt="library"
              class="shadow-lg border"
            />
            <figcaption class="mt-5"><i>New Favorite Drawing by Dall-E. Prompt: library pencil sketch</i></figcaption>
            </figure>
            </div>
            <div class="flex justify-center items-center md:col-span-1 lg: col-span-1 sm:col-span-2 row-span-2 p-2 m-1 ">
              <RandomQuoteGenerator></RandomQuoteGenerator>
              {/* <p>asdf</p> */}
            </div>
          </div>
        </div>
        <div class="flex justify-center col-span-1 row-span-2 p-2 m-1 rounded-lg bg-white shadow-lg border">
          <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
        </div>
        <div class="flex justify-center items-center col-span-1 md:col-span-1 p-2 m-1 rounded-lg bg-white shadow-lg border ml-15 mr-15">
          <div className="mb-2 ml-12 mr-12">
            <div>
              <h2 class="p-2 mb-2 font-bold">A Simple Video Carousel Component</h2>
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

import React, { useEffect, useState } from "react";
import library from "../images/library.png";

export const Home = (props) => {
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
              <p>asdf</p>
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
          <p>P3</p>
        </div>
      </div>
    </div>
  );
};

"use client";

import { FetchContext } from "./Carousel.jsx";
import React, { useContext } from "react";
import "./vanilla.js";

const Items = ({ data, currentSlide, api }) => {
  console.log(data);
  if (api == "catapi") {
    const items = data.map((item, indx) => {
      console.log("currentSlide :>> ", currentSlide);
      return (
        <div
          key={data.id}
          className="slide"
          style={{ transform: `translateX(${100 * (indx - currentSlide)}%)` }}
        >
          <img src={item.url} alt="" />
        </div>
      );
    });
    return items;
  } else if (api == "shibeapi") {
    const items = data.map((item, indx) => {
      return (
        <div
          key={item}
          className="slide"
          style={{ transform: `translateX(${100 * (indx - currentSlide)}%)` }}
        >
          <img src={item} alt="" />
        </div>
      );
    });
    return items;
  }
};

export const CarouselItems = ({ currentSlide }) => {
  const { data, error, isSuccess, api } = useContext(FetchContext);
  return isSuccess ? (
    <Items data={data} api={api} currentSlide={currentSlide} />
  ) : (
    <div>Loading...</div>
  );
};

"use client";


import { FetchContext } from "./Carousel.jsx";
import React, { useContext } from "react";
import "./vanilla.js";

const Items = ({ data,currentSlide}) => {
  console.log(data);
  const items = data.map((item,indx) => {
    console.log('currentSlide :>> ', currentSlide);
    return (
      <div key={data.id} className="slide" style = {{transform:`translateX(${100 * (indx - currentSlide)}%)`}}>
        <img src={item.url} alt="" width={item.width} height={item.height} />
      </div>
    );
  });
  return items; 
};

export const CarouselItems = ({currentSlide}) => {
  const {data,error,isLoading} = useContext(FetchContext);
  return !isLoading ? <Items data={data} currentSlide = {currentSlide} /> : <div>Loading...</div>;
};

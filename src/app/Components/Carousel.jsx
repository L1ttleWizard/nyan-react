"use client";
import { useState } from "react";
import { CarouselItems } from "./CarouselItems";
import React from "react";
import { useGetCatApiQuery } from "../redux/getCatApi";
export const FetchContext = React.createContext();

export const Carousel = () => {
  let { data, error, isLoading,refetch } = useGetCatApiQuery();
  const handleNextSlide = (index) => {
    if (index == 9) {
      setCurrentSlide(0);
      refetch();
    } else {
      setCurrentSlide(index + 1);
    }
  };

  const handlePrevSlide = (index) => {
    if (index == 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index - 1);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <FetchContext.Provider value = {{data,error,isLoading}}>
      <div className="hide slider animate__lightSpeedInLeft animate__animate  d">
        <CarouselItems currentSlide={currentSlide} />
        <button
          onClick={() => {
            handlePrevSlide(currentSlide);
          }}
          className="btn btn-prev"
        >
          <span className="wrapper">❯</span>
        </button>
        <button
          onClick={() => {
            handleNextSlide(currentSlide);
          }}
          className="btn btn-next"
        >
          <span className="wrapper"> ❮</span>
        </button>
      </div>
    </FetchContext.Provider>
  );
};

"use client";
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { Suspense, useState } from "react";
import { CarouselItems } from "./CarouselItems";
import React from "react";
import { useGetCatApiQuery } from "../redux/getCatApi";
export const FetchContext = React.createContext();

export const Carousel = () => {
  let { data, error, isLoading, refetch } = useGetCatApiQuery();
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
    <FetchContext.Provider value={{ data, error, isLoading }}>
      <div className="hide slider animate__lightSpeedInLeft animate__animate  d">
        <Suspense fallback={<div>Loading...</div>}>
          <CarouselItems currentSlide={currentSlide} />
        </Suspense>
        <button
          onClick={() => {
            handlePrevSlide(currentSlide);
          }}
          className="btn btn-prev"
        >
          <span className="wrapper"><BsFillArrowLeftCircleFill/></span>
        </button>
        <button
          onClick={() => {
            handleNextSlide(currentSlide);
          }}
          className="btn btn-next"
        >
          <span className="wrapper"><BsFillArrowRightCircleFill/></span>
        </button>
      </div>
    </FetchContext.Provider>
  );
};

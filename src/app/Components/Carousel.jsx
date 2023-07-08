"use client";
import { useState } from "react";
import { CarouselItems } from "./CarouselItems";
import { Provider } from "react-redux";
import { store } from "../redux/store";
let it;
export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  return (
    <div className="hide slider animate__lightSpeedInLeft animate__animated">
      <Provider store={store}>
        <CarouselItems currentSlide={currentSlide}/>
      </Provider>
      <button
        onClick={() => {
          setCurrentSlide(currentSlide - 1);
        }}
        className="btn btn-prev"
      >
        <span className="wrapper">❯</span>
      </button>
      <button
        onClick={() => {
          setCurrentSlide(currentSlide + 1);
        }}
        className="btn btn-next"
      >
        <span className="wrapper"> ❮</span>
      </button>
    </div>
  );
};

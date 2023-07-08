"use client";
import { useGetCatApiQuery } from "../redux/getCatApi.js";
import { Provider, useDispatch } from "react-redux";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { Store, configureStore } from "@reduxjs/toolkit";
import "./vanilla.js";
import styles from "../page.css";
import Image from "next/image.js";
import store from "../redux/store.js";

const Items = ({ data,currentSlide}) => {
  console.log(data);
  const items = data.map((item) => {
    console.log('currentSlide :>> ', currentSlide);
    return (
      <div key={data.id} className="slide" style = {{transform:`translateX(${currentSlide*100}%)`}}>
        <img src={item.url} alt="" width={item.width} height={item.height} />
      </div>
    );
  });
  return items;
};

export const CarouselItems = ({currentSlide}) => {
  const { data, error, isLoading } = useGetCatApiQuery();
  return !isLoading ? <Items data={data} currentSlide = {currentSlide} /> : <div>Loading...</div>;
};

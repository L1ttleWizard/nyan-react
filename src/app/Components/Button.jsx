"use client";
import React, { useEffect, useState } from "react";
import {Music} from "./Music"
export const Button = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    document.body.style.backgroundImage = state
      ? `url("https://c.tenor.com/r8QaTDj3U6IAAAAi/nyan-cat-poptart-cat.gif")`
      : null;
  }, [state]);
  return (
    <>
      <button
        className="death"
        onClick={() => {
          setState(!state);
          console.log(state);
        }}
      >
        Toggle Death Mode
      </button>
      {state && <Music />}
    </>
  )
}


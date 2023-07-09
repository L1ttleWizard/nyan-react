"use client";
import React from "react";

export const Authors = () => {
  return (
    <div className="tooltip hide">
      Authors
      <span className="tooltiptext">
        Made by{" "}
        <a className="links" href="https://github.com/reocat">
          reocat
        </a>{" "}
        and{" "}
        <a className="links" href="https://github.com/L1ttleWizard">
          L1ttleWizard
        </a>
      </span>
    </div>
  );
};

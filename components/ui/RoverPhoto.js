"use client";

import React from "react";

export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <img
        src={src}
        alt={`Photo by ${roverName}`}
        style={{ width: "100%", maxWidth: "300px", borderRadius: "8px" }}
      />
      <p><strong>Rover:</strong> {roverName}</p>
      <p><strong>Date:</strong> {date}</p>
    </div>
  );
};
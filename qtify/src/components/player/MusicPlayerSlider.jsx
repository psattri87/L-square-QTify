import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Styles from "./Player.module.css";

export default function MusicPlayerSlider() {
  const duration = 218;
  const [position, setPosition] = useState(38);
  const formatDuration = (value) =>{
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <div className={Styles.box}>
      <p className>
        {formatDuration(position)}
      </p>
      <Slider
        aria-label="time-indicator"
        value={position}
        min={0}
        step={1}
        max={duration}
        className={Styles.slider}
        onChange={(_, value) => setPosition(value)}
        sx={(t) => ({
          '& .MuiSlider-thumb': {
            width: 6,
            height:6,
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: `0px 0px 0px 8px ${'rgb(255 255 255 / 25%)'}`,
            },
            '&.Mui-active': {
              boxShadow: `0px 0px 0px 8px ${'rgb(255 255 255 / 35%)'}`
            },
          },
          '& .MuiSlider-rail': {
            color: "white",
            opacity: 100,
          },
          
        })}
      />
      <p>
        {formatDuration(duration)}
      </p>
    </div>
  );
}

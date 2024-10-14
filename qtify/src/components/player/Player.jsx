import React, { useState, useContext } from "react";
import styles from "./Player.module.css";
import MusicPlayerSlider from "./MusicPlayerSlider";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";
import PauseCircleRoundedIcon from "@mui/icons-material/PauseCircleRounded";
import { ApiContext } from "../../context/ApiContext";

export default function Player() {
  const [pause, setPause] = useState(false);
  const { song } = useContext(ApiContext);
  const { image, title, durationInMs } = song;
  console.log(image);

  return (
    <>
      <div className={styles.playerBox}>
        <div className={styles.playerSongCard}>
          <div className={styles.imageBox}>
            <img src={`${image}`} alt="song_image" />
          </div>
          <div className={styles.contentBox}>
            <h4>{song.title}</h4>
            <h5>Album Name</h5>
          </div>
        </div>
        <div className={styles.player}>
          {pause ? (
            <PlayCircleFilledWhiteRoundedIcon
              className={styles.button}
              onClick={() => {
                setPause(false);
              }}
            />
          ) : (
            <PauseCircleRoundedIcon
              className={styles.button}
              onClick={() => {
                setPause(true);
              }}
            />
          )}
          <MusicPlayerSlider className={styles.slider} />
        </div>
      </div>
    </>
  );
}

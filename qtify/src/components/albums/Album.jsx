import React, { useContext } from "react";
import styles from "./Album.module.css";
import Carousel from "../carousel/Carousel";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { ApiContext } from "../../context/ApiContext";
import Card from "../card/Card";

export default function Album({ name = "", data, type }) {
  const [isCollapse, setCollapse] = useState(false);
  const { setSong } = useContext(ApiContext);
  const handleSongClick = (song) => {
    setSong(song);
  };

  return (
    <div className={styles.album}>
      <div className={styles.textButtonContainer}>
        <div className={styles.name}>{name}</div>
        {type === "album" && (
          <div
            className={styles.carouselToggleButton}
            onClick={() => setCollapse(!isCollapse)}
          >
            {!isCollapse ? "Show all" : "Collapse"}
          </div>
        )}
      </div>
      {type === "song" && (
        <div className={styles.tabs}>
          <div>
            All<div></div>
          </div>
          <div>
            Rock<div></div>
          </div>
          <div>
            Pop<div></div>
          </div>
          <div>
            Jazz<div></div>
          </div>
          <div>
            Blues<div></div>
          </div>
        </div>
      )}
      {!data ? (
        <CircularProgress />
      ) : !isCollapse ? (
        <Carousel data={data} type={type} />
      ) : (
        <div>
          <div className={styles.gridContainer}>
            {data.map((song) => {
              return <Card data={song} type={type} />;
            })}
          </div>
          {name === "Top Albums" && <div className={styles.borderBottom}></div>}
        </div>
      )}
    </div>
  );
}

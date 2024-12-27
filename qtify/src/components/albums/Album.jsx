import React from "react";
import styles from "./Album.module.css";
import Carousel from "../carousel/Carousel";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import Card from "../card/Card";

export default function Album({ name = "", data, type }) {
  const [isCollapse, setCollapse] = useState(false);

  return (
    <div className={styles.albumContainer}>
      <div className={styles.album}>
        <div className={styles.textButtonContainer}>
          <div className={styles.name}>{name}</div>
          <div
            className={styles.carouselToggleButton}
            onClick={() => setCollapse(!isCollapse)}
          >
            {!isCollapse ? "Show all" : "Collapse"}
          </div>
        </div>
        {!data ? (
          <CircularProgress />
        ) : !isCollapse ? (
          <Carousel data={data} type={type} />
        ) : (
          <div className={styles.gridContainer}>
            {data.map((song) => {
              return <Card data={song} type={type} />;
            })}
          </div>
        )}
      </div>
      {name === "Top Albums" && isCollapse && (
        <div className={styles.borderBottom}></div>
      )}
    </div>
  );
}

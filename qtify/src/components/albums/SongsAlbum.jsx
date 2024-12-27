import React, { useEffect, useState } from "react";
import styles from "./Album.module.css";
import Carousel from "../carousel/Carousel";
import { CircularProgress } from "@mui/material";

const SongsAlbum = ({ data, genres }) => {
  const [genre, setGenre] = useState("all");
  const [songsData, setSongsData] = useState(null);

  useEffect(() => {
    if (!data) {
      setSongsData(null);
    } else {
      if (genre === "all") {
        setSongsData(data);
      } else {
        const filteredData = data.filter((song) => {
          return song.genre.key === genre;
        });
        setSongsData(filteredData);
      }
    }
    // eslint-disable-next-line
  }, [genre, data]);

  return (
      <div className={styles.album}>
        <div className={styles.textButtonContainer}>
          <div className={styles.name}>Songs</div>
        </div>
        <div className={styles.tabs}>
          <div key={"all"} onClick={() => setGenre("all")}>
            All
            <div className={genre === "all" && styles.selected}></div>
          </div>
          {!genres ? (
            <CircularProgress />
          ) : (
            genres.data.map((gen) => {
              return (
                <div key={gen.key} onClick={() => setGenre(gen.key)}>
                  {gen.label}
                  <div className={gen.key === genre && styles.selected}></div>
                </div>
              );
            })
          )}
        </div>
        {!songsData ? (
          <CircularProgress />
        ) : (
          <Carousel data={songsData} type="song" />
        )}
      </div>
  );
};

export default SongsAlbum;

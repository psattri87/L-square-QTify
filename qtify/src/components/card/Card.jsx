import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";

function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/${slug}`} style={{ textDecoration: "none" }}>
              <div className={styles.wrapper}>
                <div className={styles.card}>
                  <img
                    src={image}
                    alt="album"
                    loading="lazy"
                    className={styles.image}
                  />
                  <div className={styles.banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>
                <div className={styles.titleWrapper}>{title}</div>
              </div>
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <Link to={"/"}>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" className={styles.image} />
                <div className={styles.banner}>
                  <Chip label={`${likes} Likes`} className={styles.chip} />
                </div>
              </div>
              <div className={styles.titleWrapper}>{title}</div>
            </div>
          </Link>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}

export default Card;

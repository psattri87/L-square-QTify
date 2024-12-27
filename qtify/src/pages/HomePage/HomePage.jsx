import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/hero/Hero";
import { StyledEngineProvider } from "@mui/material";
import Album from "../../components/albums/Album";
import Faqs from "../../components/faqs/Faqs";
import { ApiContext } from "../../context/ApiContext";
import SongsAlbum from "../../components/albums/SongsAlbum";

function HomePage() {
  const { data } = useContext(ApiContext);

  return (
    <StyledEngineProvider injectFirst>
      <div className={styles.pageContainer}>
        <Hero />
        <div className={styles.albumsContainer}>
          <Album name={"Top Albums"} data={data.topAlbum} type={"album"} />
          <Album name={"New Albums"} data={data.newAlbum} type={"album"} />
        </div>
        <div className={styles.songsContainer}>
          <SongsAlbum data={data.songs} genres={data.genres} />
        </div>
        <Faqs />
      </div>
    </StyledEngineProvider>
  );
}

export default HomePage;

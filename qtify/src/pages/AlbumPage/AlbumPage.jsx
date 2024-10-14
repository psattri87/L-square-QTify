import React from "react";
import styles from "./AlbumPage.module.css";
import { StyledEngineProvider } from "@mui/material";
import Albums from "../../components/albums/Album";

function AlbumPage() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className={styles.albumPage}>
          <Albums/>
        </div>
      </StyledEngineProvider>
    </>
  );
}

export default AlbumPage;
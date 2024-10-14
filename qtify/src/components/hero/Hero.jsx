import React from "react";
import styles from "./Hero.module.css";
import { StyledEngineProvider } from "@mui/material";
import heroImage from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <div className={styles.heroSection}>
          <div className={styles.heroBox}>
            <div >
              <h1 className={styles.heroText}>100 Thousand Songs, ad-free</h1>
              <h1 className={styles.heroText}>Over thousands podcast episodes</h1>
            </div>
            <img src={heroImage} alt="Hero" className={styles.heroImg} />
          </div>
        </div>
      </StyledEngineProvider>
    </>
  );
}

export default Hero;

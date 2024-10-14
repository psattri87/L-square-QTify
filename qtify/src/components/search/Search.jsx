import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export default function Search({placeholder="", searchData}) {
  const [text, setText] = useState("");
  const handleChange =(event)=> {
    setText(event.target.value);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <input
          type="text"
          name="album"
          className={styles.search}
          value={text}
          onChange={handleChange}
          placeholder="Search an album of your choice"
        ></input>
        <div type="submit" className={styles.searchButton}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

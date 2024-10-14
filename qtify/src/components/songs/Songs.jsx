import React from "react";
import styles from "./Songs.module.css";
import { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";
import axios from "axios";

const getData = async () => {
  try {
    let res = await axios.get("https://qtify-backend-labs.crio.do/songs");
    // .then(response=>response.data);
    res = await res.data;
    console.log(res[0]);
    return res;
  } catch (err) {
    console.error(err);
  }
};
export default function Songs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const topAlbumData = await getData();
      // console.log(topAlbumData);
      setData(topAlbumData);
    };
    loadData();
    console.log(data[1]);
    // console.log(data);
    // console.log(data);
  }, []);
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <label className={styles.label}>Songs</label>
        <div className={styles.tab}></div>
        <div className={styles.songs}>
          {data.length > 0 ? (
            <Carousel data={data} type={"song"} />
          ) : (
            <>Data Loading...</>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import styles from "./Albums.module.css";
import Carousel from "../carousel/Carousel";
import axios from "axios";

const getData = async (url) => {
  try {
    let res = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    // .then(response=>response.data);
    res = await res.data;
    console.log(res[0]);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export default function Albums({url}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const albumData = await getData(url);
      setData(albumData);
    };
    loadData();
  }, []);
  return (
    <div className={styles.topAlbums}>
      <div>Top Albums</div>
      {data.length>0?<Carousel data={data} type={"album"}/>:<>Data Loading...</>}
    </div>
  );
}

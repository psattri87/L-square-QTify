import React from "react";
import { useState, useEffect } from "react";
import styles from "./Album.module.css";
import Carousel from "../carousel/Carousel";
import axios from "axios";

const getData = async () => {
  try {
    let res = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    res = await res.data;
    return res;
  } catch (err) {
    console.error(err);
  }
};

export default function NewAlbums() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const topAlbumData = await getData();
      setData(topAlbumData);
    };
    loadData();
  }, []);

  useEffect(() => {  
    console.log("data:=",data);
    // eslint-disable-next-line
  }, [data])
  

  return (
    <div className={styles.album}>
        <div>New Albums</div>
      {data.length>0?<Carousel data={data} type={"album"}/>:<>Data Loading...</>}
    </div>
  );
}

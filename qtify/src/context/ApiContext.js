import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiState = (props) => {
  const urls = {
    newAlbum: "https://qtify-backend-labs.crio.do/albums/new",
    topAlbum: "https://qtify-backend-labs.crio.do/albums/top",
    songs: "https://qtify-backend-labs.crio.do/songs",
    genres: "https://qtify-backend-labs.crio.do/genres"
  };
  const [data, setData] = useState({});
  const [song, setSong] = useState({});

  const generateData = async (key, url) => {
    try {
      console.log(
        `started at ${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`
      );
      const response = await axios.get(url);
      const responseData = await response.data;
      if (response.data) {
        setData((prevState) => {
          return { ...prevState, [key]: responseData };
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = () => {
      generateData("topAlbum", urls.topAlbum);
      generateData("newAlbum", urls.newAlbum);
      generateData("songs", urls.songs);
      generateData("genres", urls.genres);
    };
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <ApiContext.Provider value={{ data, generateData, urls, setSong, song }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiState };

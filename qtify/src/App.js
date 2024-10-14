import React, { useEffect, useState, useContext, createContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import Player from "./components/player/Player";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import HomePage from "./pages/HomePage/HomePage";
import ApiContext from "./context/ApiContext";
import axios from "axios";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div className="container">
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            {/* <Route exact path="/album">
            <AlbumPage />
          </Route> */}
          </Switch>
          <Player />
        </BrowserRouter>
      </div>
    </StyledEngineProvider>
  );
}

export default App;

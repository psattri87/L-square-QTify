import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const searchData={};

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
      <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" searchData={searchData}/>
      <Button>Give Feedback</Button>
    </nav>
  );
}

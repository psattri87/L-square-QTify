import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Logo.module.css"
export default function Logo(){
    return (
<img src={logo} alt="logo" className={styles.logo}/>

    )

}
import React from "react";
// import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar(props) {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.directory}></div>
      </div>
    </>
  );
}

export default NavBar;

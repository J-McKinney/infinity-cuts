import React from "react";
import style from "./Footer.module.css";

function Footer(props) {
  return (
    <>
      <div className={style.wrapper}>
        <h1 className={style.h1}>Footer</h1>
        <div className={style.topContainer}>
          <div className={style.topRow}>
            <div className={style.leftCol}></div>
            <div className={style.rightCol}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import Style from "./Footer.module.css";

function Footer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <h1 className={Style.h1}>Footer</h1>
        <div className={Style.topContainer}>
          <div className={Style.topRow}>
            <div className={Style.leftCol}></div>
            <div className={Style.rightCol}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

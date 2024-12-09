import React from "react";

function ButtonOrange({ link, icon, text }) {
  return (
    <>
      <div
        className="appie-download-3-box wow animated fadeInLeft d-flex flex-column align-items-center justify-content-center text-center"
        data-wow-duration="2000ms"
        data-wow-delay="200ms"
      >
        <div className="content">
          <a className="main-btn" href={link} target="_blank">
            <i className={icon}></i>
            {text}
          </a>
        </div>
        <div className="thumb text-center"></div>
      </div>
    </>
  );
}

export default ButtonOrange;

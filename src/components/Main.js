import React from "react";
import Palmtree from "../img/palmtree.jpg";

const Main = () => {
  let country = false;

  const name_changes = () => {
    if (country) {
      document.querySelector(".main_name").innerHTML = "Jaehyuk Jeong";
      document.querySelector(".logo_country").innerHTML = "KOR";
      document.querySelector(".logo_name").innerHTML = "JJ";
      country = false;
    } else {
      document.querySelector(".main_name").innerHTML = "Luke Jeong";
      document.querySelector(".logo_country").innerHTML = "ENG";
      document.querySelector(".logo_name").innerHTML = "LJ";
      country = true;
    }
  };
  return (
    <div className="content_top">
      <div className="logo_name">JJ</div>
      <div className="logo_country" onClick={name_changes}>
        KOR
      </div>
      <div className="main_content">
        <div className="main_name">Jaehyuk Jeong</div>
        {/* <div className="main_job">Front-End Developer & UI/UX Designer</div> */}
        <img src={Palmtree} alt="Palmtree" className="main_image" />
      </div>
    </div>
  );
};

export default Main;

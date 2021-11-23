import React from "react";

const Main = () => {
  let country = false;

  const name_changes = () => {
    if (country) {
      document.querySelector(".main_name").innerHTML = "Jaehuyk Jeong";
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
      <div className="main_name">Jaehyuk Jeong</div>
      <div className="main_job">Front-End Developer & UI/UX Designer</div>
    </div>
  );
};

export default Main;

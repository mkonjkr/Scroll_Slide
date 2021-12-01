import React from "react";

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
    <div className="content_top" data-scroll-section>
      <div className="logo_name">JJ</div>
      <div className="logo_country" onClick={name_changes}>
        KOR
      </div>
      <div className="main_content">
        <div className="main_name">Jaehyuk Jeong</div>
        <div className="main_job">Front-End Developer</div>
        <div className="main_images">
          <div className="main_img1">
            <img
              src="https://garciasalmeron.com/wp-content/uploads/2021/07/Livro-NATALIA1443_v2.jpg"
              alt="Img1"
            />
          </div>
          <div className="main_img2">
            <img
              src="https://garciasalmeron.com/wp-content/uploads/2021/08/MIPOUNET-MARIA-GARCIA-SALMERON-14.jpg"
              alt="Img2"
            />
          </div>

          <div className="main_img3">
            <img
              src="https://garciasalmeron.com/wp-content/uploads/2021/05/10-scaled.jpeg"
              alt="Img3"
            />
          </div>

          <div className="main_img4">
            <img
              src="https://garciasalmeron.com/wp-content/uploads/2021/05/10-scaled.jpeg"
              alt="Img4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

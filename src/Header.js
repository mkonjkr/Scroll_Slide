import React from "react";

function Header() {
  return (
    <div className="header_form">
      <div className="header_left">
        <h5>LEFT</h5>
      </div>
      <div className="header_menu">
        <ul className="menu">
          <li>HOME</li>
          <li>ABOUT ME</li>
          <li>SKILL</li>
          <li>TEST</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="header_right">
        <h5>LOG IN</h5>
      </div>
    </div>
  );
}

export default Header;

"use client";

import React from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="n-wrapper">
      {/* Navbar for deskop version  */}
      <div className="container">
        <div className="n-container">
          {/* left side of the navbar */}
          <div className="n-logo">
            <span>logo</span>
          </div>
          {/* right side of the navbar */}
          <div className="n-right">
            <div className="n-menu">
              <span>What We Do</span>
              <span>How it Works</span>
              <span>Who we invest In</span>
              <span>Testimonials</span>
            </div>
            <div className="fund-button">get funded</div>
          </div>
        </div>
      </div>

      {/* Navbar for mobile version */}
      <div className="nm-container">
        {/* logo */}
        <span>mobile logo</span>

        {/* menu icon */}
        {!menuOpened ? (
          <BiMenuAltRight
            size={30}
            onClick={() => setMenuOpened(!menuOpened)}
          />
        ) : (
          <RxCross2 size={30} onClick={() => setMenuOpened(false)} />
        )}

        {/* Nav mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: menuOpened && "translate(0%)" }}
        >
          <span>What We Do</span>
          <span>How it Works</span>
          <span>Who we invest In</span>
          <span>Testimonials</span>
          <div className="m-funded-buuton">get funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import { HeroData } from "@/src/utils/data";
import EmailBox from "../EmailBox/EmailBox";
import "./Hero.css";
import { color, delay, motion } from "framer-motion";

const Hero = () => {
  // properties for the animation in the hero section
  const variants = (delay) => ({
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: { type: "spring", damping: 25, duration: 2.5, delay },
    },
  });
  // variables for the animation in the images
  const imgVariant = () => ({
    initial: {
      y: "18rem",
    },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });
  return (
    <div className="h-wrapper">
      <div className="container">
        <img src="hero/hero-arrow.png" alt="arrowImage" className= "h-arrow" />
        <div className="h-container">
          {/* left */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => (
                <div key={i} className="person-pill">
                  {/* Frame */}
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-image"
                  >
                    {/* Fram image */}
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariant()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => (
                <div key={i} className="person-pill">
                  <motion.div
                    initial={"initial"}
                    animate={"animate"}
                    variants={variants(person.delay)}
                    style={{ backgroundColor: person.bg }}
                    className="person-pill-image"
                  >
                    <motion.img
                      initial={"initial"}
                      animate={"animate"}
                      variants={imgVariant()}
                      src={person.src}
                      alt={person.src}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="h-right">
            <div className="h-title">
              <span>Redefine How</span>
              <span>You Grow Your</span>
              <span>Digital Business</span>
            </div>
            <div className="h-des">
              Revenue based funding and execution support designed for early
              stage founders
            </div>
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

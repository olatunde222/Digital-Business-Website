"use client"

import React from "react";
import "./BrandingVideo.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BrandingVideo = () => {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <div className="bv-container">
      <div className="container">
        <motion.video
          ref={ref}
          loop
          muted
          autoPlay
          controls=""
          style={{scale}}
          className="bv-video"
        >
          <source src="/video.mp4" type="video/mp4" />
        </motion.video>
      </div>
    </div>
  );
};

export default BrandingVideo;

import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* section head  */}
          <div className="wwd-head">
            <span className="tag">What We Do</span>
            <span className="title">
              Empowering founders with non dilutive capital expertise
            </span>
            <span className="des">Here is how we can evaluate</span>
          </div>
          {/* blocks / cards */}
          <div className="wwd-blocks">
            <div className="wwd-block">
              {/* first block / card */}
              <span className="sec-title">Blue Advances</span>
              <span className="text">
                {" "}
                Fund recuring growth expenses e.g customer acquisition,
                inventory etc..
              </span>
              <div className="block-features">
                {features.slice(0, 3).map((feature, idx) => (
                  <div className="block-feature" key={idx}>
                    <Image
                      src={feature.icon}
                      alt="features"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="wwd-block">
              {/* second block / card */}
              <span className="sec-title">Blue See</span>
              <span className="text">
                {" "}
                Fund one-offs to scale e.g products, hiring
              </span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, idx) => (
                  <div className="block-feature" key={idx}>
                    <Image
                      src={feature.icon}
                      alt="features"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

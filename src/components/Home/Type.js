import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          
          "Automotive Enthusiast",
          "Mechanical Engineer",
          "Aerospace Enthusiast",
          "Research Assistant at UofM IOE",
          "Former Operations Engineering Consultant at Michigan Medicine",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

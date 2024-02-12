import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Frontend Design",
          "Backend development",
          "Pair Programming",
          "Javascript",
          "React",
          "Ruby on Rails",
          "PostgreSQL",
          "Git & Github",
          "Bootstrap",
          "Web Deployment",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

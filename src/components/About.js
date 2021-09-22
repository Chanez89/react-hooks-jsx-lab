import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">About
  <h2>About Me</h2>
  <p>Took me a bit to Google the syntax of styling in JSX</p>
  <img src={image} alt="I made this"/>  
  </div>
    );
}

export default About;

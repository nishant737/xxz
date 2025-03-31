import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At our core, the only thing we take seriously is food. 
            Everything else? We go with the flow. But when it comes to flavors, 
            freshness, and the joy of a good meal, there’s no room for compromise. 
            Whether it's a simple homemade dish or an extravagant feast, we believe 
            food is more than just sustenance—it’s an experience, a memory, and a 
            reason to gather. So while life may be unpredictable, one thing remains certain: 
            great food is always worth the effort.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
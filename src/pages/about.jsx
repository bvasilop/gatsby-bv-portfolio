import React from "react";
import SEO from "../components/Layout/SEO";
import { ContentContainer } from "../components/Common/Container";
import { Link } from "gatsby";
import { animations } from "../shared/transitions";

const About = () => {
  return (
    <>
      <SEO title="About" />
      <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
        <h1>About</h1>
        <p>
        I am a front-end developer with experience in creating static and dynamic
        websites and web applications. Knowledgeable in front-end technology as
        well as the principles and techniques of website development and maintenance.
        Adept at conveying complex technical information to a variety of technical
        and non-technical professional audiences.
          <br />
          <br />
        Some more stuff here
          <br />
          <br />
          Some more stuff here
          fun!
          <br />
          <br />
          Some more stuff here
          <br />
          <br />
          If that sounds like someone you’d like to collaborate with then{" "}
          <Link to="/contact">get in touch.</Link>
        </p>
      </ContentContainer>
    </>
  );
};

export default About;

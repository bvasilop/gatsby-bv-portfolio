import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { HomeContainer, Text, Image } from "./HomeStyles";
import TextLink from "../Common/TextLink";
import { animations } from "../../shared/transitions";

const Home = () => {
  const windowScope = typeof window !== "undefined" && window;
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(windowScope.innerHeight);
    windowScope.addEventListener("resize", () => {
      setHeight(windowScope.innerHeight);
    });
    return () => {
      windowScope.removeEventListener("resize", () => {
        setHeight(windowScope.innerHeight);
      });
    };
  }, []);

  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rs-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <HomeContainer height={height}>
      <Text style={animations.verticleSlide(`15rem`, 0)}>
        <h1>Hey, my name’s Bill.</h1>
        <p>
        I am a front-end developer with experience in creating static
        and dynamic websites and web applications here in beautiful
        Seattle, Washington.
        </p>
        <TextLink to="/about" text="More about me" />
        <TextLink to="/projects" text="My recent projects" />
        <TextLink to="/contact" text="Get in touch" />
        <TextLink to="/experience" text="View my experience" />
      </Text>
      <Image style={animations.verticleSlide(`15rem`, 0)}>
        <Img fluid={file.childImageSharp.fluid} />
      </Image>
    </HomeContainer>
  );
};

export default Home;

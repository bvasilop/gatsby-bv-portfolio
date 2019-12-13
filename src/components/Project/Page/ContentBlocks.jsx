import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { animated, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import {
  LeftContent,
  RightContent,
  MiddleContent,
  Text,
  Video,
} from './ContentBlockStyles';

const AnimatedImage = animated(Img);
const AnimatedText = animated(Text);

export const LeftContentBlock = props => {
  const { image, video, title, client, layout, color, copy } = props;
  const [view, setView] = useState(false);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    setView(false);
    setTextView(false);
    return () => {
      setView(false);
      setTextView(false);
    };
  }, []);

  return (
    <LeftContent>
      <Waypoint onEnter={() => setView(true)} />
      {image ? (
        <AnimatedImage
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(-30rem, 0, 0)`,
            config: config.slow,
          })}
          fluid={image.childImageSharp.fluid}
        />
      ) : null}
      {video ? (
        <Video
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(-30rem, 0, 0)`,
            config: config.slow,
          })}
          video={video}
        />
      ) : null}
      {title ? (
        <AnimatedText
          style={useSpring({
            opacity: textView ? 1 : 0,
            transform: textView
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(-30rem, 0, 0)`,
            config: config.slow,
          })}
          client={client}
          layout={layout}
          color={color}
        >
          <Waypoint onEnter={() => setTextView(true)} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </AnimatedText>
      ) : null}
    </LeftContent>
  );
};

LeftContentBlock.propTypes = {
  image: PropTypes.func,
  video: PropTypes.object,
  title: PropTypes.object,
  client: PropTypes.object,
  layout: PropTypes.object,
  color: PropTypes.object,
  copy: PropTypes.object,
};

export const RightContentBlock = props => {
  const { image, video, title, client, layout, color, copy } = props;
  const [view, setView] = useState(false);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    setView(false);
    setTextView(false);
    return () => {
      setView(false);
      setTextView(false);
    };
  }, []);

  return (
    <RightContent>
      <Waypoint onEnter={() => setView(true)} />
      {image ? (
        <AnimatedImage
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(30rem, 0, 0)`,
            config: config.slow,
          })}
          fluid={image.childImageSharp.fluid}
        />
      ) : null}
      {video ? (
        <Video
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(30rem, 0, 0)`,
            config: config.slow,
          })}
          video={video}
        />
      ) : null}
      {title ? (
        <AnimatedText
          style={useSpring({
            opacity: textView ? 1 : 0,
            transform: textView
              ? `translate3d(0rem, 0, 0)`
              : `translate3d(30rem, 0, 0)`,
            config: config.slow,
          })}
          client={client}
          layout={layout}
          color={color}
        >
          <Waypoint onEnter={() => setTextView(true)} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </AnimatedText>
      ) : null}
    </RightContent>
  );
};

RightContentBlock.propTypes = {
  image: PropTypes.func,
  video: PropTypes.object,
  title: PropTypes.object,
  client: PropTypes.object,
  layout: PropTypes.object,
  color: PropTypes.object,
  copy: PropTypes.object,
};

export const MiddleContentBlock = props => {
  const { image, video, title, client, layout, color, copy } = props;
  const [view, setView] = useState(false);
  const [textView, setTextView] = useState(false);

  useEffect(() => {
    setView(false);
    setTextView(false);
    return () => {
      setView(false);
      setTextView(false);
    };
  }, []);

  return (
    <MiddleContent>
      <Waypoint onEnter={() => setView(true)} />
      {image ? (
        <AnimatedImage
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0, 0rem, 0)`
              : `translate3d(0, 30rem, 0)`,
            config: config.slow,
          })}
          fluid={image.childImageSharp.fluid}
        />
      ) : null}
      {video ? (
        <Video
          style={useSpring({
            opacity: view ? 1 : 0,
            transform: view
              ? `translate3d(0, 0rem, 0)`
              : `translate3d(0, 30rem, 0)`,
            config: config.slow,
          })}
          video={video}
        />
      ) : null}
      {title ? (
        <AnimatedText
          style={useSpring({
            opacity: textView ? 1 : 0,
            transform: textView
              ? `translate3d(0, 0rem, 0)`
              : `translate3d(0, 30rem, 0)`,
            config: config.slow,
          })}
          client={client}
          layout={layout}
          color={color}
        >
          <Waypoint onEnter={() => setTextView(true)} />
          <h3>{title}</h3>
          <p>{copy}</p>
        </AnimatedText>
      ) : null}
    </MiddleContent>
  );
};

MiddleContentBlock.propTypes = {
  image: PropTypes.func,
  video: PropTypes.object,
  title: PropTypes.object,
  client: PropTypes.object,
  layout: PropTypes.object,
  color: PropTypes.object,
  copy: PropTypes.object,
};

import React, { useState, useRef, useEffect } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaAngleDown,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaSass,
  FaCode,
} from 'react-icons/fa';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Pin from '../components/pin';
import Header from '../components/header';
import RadialProgress from '../components/radial-progress';

import { animated, useSpring, config } from 'react-spring/web.cjs';

const SkillDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  @media (max-width: 576px) {
    font-size: 0.6em;
  }
`;

const IndexPage = () => {
  const headerProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

  const [shown, setShown] = useState(false);

  const dotProps = useSpring({
    to: { opacity: shown ? 0 : 1 },
    from: { opacity: shown ? 1 : 0 },
    onRest: () => setShown(!shown),
    config: config.slow,
  });

  const scrollToDiv = useRef(null);

  const [radialSize, setRadialSize] = useState('0em');
  const [ratio, setRatio] = useState(0);
  const [iconSize, setIconSize] = useState('0em');
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const resizeEvent = () => {
      if (!window.matchMedia('(max-width: 576px)').matches) {
        setRadialSize('9em');
        setRatio(1.5);
        setIconSize('2em');
      } else {
        setRadialSize('4.5em');
        setRatio(1.2);
        setIconSize('1.5em');
      }
    };
    resizeEvent();
    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  });

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="container-fluid header-parallax">
        <section className="row h-75 justify-content-center align-items-end">
          <div className="col-sm-12 text-center text-container">
            <animated.h1 style={headerProps}>Eray Tarhan</animated.h1>
            <animated.h2 style={headerProps}>
              Software Engineer
            </animated.h2>
          </div>
          <div className="col-sm-12 text-center">
            <Pin url="https://www.linkedin.com/in/etarhan">
              <FaLinkedin size="5em" />
            </Pin>
            <Pin url="https://github.com/etarhan">
              <FaGithub size="5em" />
            </Pin>
            <Pin url="https://stackoverflow.com/users/10353987/etarhan">
              <FaStackOverflow size="5em" />
            </Pin>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

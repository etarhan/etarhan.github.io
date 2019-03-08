import React, { useRef } from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Pin from "../components/pin";
import { animated, useSpring, useChain, config } from 'react-spring';

const IndexPage = () => {
  

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="header-parallax">
        <div className="center-content">
          <div className="text-container">
            <animated.h1>Eray Tarhan</animated.h1>
            <animated.h2>Software Developer</animated.h2>
          </div>
          <div className="pin-container">
            <Pin>
              <FaLinkedin size="5em" />
            </Pin>
            <Pin>
              <FaGithub size="5em" />
            </Pin>
            <Pin>
              <FaStackOverflow size="5em" />
            </Pin>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default IndexPage

import React, { useRef, useState } from 'react';
import { FaLinkedin, FaGithub, FaStackOverflow, FaAngleDown } from 'react-icons/fa';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Pin from "../components/pin";
import { animated, useSpring, useChain, config } from 'react-spring';

const IndexPage = () => {
  const headerProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses
  });

  const [shown, setShown] = useState(false);

  const dotProps = useSpring({
    to: { opacity: shown ? 0  : 1 },
    from: { opacity: shown ? 1  : 0 },
    onRest: () => setShown(!shown),
    config: config.slow
  });

  // const secondRef = useRef();
  // const secondProps = useSpring({
  //   ref: secondRef,
  //   to: { borderRadius: '50%' },
  //   from: { borderRadius: '0%' },
  //   // delay: 100,
  //   config: config.gentle
  // });

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="container-fluid h-100 header-parallax">
        <div className="row h-75 justify-content-center align-items-end">
          <div className="col-sm-12 text-center text-container">
            <animated.h1 style={headerProps}>Eray<animated.span style={dotProps}>·</animated.span>Tarhan</animated.h1>
            <animated.h2 style={headerProps}>Full-stack Web Developer</animated.h2>
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
        </div>
        {/*<div className="row h-25 align-items-end">
          <div className="col-sm-12 text-center">
            <h5>See more</h5>
            <FaAngleDown className="chevron-down" size="3em" />
          </div>
  </div>*/}
      </div>
    </Layout>
  );
}


export default IndexPage

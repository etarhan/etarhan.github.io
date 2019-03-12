import React, { useState, useRef, useEffect } from "react"
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
  FaCode,
} from "react-icons/fa"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Circle } from "rc-progress"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Pin from "../components/pin"
import Header from "../components/header"
import RadialProgress from "../components/radial-progress"

import { animated, useSpring, config } from "react-spring"

const SkillDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
`

const IndexPage = () => {
  const headerProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  })

  const [shown, setShown] = useState(false)

  const dotProps = useSpring({
    to: { opacity: shown ? 0 : 1 },
    from: { opacity: shown ? 1 : 0 },
    onRest: () => setShown(!shown),
    config: config.slow,
  })

  const scrollToDiv = useRef(null)

  const [sectionTop, setSectionTop] = useState(0)
  useEffect(() => {
    const section = document.getElementsByClassName("skill-section")[0]
    const nav = document.getElementsByClassName("main-header")[0]

    if (section.offsetTop > 0) setSectionTop(section.offsetTop)

    const stickyEvent = () => {
      if (window.scrollY >= sectionTop) {
        nav.classList.add("fixed-nav")
      } else {
        if (nav.classList.contains("fixed-nav")) {
          nav.classList.add("hidden-nav")
          nav.classList.remove("fixed-nav")
        }
      }
    }
    window.addEventListener("scroll", stickyEvent)

    return () => {
      window.removeEventListener("scroll", stickyEvent)
    }
  })

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="container-fluid header-parallax">
        <section className="row h-75 justify-content-center align-items-end">
          <div className="col-sm-12 text-center text-container">
            <animated.h1 style={headerProps}>
              Eray<animated.span style={dotProps}>·</animated.span>Tarhan
            </animated.h1>
            <animated.h2 style={headerProps}>
              Full-stack Web Developer
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
        <div className="row h-25 align-items-end">
          <div className="col-sm-12 text-center">
            <h5>See more</h5>
            <FaAngleDown className="chevron-down" size="3em" />
          </div>
        </div>
        <section className="row h-100">
          <div
            ref={scrollToDiv}
            id="skills"
            className="col-sm-12 skill-section"
          >
            <Header />
            <div className="headtext text-center">
              <h1>Skills</h1>
              <div className="understroke" />
            </div>
            <div className="skills-container">
              <div className="skills-description">
                <div className="text-center" />
                <p>
                  I'm an experienced developer well versed in a wide range of
                  technologies. Here is a subselection of what I like using
                  nowadays.
                </p>
              </div>
              <FaCode size="5em" className="back-graphic" />
              <div className="skills">
                <RadialProgress
                  css={css`
                    margin: 1em;
                  `}
                  percent={80}
                  size="9em"
                  color="#026e00"
                >
                  <SkillDescription>
                    <span>
                      <FaNodeJs size="2em" />
                    </span>
                    <span>Node.js</span>
                  </SkillDescription>
                </RadialProgress>
                <RadialProgress
                  css={css`
                    margin: 1em;
                  `}
                  percent={85}
                  size="9em"
                  color="#61dafb"
                >
                  <SkillDescription>
                    <span>
                      <FaReact size="2em" />
                    </span>
                    <span>React</span>
                  </SkillDescription>
                </RadialProgress>
                <RadialProgress
                  css={css`
                    margin: 1em;
                  `}
                  percent={90}
                  size="9em"
                  color="#f16529"
                >
                  <SkillDescription>
                    <span>
                      <FaHtml5 size="2em" />
                    </span>
                    <span>HTML5</span>
                  </SkillDescription>
                </RadialProgress>
                <RadialProgress
                  css={css`
                    margin: 1em;
                  `}
                  percent={87}
                  size="9em"
                  color="#264de4"
                >
                  <SkillDescription>
                    <span>
                      <FaCss3Alt size="2em" />
                    </span>
                    <span>CSS3</span>
                  </SkillDescription>
                </RadialProgress>
                <RadialProgress
                  css={css`
                    margin: 1em;
                  `}
                  percent={93}
                  size="9em"
                  color="#f0db4f"
                >
                  <SkillDescription>
                    <span>
                      <FaJs size="2em" />
                    </span>
                    <span>JavaScript</span>
                  </SkillDescription>
                </RadialProgress>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

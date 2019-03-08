import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div class="header-parallax">
      <span class="pin">
        <FaLinkedin size="5em" />
      </span>
      <span class="pin">
        <FaGithub size="5em" />
      </span>
      <span class="pin">
        <FaStackOverflow size="5em" />
      </span>
    </div>

  </Layout>
)

export default IndexPage

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="main-header">
    <nav class="navbar">
      <span>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </span>
      <span>
        <a href="#">About</a>
        <a href="#">About</a>
        <a href="#">About</a>
      </span>
    </nav>
    <h1 style={{ margin: 0 }}>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

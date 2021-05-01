import PropTypes from 'prop-types';
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaAngleDown,
} from 'react-icons/fa';

import Pin from '../components/pin';

const Header = () => (
  <header className="main-header">
    <div className="left">
      <h5 className="brand">
        Eray Tarhan
      </h5>
      <h5 className="title">Software</h5>
      <h5 className="title">Engineer</h5>
    </div>
    <div className="pins">
      <Pin url="https://www.linkedin.com/in/etarhan">
        <FaLinkedin />
      </Pin>
      <Pin url="https://github.com/etarhan">
        <FaGithub />
      </Pin>
      <Pin url="https://stackoverflow.com/users/10353987/etarhan">
        <FaStackOverflow />
      </Pin>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

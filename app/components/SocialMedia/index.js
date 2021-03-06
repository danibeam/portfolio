/**
 *
 * SocialMedia
 *
 */

import React from 'react';
import { IconContext } from 'react-icons';
import './styles.scss';

import { FaTwitter, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

function SocialMedia() {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <a
        href="https://github.com/danibeam"
        target="blank"
        rel="noopener noreferrer"
      >
        <FaGithub title="Github" />
      </a>
      <a
        href="https://www.linkedin.com/in/daniel-belmonte-amor%C3%B3s-754433132/"
        target="blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin title="Linkedin" />
      </a>
      <a
        href="https://twitter.com/danibelmonte_"
        target="blank"
        rel="noopener noreferrer"
      >
        <FaTwitter title="Twitter" />
      </a>
      <a href="mailto:danibeam97@gmail.com?subject=On%20Dani's%20Portfolio">
        <FaMailBulk title="Email" />
      </a>
    </IconContext.Provider>
  );
}

export default SocialMedia;

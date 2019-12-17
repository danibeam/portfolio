/**
 *
 * Contact
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import {
  FaTwitter,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaCopy,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
import A from 'components/A';

import { FormattedMessage } from 'react-intl';
import { Container } from 'react-grid-system';

import messages from './messages';

const Title = styled.h2`
  position: relative;
  display: inline-block;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    margin: 10px 0;
    width: 50%;
    height: 6px;
    background: #556393;
  }
`;

const Methods = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  & li {
    margin: 1em;
    & svg {
      font-size: larger;
      margin: 0 0.5em 0 0;
      vertical-align: sub;
    }
    & ul {
      list-style: none;
    }
  }
`;

const Copied = styled.div`
  width: 100%;
  background-color: #fafafa;
  text-align: center;
  transition: all 0.3s ease-in-out;
  position: fixed;
  bottom: 0;
  left: 0;
  display: block;
  padding: 1em;
  display: block;
  opacity: 0;
  ////display: ${props => (props.copied ? 'block' : 'none')};
`;

const SM = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding-inline-start: 0;
  & li {
    width: 25%;
    margin: 1em 0;
    & svg {
      font-size: larger;
      margin: 0 0.5em 0 0;
      vertical-align: sub;
    }
  }
`;

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = value => {
    setCopied(true);
    const el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container id="container">
      <Helmet>
        <title>DB. | Contact</title>
        <meta
          name="description"
          author="Daniel Belmonte"
          description={<FormattedMessage {...messages.SEODescription} />}
          content="Daniel Belmonte Home Portfolio developer frontend full stack javascript"
        />
      </Helmet>
      <Title>
        <FormattedMessage {...messages.title} />
      </Title>
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
      <Methods>
        <li>
          <FaMailBulk />
          <FormattedMessage {...messages.mail} />
          <ul>
            <li>
              <A href="mailto:danibeam97@gmail.com?subject=On%20Dani's%20Portfolio">
                danibeam97@gmail.com
              </A>
              &nbsp;
              <FaCopy
                title={<FormattedMessage {...messages.copy} />}
                onClick={() => handleCopyToClipboard('danibeam97@gmail.com')}
                style={{ cursor: 'pointer' }}
              />
            </li>
          </ul>
        </li>
        <li>
          <FaPhone />
          <FormattedMessage {...messages.phone} />
          <ul>
            <li>
              <strong>+34</strong> 618 017 783 &nbsp;
              <FaCopy
                title={<FormattedMessage {...messages.copy} />}
                onClick={() => handleCopyToClipboard('+34618017783')}
                style={{ cursor: 'pointer' }}
              />
            </li>
            <li>
              <strong>+44</strong> 7508 731584 &nbsp;
              <FaCopy
                title={<FormattedMessage {...messages.copy} />}
                onClick={() => handleCopyToClipboard('+447508731584')}
                style={{ cursor: 'pointer' }}
              />
            </li>
          </ul>
        </li>
      </Methods>
      <p>
        <br />
        <FormattedMessage {...messages.socialmedia} />
      </p>
      <SM>
        <li>
          <A
            href="https://www.linkedin.com/in/daniel-belmonte-amor%C3%B3s-754433132/"
            target="blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin title="Linkedin" /> LinkedIn
          </A>
        </li>
        <li>
          <A
            href="https://github.com/danibeam"
            target="blank"
            rel="noopener noreferrer"
          >
            <FaGithub title="Github" /> Github
          </A>
        </li>
        <li>
          <A
            href="https://twitter.com/danibelmonte_"
            target="blank"
            rel="noopener noreferrer"
          >
            <FaTwitter title="Twitter" /> Twitter
          </A>
        </li>
        <li>
          <A
            href="https://instagram.com/danibeam_"
            target="blank"
            rel="noopener noreferrer"
          >
            <FaInstagram title="Instagram" /> Instagram
          </A>
        </li>
      </SM>
      {copied ? (
        <Copied style={{ opacity: 1 }}>Copied!</Copied>
      ) : (
        <Copied style={{ opacity: 0 }}>Copied!</Copied>
      )}
    </Container>
  );
}

Contact.propTypes = {};

export default Contact;

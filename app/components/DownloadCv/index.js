/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/**
 *
 * DownloadCv
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';

import { FormattedMessage } from 'react-intl';
import { DEFAULT_LOCALE } from 'i18n';

import { FaFilePdf } from 'react-icons/fa';
import messages from './messages';

const Styled = styled.div`
  display: block;
  margin: 2em;
  padding: 1.5em;
  text-align: center;
  width: 300px;
  margin: 2em auto;

  -webkit-box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.75);
`;

const Quote = styled.div`
  text-transform: cursive;
  font-weight: lighter;
  color: ligthgrey;

  display: block;
  border-width: 2px 0;
  border-style: solid;
  border-color: #eee;
  padding: 1.5em 0 0.5em;
  margin: 1.5em 0;
  position: relative;

  &:before {
    content: '\201C';
    position: absolute;
    top: 0em;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 3rem;
    height: 2rem;
    font: 6em/1.08em 'PT Sans', sans-serif;
    color: #666;
    text-align: center;
  }
  &:after {
    content: '\2013 \2003'attr(cite);
    display: block;
    text-align: right;
    font-size: 0.875em;
    color: #e74c3c;
  }
`;

function DownloadCv() {
  const [URL, setURL] = useState('');

  useEffect(() => {
    const locale = DEFAULT_LOCALE;
    locale === 'es'
      ? setURL(
        'https://drive.google.com/open?id=1avJoH_cJeXxLQSQhtDWw1qCLtPGv5gHi',
      )
      : setURL(
        'https://drive.google.com/open?id=1r8PWcznU1XEKkotXaLgzmWJ0JPKncUaA',
      );
  }, []);

  return (
    <Styled>
      <Quote>
        <FormattedMessage {...messages.just_cv} />
      </Quote>
      <Button href={URL} external>
        <FormattedMessage {...messages.download_cv} />
        <FaFilePdf />
      </Button>
    </Styled>
  );
}

DownloadCv.propTypes = {};

export default DownloadCv;

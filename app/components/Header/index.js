/* eslint-disable indent */
/**
 *
 * Header
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './styles.scss';

import { Link } from 'react-router-dom';
import NavigatorLink from 'components/NavigatorLink';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Visible, Hidden } from 'react-grid-system';

import { DEFAULT_LOCALE } from 'i18n';
import A from 'components/A';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';

// import { Burger, Menu } from './components/Header/';

// import Burger from './Burger';
import messages from './messages';

function Header() {
  const [open, setOpen] = useState(false);

  const [URL, setURL] = useState('');

  useEffect(() => {
    const locale = DEFAULT_LOCALE;
    // eslint-disable-next-line no-unused-expressions
    locale === 'es'
      ? setURL(
          'https://drive.google.com/open?id=1avJoH_cJeXxLQSQhtDWw1qCLtPGv5gHi',
        )
      : setURL(
          'https://drive.google.com/open?id=1r8PWcznU1XEKkotXaLgzmWJ0JPKncUaA',
        );
  }, []);

  return (
    <div className="header" id="header">
      <Container>
        <Row style={{ alignItems: 'center' }}>
          <Col md={4} sm={5} xs={8}>
            <span className="title">
              <Link to="/home">Daniel Belmonte.</Link>
            </span>
          </Col>
          <Col md={8} sm={7} xs={4} className="menu_container">
            <Hidden xs>
              <div className="menu">
                <ul>
                  <li>
                    <NavigatorLink href="/">
                      <FormattedMessage {...messages.menu.home} />
                    </NavigatorLink>
                  </li>
                  <li>
                    <NavigatorLink href="/experience">
                      <FormattedMessage {...messages.menu.experience} />
                    </NavigatorLink>
                  </li>
                  <li>
                    <NavigatorLink href="/contact">
                      <FormattedMessage {...messages.menu.contact} />
                    </NavigatorLink>
                  </li>
                  <Hidden sm>
                    <li>
                      <A href={URL} target="blank" rel="noopener noreferrer">
                        <FormattedMessage {...messages.menu.download_cv} />
                      </A>
                    </li>
                  </Hidden>
                </ul>
              </div>
            </Hidden>
            <Visible xs>
              <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </div>
            </Visible>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Header.propTypes = {};

export default Header;

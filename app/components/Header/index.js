/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './styles.scss';

import NavigatorLink from 'components/NavigatorLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <div className="header">
      <span className="title">Daniel Belmonte.</span>
      {/* <FormattedMessage {...messages.header} /> */}
      <ul>
        <li>
          <NavigatorLink href="/">
            <FormattedMessage {...messages.menu.home} />
          </NavigatorLink>
        </li>
        <li>
          <NavigatorLink href="">
            <FormattedMessage {...messages.menu.experience} />
          </NavigatorLink>
        </li>
        <li>
          <NavigatorLink href="">
            <FormattedMessage {...messages.menu.contact} />
          </NavigatorLink>
        </li>
      </ul>
    </div>
  );
}

Header.propTypes = {};

export default Header;

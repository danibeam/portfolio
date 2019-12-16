// Menu.js
import React from 'react';
import propTypes from 'prop-types';
import SocialMedia from 'components/SocialMedia';
// import ColoredLine from 'components/ColoredLine';
import NavigatorLink from 'components/NavigatorLink';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { StyledMenu } from './StyledMenu';

import './styles.scss';

const Menu = ({ open, setOpen }) => (
  <StyledMenu open={open}>
    <NavigatorLink href="/" onClick={() => setOpen(false)}>
      <FormattedMessage {...messages.menu.home} />
    </NavigatorLink>
    <NavigatorLink href="/experience" onClick={() => setOpen(false)}>
      <FormattedMessage {...messages.menu.experience} />
    </NavigatorLink>
    <NavigatorLink href="/contact" onClick={() => setOpen(false)}>
      <FormattedMessage {...messages.menu.contact} />
    </NavigatorLink>
    {/* <ColoredLine color="#fafafa" /> */}
    <div className="social_icons">
      <SocialMedia />
    </div>
  </StyledMenu>
);

Menu.propTypes = {
  open: propTypes.bool.isRequired,
  setOpen: propTypes.func,
};

export default Menu;

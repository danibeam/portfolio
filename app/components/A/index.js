/**
 *
 * A link to a certain page, an anchor tag
 *
 */

import styled from 'styled-components';

const A = styled.a`
  font-weight: 500;
  color: inherit;
  &:focus {
    outline: 0;
  }
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: none;
  }
`;

export default A;

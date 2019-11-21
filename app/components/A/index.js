/**
 *
 * A link to a certain page, an anchor tag
 *
 */

import styled from 'styled-components';

const A = styled.a`
  font-weight: 500;
  &:focus {
    outline: 0;
    color: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default A;

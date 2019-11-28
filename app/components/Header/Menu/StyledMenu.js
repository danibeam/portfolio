// Menu.styled.js
import styled from 'styled-components';

// export Menu from './Menu';

export const StyledMenu = styled.nav`
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 99;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

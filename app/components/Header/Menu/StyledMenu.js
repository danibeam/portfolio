// Menu.styled.js
import styled from 'styled-components';

// export Menu from './Menu';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #556393;
  color: #fafafa;
  height: 100vh;
  text-align: center;
  padding: 2rem;
  //// position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 99999;
  //// display: ${({ open }) => (open ? 'flex' : 'none')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  //// margin: -1.5em 0 -1.5em 0;

  -webkit-box-shadow: inset 0px 0px 55px -15px rgba(0,0,0,0.75);
  -moz-box-shadow: inset 0px 0px 55px -15px rgba(0,0,0,0.75);
  box-shadow: inset 0px 0px 55px -15px rgba(0,0,0,0.75);

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1.5em;
  }

  span {
    font-size: 2rem;
    text-transform: capitalize;
    margin: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-decoration: none;
    transition: color 0.3s linear;
    color: #fafafa;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

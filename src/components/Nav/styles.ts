import styled, { css } from 'styled-components';

import CustomNavLink from '../NavLink';

import { primaryColor, darkColor } from '../../constants/variables.styles';

const activeStyles = css`
  border-bottom: 2px solid ${primaryColor};
  color: ${primaryColor};
  font-weight: 600;
`;

export const NavLink = styled(CustomNavLink)`
  outline: none;
  color: ${darkColor};
  padding: 0px 15px 30px;
  cursor: pointer;
  transition: all 150ms;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;

  &.woman {
    ${activeStyles}
  }

  &:hover,
  &:focus {
    ${activeStyles}
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 4rem;
  z-index: 10;
  background-color: white;
`;

export const CartCurrencyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

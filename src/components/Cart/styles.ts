import styled from 'styled-components';

import { darkColor, white } from '../../constants/variables.styles';

export const CartContainer = styled.div`
  cursor: pointer;
  display: flex;
`;

export const CartCounter = styled.span`
  background: ${darkColor};
  border-radius: 60px;
  font-size: 14px;
  font-weight: 700;
  user-select: none;
  font-family: 'Roboto', san-serif;
  color: ${white};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -7px;
  margin-left: -7px;
  z-index: 1;
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
`;

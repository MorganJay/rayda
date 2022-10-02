import styled, { css, ThemedStyledFunctionBase } from 'styled-components';

import {
  breakpointXXl,
  breakpointLg,
  primaryColor,
  white,
} from '../../constants/variables.styles';

interface ProductDisplayProps extends ThemedStyledFunctionBase<'div', object> {
  quantity: number;
}

const getLowStockStyles = ({ quantity }: ProductDisplayProps) => {
  if (quantity <= 0)
    return css`
      &:hover {
        box-shadow: none;
        div {
          opacity: 0.5;
        }
      }
    `;
};

export const Wrapper = styled.div<ProductDisplayProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  background: ${white};
  min-width: 250px;
  max-width: 356px;
  max-height: 444px;
  width: 27.6%;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

    div {
      opacity: 1;
    }
  }
  /* @media (min-width: ${breakpointLg}px) {
    width: 293px;
  } */
  @media (min-width: ${breakpointXXl}px) {
    width: 356px;
    height: 444px;
  }
  img {
    opacity: ${props => (props.quantity <= 0 ? 0.5 : 1)};
  }

  ${getLowStockStyles}
`;

export const DetailsContainer = styled.div<ProductDisplayProps>`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  font-weight: 300;
  margin-top: 1.5rem;
  span {
    margin-top: 0.5rem;
    font-weight: 500;
  }
  opacity: ${props => (props.quantity <= 0 ? 0.5 : 1)};
`;

export const CartContainer = styled.div`
  position: absolute;
  background-color: ${primaryColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  transition: all 250ms ease;
  right: 25px;
  bottom: 55px;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  opacity: 1;

  &:hover {
    box-shadow: 0px 4px 35px rgba(255, 255, 255, 0.05);
  }

  @media (min-width: ${breakpointLg}px) {
    opacity: 0;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const StockWarning = styled.h2`
  align-self: center;
  top: 35%;
  position: absolute;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  text-transform: uppercase;
  opacity: 1;
  z-index: 1;
  color: #8d8f9a;
`;

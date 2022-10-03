import styled, { css } from 'styled-components';

import { ProductDetailProps } from './ProductDetailsProps';
import { darkColor } from '../../constants/variables.styles';

const colorStyles = (color?: string) => css`
  width: 100%;
  height: 100%;
  background-color: ${color};
  border: 1px solid white;
`;

const dimensionStyles = (
  defaultChecked?: boolean,
  width?: string,
  height?: string
) => css`
  width: ${width || 1.5}rem;
  height: ${height || 1.5}rem;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${defaultChecked ? 'white' : darkColor};
  text-transform: uppercase;
  background-color: ${defaultChecked ? darkColor : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${darkColor};
  &:hover {
    color: white;
    background-color: ${darkColor};
  }
`;

const getDetailStyles = (props: ProductDetailProps) =>
  props.title === 'color'
    ? colorStyles(props.color)
    : dimensionStyles(props.defaultChecked, props.width, props.height);

export const Container = styled.div<ProductDetailProps>`
  cursor: pointer;
  user-select: none;
  ${getDetailStyles}
`;

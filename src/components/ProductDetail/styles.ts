import styled, { css } from 'styled-components';

import { ProductDetailProps } from '../../constants/types';
import { primaryColor, darkColor } from '../../constants/variables.styles';

const colorStyles = (
  defaultChecked: boolean | undefined,
  color: string | undefined
) => css`
  width: 100%;
  height: 100%;
  background-color: ${color};
  border: 1px solid ${defaultChecked ? `${primaryColor}` : 'white'};
`;

const dimensionStyles = (defaultChecked: boolean | undefined) => css`
  width: 24px;
  height: 24px;
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
    ? colorStyles(props.defaultChecked, props.color)
    : dimensionStyles(props.defaultChecked);

export const Container = styled.div<ProductDetailProps>`
  cursor: pointer;
  ${getDetailStyles}
`;

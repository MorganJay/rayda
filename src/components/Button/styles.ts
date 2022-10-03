import styled, { css } from 'styled-components';

import { ButtonProps } from './ButtonProps';

const invertedButtonStyles = (color: string) => css`
  background-color: white;
  color: ${color};
  border: 1px solid ${color};

  &:hover {
    background-color: ${color};
    color: white;
  }
`;

const buttonStyles = (color: string) => css`
  background-color: ${color};
  color: white;
  border: 1px solid ${color};

  &:hover {
    background-color: white;
    color: ${color};
  }
`;

const getButtonStyles = (props: ButtonProps) =>{
  return props.inverted
    ? invertedButtonStyles(props.color!)
    : buttonStyles(props.color!);}

export const StyledButton = styled.button<ButtonProps>`
  padding: 16px 32px;
  text-transform: uppercase;
  height: fit-content;
  width: 100%;
  white-space: nowrap;
  flex: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${getButtonStyles}
`;

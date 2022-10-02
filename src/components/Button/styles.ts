import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

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
  flex-grow: 0;

  &:hover {
    background-color: white;
    color: ${color};
  }
`;

const getButtonStyles = (props: ButtonProps) =>
  props.inverted
    ? invertedButtonStyles(props.colour)
    : buttonStyles(props.colour);

export const StyledButton = styled.button<ButtonProps>`
  padding: 16px 32px;
  max-height: 43px;
  max-width: 140px;
  text-transform: uppercase;
  height: fit-content;
  width: fit-content;
  white-space: nowrap;
  flex: none;
  font-size: 14px;
  font-weight: 600;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${getButtonStyles}
`;

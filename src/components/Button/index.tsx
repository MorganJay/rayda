import { StyledButton } from './styles';
import React from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  inverted?: boolean;
  colour: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

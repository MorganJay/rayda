import { StyledButton } from './styles';

import { primaryColor } from '../../constants/variables.styles';
import { ButtonProps } from './ButtonProps';

const Button = ({ color = primaryColor, children, ...props }: ButtonProps) => {
  return (
    <StyledButton color={color} type="button" {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

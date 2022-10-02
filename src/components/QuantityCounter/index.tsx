import { darkColor } from '../../constants/variables.styles';
import { Container, QuantitySpan, ToggleButton } from './styles';

export interface QuantityTogglerProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityToggler = ({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityTogglerProps) => {
  return (
    <Container>
      <ToggleButton onClick={() => onIncrement()} colour={darkColor} inverted>
        +
      </ToggleButton>
      <QuantitySpan>{quantity}</QuantitySpan>
      <ToggleButton onClick={() => onDecrement()} colour={darkColor} inverted>
        -
      </ToggleButton>
    </Container>
  );
};

export default QuantityToggler;

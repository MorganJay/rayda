import { QuantityTogglerProps } from './QuantityTogglerProps';

import { Container, QuantitySpan, ToggleButton } from './styles';

import { darkColor } from '../../constants/variables.styles';

const QuantityToggler = ({
  quantity,
  buttonSize,
  fontSize,
  onIncrement,
  onDecrement,
}: QuantityTogglerProps) => {
  return (
    <Container>
      <ToggleButton
        buttonSize={buttonSize}
        fontSize={fontSize}
        onClick={() => onIncrement()}
        color={darkColor}
        inverted
      >
        +
      </ToggleButton>
      <QuantitySpan>{quantity}</QuantitySpan>
      <ToggleButton
        buttonSize={buttonSize}
        fontSize={fontSize}
        onClick={() => onDecrement()}
        color={darkColor}
        inverted
      >
        -
      </ToggleButton>
    </Container>
  );
};

export default QuantityToggler;

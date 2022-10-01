import { Container, TotalContainer, ButtonContainer, Label } from './styles';

const CartDropdown = () => {
  return (
    <Container>
      <Label>
        <span>My Bag, </span> 3 items
      </Label>
      <TotalContainer>
        Total
        <span>$200.00</span>
      </TotalContainer>
      <ButtonContainer>
        <button>VIEW BAG</button>
        <button>CHECK OUT</button>
      </ButtonContainer>
    </Container>
  );
};

export default CartDropdown;

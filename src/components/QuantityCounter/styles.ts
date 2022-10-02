import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const QuantitySpan = styled.span`
  font-weight: 500;
`;
export const ToggleButton = styled(Button)`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  font-weight: 400;
  font-size: 1.5rem;
`;

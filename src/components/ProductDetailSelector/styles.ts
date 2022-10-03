import styled from 'styled-components';
import { LabelTextProps } from './DetailSelectorProps';

export const Wrapper = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  gap: 0.4rem;
`;

export const CheckoutItemsContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 5rem;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

export const Label = styled.span<LabelTextProps>`
  text-transform: ${props => props.textTransform || 'capitalize'};
  font-weight: ${props => props.labelWeight || 300};
  font-size: ${props => props.labelSize || 0.875}rem;
  font-family: ${props => props.fontFamily || 'Raleway'}, sans-serif;
`;

import styled from 'styled-components';

import Button from '../Button';

import { ToggleSize } from './QuantityTogglerProps';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const QuantitySpan = styled.span`
  font-weight: 500;
  text-align: center;
`;
export const ToggleButton = styled(Button)<ToggleSize>`
  width: ${props => props.buttonSize || 1.5}rem;
  height: ${props => props.buttonSize || 1.5}rem;
  padding: 0.5rem;
  font-weight: 400;
  font-size:  ${props => props.fontSize || 1.5}rem;
`;

import styled from 'styled-components';
import {
  breakpointLg,
  breakpointXl,
  white,
} from '../../constants/variables.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  background: ${white};
  min-width: 250px;
  max-width: 356px;
  max-height: 444px;
  width: auto;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  img {
    max-width: 100%;
    height: auto;
  }
  @media (min-width: ${breakpointLg}px) {
    width: 24vw;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
  font-weight: 300;
  margin-top: 1.5rem;
  span {
    margin-top: 0.5rem;
    font-weight: 500;
  }
`;

import styled from 'styled-components';

import {
  breakpointLg,
  primaryColor,
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
  width: 35vw;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);

    div {
      opacity: 1;
    }
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

export const CartContainer = styled.div`
  position: absolute;
  background-color: ${primaryColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  transition: all 250ms ease;
  right: 25px;
  bottom: 55px;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  opacity: 0;

  &:hover{
    box-shadow: 0px 4px 35px rgba(255, 255, 255, 0.05);
  }
`;

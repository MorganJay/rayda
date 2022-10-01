import styled from 'styled-components';

import { breakpointLg } from '../../constants/variables.styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem 6rem;
  flex-wrap: wrap;

  @media (min-width: ${breakpointLg}px) {
    justify-content: space-between;
  }
`;

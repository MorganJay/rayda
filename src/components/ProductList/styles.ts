import styled from 'styled-components';

import { breakpointMd } from '../../constants/variables.styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem 6rem;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: ${breakpointMd}px) {
    justify-content: space-between;
  }
`;

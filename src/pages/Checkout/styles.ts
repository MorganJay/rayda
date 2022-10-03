import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Heading = styled.h1`
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const PriceBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.75rem;

  button {
    max-width: 17.25rem;
  }

  span{
    font-weight: 700;
  }
`;

export const Total = styled.p`
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

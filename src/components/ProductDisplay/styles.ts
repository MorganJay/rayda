import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const ProductImage = styled.img`
  height: 24rem;
  width: 50%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 29%;
  justify-content: space-between;
  padding-left: 2rem;
`;

export const NameContainer = styled.div`
  font-size: 1.875rem;

  h3 {
    font-weight: 600;
    font-size: 1.875rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const PriceContainer = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  h5 {
    font-size: 1.5rem;
  }
`;

export const NotesContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 159.96%;
  width: 100%;
`;

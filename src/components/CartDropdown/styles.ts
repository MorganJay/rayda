import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  max-width: 325px;
  max-height: 677px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  gap: 32px;
  background-color: white;
  top: 80px;
  right: 45px;
  z-index: 5;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  span {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

export const Label = styled.div`
font-weight: 600;
  span {
    font-weight: 700;
  }
`;

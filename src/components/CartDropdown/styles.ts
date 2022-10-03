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
  box-shadow: 0px 4px 35px rgb(168 172 176 / 19%);
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

  button {
    width: 50%;
    max-width: 8.75rem;
    max-height: 2.688px;
  }
`;

export const Label = styled.div`
  font-weight: 600;
`;

export const CartItemsContainer = styled.div`
  text-align: center;
  height: auto;
  min-height: 11.875rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 3rem;
  overflow-x: hidden;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 7px;
    border-radius: 15px;
    transition: all 5s;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    border-radius: 15px;
  }

  &:hover {
    transition: all 5s;
    &::-webkit-scrollbar-thumb {
      transition: all 5s;
      background: rgb(145, 144, 144);
    }
  }
`;

export const EmptyCartMessage = styled.span`
  margin: auto;
`;

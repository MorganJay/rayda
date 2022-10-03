import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  max-height: 190px;
  gap: 0.5rem;
  height: 11rem;
`;

export const ItemDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  text-align: left;
  max-height: 100%;
`;

export const CartItemImage = styled.img`
  width: 45%;
  height: 100%;
  object-fit: cover;
`;

export const ItemDetails = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 160%;
  span {
    font-weight: 500;
  }
`;

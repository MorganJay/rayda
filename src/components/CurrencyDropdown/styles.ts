import styled from 'styled-components';

export const Wrapper = styled.ul`
  position: absolute;
  background-color: white;
  top: 70px;
  right: 90px;
  z-index: 5;
  max-width: 114px;
  max-height: 169px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0px 4px 35px rgb(168 172 176 / 19%);
`;

export const ListItem = styled.li`
  background: ${props => (props.defaultChecked ? '#eeeeee' : 'none')};
  padding: 1rem 3rem 0.5rem 1.4rem;
  font-weight: 500;
  font-size: 18px;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: none;
    background: #eeeeee;
  }
`;

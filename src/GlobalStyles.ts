import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
     box-sizing: border-box;
   }
 body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  color: #1d1f22;
  height: 100vh;
  min-height: 100vh;

}
  a {
    color: inherit;
    text-decoration: none;
  }

  .App{
    height: 100%;
    width: 100%;
  }

`;

export const MainWrapper = styled.main``;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(57, 55, 72, 0.4);
  position: fixed;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

export default GlobalStyle;

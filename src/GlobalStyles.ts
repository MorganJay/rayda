import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
     box-sizing: border-box;
     font-family: 'Raleway', sans-serif;
     margin: 0;
     padding: 0;
   }
   
 body {
  color: #1d1f22;
  height: 100vh;
  min-height: 100vh;

}

#root{
  margin: 0 auto;
}
  a {
    color: inherit;
    text-decoration: none;
  }

  ul{
    list-style-type: none;
  }

  .App{
    height: 100%;
    width: 100%;
  }

  img{
    max-width: 100%;
    height: auto;
  }


`;

export const MainWrapper = styled.main`
  padding: 3rem 4rem;
`;

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

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  color: #1d1f22;
}
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }

  .App{
    padding: 1.5rem 4rem;
  }

`;

export default GlobalStyle;

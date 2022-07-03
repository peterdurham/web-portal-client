import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #34383c;
  }
  h1 {
    font-size: 28px;
    line-height: 32px;
  }
  h2 {
    font-size: 22px;
    line-height: 28px;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  .text-dark { color: #34383C; }
  .text-light { color: #676C6F; }
  .text-lightest { color: #34383C; opacity: .38; }

  .text-small { font-size: 14px; line-height: 24px; }
  .text-medium { font-size: 16px; line-height: 26px; }
  .text-large { font-size: 18px; line-height: 28px; }
`;
 
export default GlobalStyle;
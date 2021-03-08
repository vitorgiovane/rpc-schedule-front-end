import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #20212A;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    font-size: 16px;
    font-family: 'Saira', sans-serif;
  }

  ::selection {
    background: #3E76F7;
    color: #FFF;
  }

  -moz-user-input, button {
    font: 16px, sans-serif;
  }

  button {
    cursor: pointer;
  }
`

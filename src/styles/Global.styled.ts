import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";


export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', //"Poppins" - указали подключенной стиль которого больше всего на проекте
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.2;
}

//сброс стилей для некоторых элементов
a {
    text-decoration: none;
    color: ${theme.colors.font};
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
    cursor: pointer;
    color: ${theme.colors.font};
}

section {
    padding: 100px 0;
}

section:nth-of-type(odd) { //для всех четных секций
    background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(even) { //для всех не четных секций
    background-color: ${theme.colors.secondaryBg};
}

h3 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
}

p {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
}
`


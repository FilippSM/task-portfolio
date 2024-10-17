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
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section:nth-of-type(odd) { //для всех четных секций
    background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(even) { //для всех не четных секций
    background-color: ${theme.colors.secondaryBg};
}
`


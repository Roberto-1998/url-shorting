import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  width: 100%;
}

p,
h1,
h4 {
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}

`;

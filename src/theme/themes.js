import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${(props) => props.theme.body};
    background-image: url(${(props) => props.theme.backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

// Principal colors
export const principal_1 = "#FF823C"; //naranja
export const principal_2 = "#FFC81E"; //amarillo

// Neutral colors
export const neutral_1 = "#101820"; //azul marino
export const neutral_2 = "#aaa"; //gris
export const neutral_3 = "#eee"; //blanco

// Info colors
export const confirm = "#0f0";
export const error = "#f00";
export const warning = "orange";

export const darkTheme = {
  body: neutral_1,
  text: neutral_3,
  principal: principal_2,
  name: "dark",
  backgroundImage: "subtle-prism-black.svg",
};

export const lightTheme = {
  body: neutral_3,
  text: neutral_1,
  principal: principal_1,
  name: "light",
  backgroundImage: "subtle-prism-light.svg",
};

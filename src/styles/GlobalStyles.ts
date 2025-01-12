import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: "Poppins", "DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${Theme.colors.backgroundDark};
    }
    a {
        text-decoration: none;
        color: ${Theme.colors.colorGrey};
    }
    ul {
        list-style: none;
    }
    button {
        background-color: unset;
        border:none;
    }
    h2 {
        color: ${Theme.colors.colorTitle};
    }
    p {
        color: ${Theme.colors.colorTitle};
    }
`
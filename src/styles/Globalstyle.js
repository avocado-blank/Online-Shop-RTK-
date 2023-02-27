import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }

    body {
        margin: 0 5rem;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
    }

    .back svg {
        margin-top: 2rem;
        margin-left: 20rem;
        font-size: 2rem;
        cursor: pointer;
        user-select: none;
        color: black;
    }
`
// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-style: normal;
    }

    body{
        background-color: ${({ theme }) => theme.colors.gray.gray200};
    }

    .white{
        color: ${({ theme }) => theme.colors.white};
    }

    .center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;

export default GlobalStyle;
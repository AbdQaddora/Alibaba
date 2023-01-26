import styled from "styled-components";

export const AuthPagesCountiner = styled.div`
    width: 25% ;
    padding: 25px 0;
    margin: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    > div{
        flex-grow: 1;
    }
    @media (max-width:1400px) {
        width: 50%;
    }

    @media (max-width:800px) {
        width: 80%;
    }

    @media (max-width:500px) {
        width: calc(100% - 32px);
    }
`
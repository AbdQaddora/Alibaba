import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: repeat(5 , 1fr);
    gap: 20px;

    @media (max-width:1200px) {
        grid-template-columns: repeat(4 , 1fr);
        gap: 15px;
    }

    @media (max-width:920px) {
        grid-template-columns: repeat(2 , 50%);
        gap: 10px;
    }
`

export default Style;
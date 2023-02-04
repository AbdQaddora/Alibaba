import styled from "styled-components";

const Style = styled.div`
    width: 80%;

    .pagination__container{
        margin: 30px 0 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap:15px;

        .pagination__select{
            max-width: 200px;
        }
    }
    @media (max-width:920px) {
        width: 100%;
    }
`

export default Style;
import styled from "styled-components";

const Style = styled.div`
    .image__container{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .nav__link__inner{
        display: grid;
        grid-template-columns: 30px 1fr;
        align-items: center;
        width: 100% !important;
        padding: 10px 20px;

        img{
            height: 18px;
        }
    }
`
export default Style;
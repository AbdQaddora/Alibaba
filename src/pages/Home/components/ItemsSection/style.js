import styled from "styled-components";

const Style = styled.div`
    margin: 30px 0 20px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    @media (max-width:920px){
        display: block;
        padding: 14px 0 0;
    }

    .left{
        width:30%;
        min-height: 100% !important;
        background: url(${props => props.leftBack});
        background-repeat: no-repeat;
        background-size: cover;

        padding: 20px;
        .title{
            width: 50%;
        }
        .source_now{
            padding: 10px 20px;
            border-radius: 4px;
            background-color: ${props => props.theme.colors.white};
            width: fit-content;
            cursor: pointer;
        }

        @media (max-width:920px){
            display: none;
        }
    }

    .cards{
        width: 70%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        @media (max-width:920px){
            display: flex;
            overflow: auto;
            width: 100%;

            /* Hide scrollbar for Chrome, Safari and Opera */
            ::-webkit-scrollbar {
                display: none;
            }

            /* Hide scrollbar for IE, Edge and Firefox */
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
    }
`

export default Style;
import styled from "styled-components";

const Style = styled.div`
    padding: 20px;
    margin: 30px 0 20px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    background-color: ${props => props.theme.colors.white};

    display: flex;
    justify-content: space-between;

    @media (max-width:920px) {
        display: block;
    }

    .info__section{
        border-right: 1px solid ${props => props.theme.colors.gray.gray300};
        padding-inline-end: 60px;
        @media (max-width:920px) {
            border-right: 1px solid transparent;
            padding-inline-end: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .info__section__text{
                >p{
                    margin-bottom: 0;
                }
            }
        }
    }

    .cards{
        padding-inline-start: 30px !important;
        @media (max-width:920px) {
            padding-inline-start: 0 !important;
        }
        display: flex;
        gap: 20px;
        justify-content: space-between;
        overflow: auto;

        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
            display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
`

export default Style;
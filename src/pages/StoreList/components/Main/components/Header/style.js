import styled from "styled-components";

const Style = styled.div`
    .paper{
        padding: 20px;
        display: flex;
        justify-content: space-between;

        .toggle_display_type{
            display: flex;
            align-items: center;
            color: ${props => props.theme.colors.gray.gray500};
            border-radius: 7px;
            background: ${props => props.theme.colors.gray.gray200};
            border: 1px solid ${props => props.theme.colors.gray.gray300};
            cursor: pointer;
            overflow: hidden;
            p{
                display: flex;
                align-items: center;
                padding: 5px 10px;
                height: 100%;
                border: 1px solid ${props => props.theme.colors.gray.gray300};
            }

            p:nth-last-of-type(1){
                font-size: 16px;
            }

            p.active{
                background-color: ${props => props.theme.colors.white};
            }
        }
    }
`


export default Style;
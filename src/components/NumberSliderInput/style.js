import styled from "styled-components";

const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-radius: 4px;
    >*{
        height: 40px;
        min-width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div{
        background-color:${props => props.theme.colors.gray.gray300};
    }
    > button{
        outline: none;
        border: none;
        background-color: ${props => props.theme.colors.gray.gray200}; 
        cursor: pointer;
        border-radius: 4px;
        .icon{
            color:${props => props.theme.colors.gray.gray200} !important;
        }
    }
`

export default Style;
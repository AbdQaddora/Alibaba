import styled from "styled-components";

export const SelectOption = styled.div`
    cursor: pointer;
    ${props => props.active ?
        `background-color: ${props.theme.colors.blue100};
        border:1px solid ${props.theme.colors.blue};
        ` :
        `background-color: ${props.theme.colors.gray.gray200};
        border:1px solid transparent;`
    };
    
    width: fit-content;
    padding: 8px;
    width:100%;
    border-radius: 6px;
`

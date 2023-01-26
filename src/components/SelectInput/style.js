import styled from "styled-components";

export const SelectContainer = styled.div`
    cursor: pointer;
    position: relative;
    width: ${props => props.width ? props.width : "100%"};
    ${props => props.noBordered ? "" : `
        border: 1px solid ${props.theme.colors.gray.gray300};
        border-radius: 6px;
    `}

`

export const SelectTrigger = styled.div`
    padding: 8px;
    user-select: none;
    display: flex;
    justify-content: space-between;
    ${props => props.showOptions ? `
     border-bottom: 1px solid ${props.theme.colors.gray.gray300};
    `: ""}
   
`

export const SelectOptionsContainer = styled.div`
    transition: 0.3ms all ease-in-out;
    width: 100%;
    height: ${props => props.showOptions ? `fit-content;
    box-shadow: 0px 0px 3px 0px ${props.theme.colors.gray.gray300};` : "0px"};
    overflow: hidden;
    position:absolute;
    left:0;
    top:calc(100% + 3px);
    z-index:999;
    background-color:${props => props.theme.colors.white};
`

export const SelectOption = styled.option`
    padding: 8px;
    user-select: none;
    &:hover{
        background-color: ${props => props.theme.colors.gray.gray300};
    }
`


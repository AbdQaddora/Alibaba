import styled from "styled-components";

const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const PaginationCell = styled.div`
    aspect-ratio: 1/1;
    width: 40px;
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.dark};
    
    &.active{
        background-color: ${props => props.theme.colors.gray.gray200};
        color: ${props => props.theme.colors.gray.gray500};
    }
`

export default Style;
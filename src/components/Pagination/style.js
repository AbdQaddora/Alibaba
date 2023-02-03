import styled from "styled-components";

const Style = styled.div`

`


export const paginationCell = styled.div`
    aspect-ratio: 1/1;
    padding: 10px;
    border: 1px solid ${props.theme.colors.gray.gray300};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;

    ${props.active ? `
        background-color: ${props.theme.colors.gray.gray200};
        color: ${props.theme.colors.gray.gray500};
    ` : `
        background-color: ${props.theme.colors.white};
        color: ${props.theme.colors.dark};
    `}
`

export default Style;
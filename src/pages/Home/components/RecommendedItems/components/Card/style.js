import styled from "styled-components";

const Style = styled.div`
    padding: 16px;
    background:  ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.gray.gray200};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .product_image{
        height:150px;
        width: fit-content;
        align-self: center;
    }
`

export default Style;
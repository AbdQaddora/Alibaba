import styled from "styled-components";

const DiscountSection = styled.div`
    ${props => props.theme.fonts.body1.size}
    ${props => props.theme.fonts.body1.height}
    ${props => props.theme.fonts.body1.spacing}
    color:${props => props.theme.colors.white};
    padding: 16px;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.orange};
    ${props => props.backgroundBlue ? `background-color: ${props.theme.colors.blue};
` : ''}
`

export default DiscountSection;
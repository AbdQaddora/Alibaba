import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border-radius: 4px;
    ${props => props.error ? `
     border:1px solid ${props.theme.colors.red};
    ` : ""}
`
export default Style;
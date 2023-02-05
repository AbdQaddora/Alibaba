import styled from "styled-components";

const Dot = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.gray.gray300};
`

export default Dot;
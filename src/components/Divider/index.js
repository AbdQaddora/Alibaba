import styled from "styled-components";

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: #E4E4E4;
    ${props => props.margin ? `margin:${props.margin}px 0` : "margin:10px 0"}
`

export default Divider;
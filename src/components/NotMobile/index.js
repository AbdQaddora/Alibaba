import styled from "styled-components";

const NotMobile = styled.div`
    display: ${props => props.display ? props.display : "block"};

    @media (max-width:920px) {
        display: none;
    }
`

export default NotMobile;
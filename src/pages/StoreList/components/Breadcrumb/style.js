import styled from "styled-components";

const Style = styled.div`
    padding: 20px 0;
    .breadcrumb_link{
        &:hover{
            color:${props => props.theme.colors.dark}
        }
    }
`

export default Style;
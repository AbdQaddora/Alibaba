import styled from "styled-components";

export const Badge = styled.p`
    width: fit-content;
    padding: 5px 13px;
    border-radius: 29px;
    color:${props => props.theme.colors.red};
    background: ${props => props.theme.colors.red100};
`

const Style = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;

    img{
        mix-blend-mode: multiply;
        height: 150px;
    }
`

export default Style;
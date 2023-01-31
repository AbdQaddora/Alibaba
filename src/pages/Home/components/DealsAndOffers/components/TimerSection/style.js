import styled from "styled-components";

export const TimeBlock = styled.div`
    padding: 8px 11px;
    border-radius: 4px;
    background-color: ${props => props.theme.colors.gray.gray800};
    color:${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
`

const Style = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
`

export default Style;
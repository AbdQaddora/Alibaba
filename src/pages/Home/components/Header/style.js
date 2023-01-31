import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 14px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    border-radius: 6px;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 10px;

    > div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .user_discount{
        gap:5px;
    }
`

export default Style;
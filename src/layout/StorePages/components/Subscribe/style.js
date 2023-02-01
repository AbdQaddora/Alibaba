import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.gray.gray200};
    padding: 38px 16px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .subscribe__form{
        display: flex;
        gap: 8px;
        height: 40px;
        margin-top: 20px;
    }

    .subscribe__input{
        height: 40px;
        background-color: ${props => props.theme.colors.white};
        border-radius: 6px;
        overflow: hidden;
}
`

export default Style;
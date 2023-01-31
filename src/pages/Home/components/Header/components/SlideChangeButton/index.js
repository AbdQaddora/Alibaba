import styled from "styled-components";

const SlideChangeButton = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    color: ${props => props.theme.colors.gray.gray600};
    background-color: transparent;
    transition: 0.3s all ease-in-out;
    ${props => props.active ? `
        background-color: ${props.theme.colors.blue100};
        color: ${props.theme.colors.dark};
        font-weight: 500;
    ` : ``}
`

export default SlideChangeButton;
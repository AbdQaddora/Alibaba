import styled from "styled-components";
import { Input } from "../common";

export const LabelContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const PasswordInputContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding:10px;

    border: 1px solid ${props => props.error ?
        props.theme.colors.red :
        props.theme.colors.gray.gray200};

    ${props => props.isFocuse ? `
            box-shadow:0px 0px 5px 5px ${props => props.theme.colors.gray.gray200};
        border: 1px solid ${props.error ?
            props.theme.colors.red
            : props.theme.colors.dark};
    `: ""}
    border-radius: 6px;
    transition:0.3s all ease-in-out;

    width:${props => props.width ? props.width : 100}%;

    display: grid;
    grid-template-columns: 1fr 25px;
    align-items: center !important;

    .password_icon{
        user-select: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.gray.gray400};
        ${({ theme }) => theme.fonts.h5.size};
        line-height: 100%;
        &:hover{
            color: ${({ theme }) => theme.colors.gray.gray600};
        }
    }   

`

export const PasswordInput = styled(Input).attrs(props => ({
    value: props.value,
    onChange: props.onChange
  }))`
    border:none;
    padding: 0;
    border-radius: 0;
    &:focus{
        border:unset;
        box-shadow:unset;
    }
`

import styled from "styled-components";

export const Nav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;
    display: flex;
    transform: translateX(-100%);
    transition: 0.3s all ease-in-out;
    
    &.open{
        transform: translateX(0);
    }
`
export const Container = styled.div`
    width: 80%;
    background-color: ${props => props.theme.colors.white};
    .nav__section{
        padding: 10px 0;
    }

    .border__bottom{
        border-bottom: 1px solid ${props => props.theme.colors.gray.gray300};
    }
`

export const Overlay = styled.div`
    width: 20%;
    opacity: 0;
    background-color: rgba(0,0 ,0 ,0.7);
    transition: 1s all ease-in-out ;
    &.open{
        opacity: 1;
    }
`

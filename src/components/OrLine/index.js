import styled from "styled-components";

const OrLine = styled.p`
    ${props => `
        ${props.theme.fonts.body2.size}
        ${props.theme.fonts.body2.spacing}
    `}

    color:${props => props.theme.colors.gray.gray400};

    position: relative;
    margin: 20px 0;
    width:100%;
    text-align:center;
    &::before , &::after{
        content:"";
        position:absolute;
        left:0;
        top:50%;
        transform:translateY(-50%);
        width:calc(50% - 20px);
        height:1px;
        background-color:${props => props.theme.colors.gray.gray200};
    }

    &::after{
        left:unset;
        right:0;
    }
`

export default OrLine;
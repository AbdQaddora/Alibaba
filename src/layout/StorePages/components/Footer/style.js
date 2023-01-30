import styled from "styled-components";

const Style = styled.div`
    padding: 40px 0;
    background-color: ${props => props.theme.colors.white};

    .grid{
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap:15px;
    }

    .footer__lists{
        display: grid;
        grid-template-columns: repeat(5 , 1fr);
        
        p{
            cursor: pointer;
        }
    }

    .social_icon{
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.gray.gray400};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 30px !important;
        height: 30px !important;
        border-radius: 50%;
        margin-inline-end: 12px;
    }
`

export default Style;
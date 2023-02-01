import styled from "styled-components";

const Style = styled.div`
        border: 1px solid ${props => props.theme.colors.gray.gray200};
        border-radius: 6px; 
        overflow: hidden;
        .card__image{
        background: url(${props => props.headerImage});
        background-repeat:no-repeat;
        background-size: cover;
        background-color: ${props => props.theme.colors.dark};
        height: 125px;
        position: relative;

        .card__icon{
            position: absolute;
            bottom:0;
            right: 20px;
            width: 55px;
            transform: translateY(50%);
            height: 55px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            background-color: ${props => props.theme.colors.blue100};
            border: 3px solid ${props => props.theme.colors.white};
        }
    }

    .card__content{
        background-color:  ${props => props.theme.colors.white};
        padding: 20px;
    }
`

export default Style;
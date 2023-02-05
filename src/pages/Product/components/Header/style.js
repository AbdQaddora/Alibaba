import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 15px;
    margin: 20px 0;
    
    .info__line , .info__line div{
        display: flex;
        align-items: center;
        gap: 5px;

        .icon{
            transform: translateY(2px);
        }
    }

    .info__line{
        gap: 15px;
    }

    .pricing{
        margin: 10px 0;
        padding: 16px;
        background-color: ${props => props.theme.colors.red100};
        display: grid;
        grid-template-columns: repeat(3 , 1fr);
        gap: 5px;
        >div{
            padding: 0 10px;
            border-left: 1px solid ${props => props.theme.colors.gray.gray400};
        }

        >div:nth-child(1){
            border: none;
            padding: 0;
        }
    }

    .info__row{
        padding: 5px 0 10px;
        display: grid;
        grid-template-columns: 150px 1fr;

        &.underline{
            border-bottom:  1px solid ${props => props.theme.colors.gray.gray400};
        }
    }

    .buy > button{
        margin-top: 20px;
    }
`

export default Style;
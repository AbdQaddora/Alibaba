import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 0px 0;
    .nav__container{
        display: grid;
        grid-template-columns:2fr 1fr ;
        align-items: center;
        .select{
            width: fit-content;
        }


        .lang__select{
            img{
                height: 18px;
            }
        }
        > div{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 15px;
            p{
                width: fit-content;
            }
        }

        > div:last-child{
            justify-content: flex-end;
        }
    }
`

export default Style;
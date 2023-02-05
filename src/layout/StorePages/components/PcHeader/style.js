import styled from "styled-components";

const Style = styled.div`
    background-color: #fff;
    width: 100%;
    .header_container{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        gap: 10px;

        .search{
            display: grid;
            grid-template-columns: 1fr 130px 80px;
            align-items: center;
            border: 1px solid ${props => props.theme.colors.blue};
            height: 40px;
            border-radius: 4px;
            *{
                margin: 0;
                border: none;
                :focus{
                    box-shadow: unset;
                }
            }

            .search__input{
                overflow: hidden;
                height: 38px;
                transform: translateY(-1px);
            }

            button {
                height: 38px;
                transform: translateY(-1px);
                border-radius: unset;
                width: 80px;
            }
        }

        .links{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap:10px;
        }

        @media screen and (max-width:1000px){
            grid-template-columns: 1fr 3fr 1fr;
        }
    }

    .cart{
        position: relative;
        padding-top: 4px;
        .count{
            pointer-events: none;
            position: absolute;
            background-color:${props => props.theme.colors.blue};
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            top: -7px;
            left: 0px;
            color:${props => props.theme.colors.blue100}
        }
    }
`

export default Style;
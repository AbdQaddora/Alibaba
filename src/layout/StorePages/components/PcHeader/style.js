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
`

export default Style;
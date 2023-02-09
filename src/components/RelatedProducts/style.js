import styled from "styled-components";

const Style = styled.div`
    padding: 16px;
    background-color: ${props => props.theme.colors.white};
    background: #FFFFFF;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    border-radius: 6px;
    margin: 20px 0;

    .cards{
        display: grid;
        grid-template-columns: repeat(5 , 1fr);
        gap:10px;

        .card{
            .product__img{
                height: 150px;            
                background: #EEEEEE !important;
                border-radius: 6px;
                display: grid;
                place-items: center;
                > img{
                    height: 120px;  
                    mix-blend-mode:darken;
                }
            }
        }
    }
`

export default Style;
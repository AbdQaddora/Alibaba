import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    border-radius: 6px;

    .rate__container{
        display: flex;
        gap: 10px;
    }
    .price_before_discount{
        text-decoration: line-through !important;
    }

    .add_to_cart{
        padding: 0;
        width: 40px;
        height: 40px;
        font-size: 24px;
    }

    .product__image{
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid ${props => props.theme.colors.gray.gray200};
        padding: 20px;

        img{
            height: 80%;
        }
    }

    .product__content{
        padding: 20px;

        .product__content__info{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            .product__rate{
                display: flex;
                justify-content: flex-start;
                gap: 5px;
                align-items: center;
            }
        }
    }
`

export default Style;
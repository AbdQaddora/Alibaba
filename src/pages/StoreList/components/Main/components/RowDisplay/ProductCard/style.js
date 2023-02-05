import styled from "styled-components";

const Style = styled.div`
    padding: 20px;
    gap: 15px;
    display: flex;
    background-color: ${props => props.theme.colors.white};
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    .product__image , .product__image > img{
        height: 210px;
        width: 210px;
        object-fit: contain;
        mix-blend-mode: multiply;
        filter: contrast(1);
    }

    .product__info , .product__rate{
        display: flex;
        align-items: center;
        gap: 9px;
    }

    .price_before_discount{
        text-decoration: line-through;
        font-weight: 400px;
    }

    .product__content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export default Style;
import styled from "styled-components";

const Style = styled.div`
    display: flex;
    gap: 15px;
    .cards{
        width: 75%;
    }

    .checkout{
        width: 25%;
    }

    .bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .coupon , .total{
        padding: 16px;
        background-color: ${props => props.theme.colors.white};
        background: #FFFFFF;
        border: 1px solid ${props => props.theme.colors.gray.gray300};
        border-radius: 6px;
        margin-bottom: 12px;
    }

    .coupon_input{
        display: flex;
        border: 1px solid ${props => props.theme.colors.gray.gray400};
        border-radius: 4px;
        padding-left: 10px;
        overflow: hidden;
        input{
            width: 80%;
            border: none;
            outline: none;
        }

        button{
            border: none;
            border-inline-start: 1px solid ${props => props.theme.colors.gray.gray400};
            border-radius: 0;
        }
    }

    .total{
        .total_info{
            display: flex;
            justify-content: space-between;
        }

        .checkout_btn{
            background-color: ${props => props.theme.colors.green};
            width: 100%;
            margin-top: 20px;
        }
    }
`

export default Style;
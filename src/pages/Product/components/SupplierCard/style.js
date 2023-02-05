import styled from "styled-components";

const Style = styled.div`
    padding: 16px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.08);
    border-radius: 6px;
    .name{
        display: flex;
        gap: 11px;
        padding-bottom: 20px;
        border-bottom: 1px solid ${props => props.theme.colors.gray.gray200};
        .letter{
            width: 50px;
            height: 50px;
            color: ${props => props.theme.colors.blue};
            background-color: ${props => props.theme.colors.blue100};
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28px;
            font-weight: 600;
            padding: 15px;
        }
    }

    .supplier_info{
        display: flex;
        align-items: center;
        margin: 5px 0;
        gap: 15px;

        img{
            height: 20px;
        }

        .icon{
            font-size: 20px;
            transform: translateY(1px);
        }
    }

    .supplier_btns{
        margin: 20px 0 5px;
        .supplier_btn{
            margin: 8px 0;
        }
    }

`

export default Style;
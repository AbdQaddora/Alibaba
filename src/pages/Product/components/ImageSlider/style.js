import styled from "styled-components";

const Style = styled.div`
    .active__image{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${props => props.theme.colors.gray.gray500};
        border-radius: 4px;
        padding: 16px;
        aspect-ratio: 1/1;
        img{
            width: 100%;
            max-width: 450px;
            height: 100%;
            object-fit: contain;
        }
    }

    .images__pagentaion{
        display: flex;
        max-width: 450px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin-top: 15px;

        .images__pagentaion__image{
            height: 50px;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${props => props.theme.colors.gray.gray500};
            border-radius: 4px;
            padding: 5px;
            &.active{
                border: 1px solid ${props => props.theme.colors.dark};
            }
        }

        img{
            max-height: 80%;
            object-fit: contain;
            cursor: pointer;
        }
    }
`

export default Style;
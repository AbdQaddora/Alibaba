import styled from "styled-components";

const Style = styled.div`
    display: flex;
    gap: 10px;
    padding: 20px 0;
    border-bottom: 1px solid ${props => props.theme.colors.gray.gray300};
    .image{
        height: 100px;
        flex-basis: 100px;
        flex-grow: 0;
        flex-shrink: 0;
        padding:10px;  
        background: #F7F7F7;
        /* base-color/gray-200 */
        border: 1px solid ${props => props.theme.colors.gray.gray300};
        border-radius: 6px;

        >img{
            height:80px;
            width: 80px;
            object-fit: contain;
        }
    }

    .content{
        padding-inline-end: 15px;
        .title{
            margin-bottom: 6px;
        }

        .info{
            margin-bottom: 10px;
        }
    }

    .quantity__change{
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        flex-direction: column;
        gap:10px;
    }
`

export default Style;
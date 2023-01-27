import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.white};
    .row-1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
    }

    .row-2{
        margin-top: 12px;
        .search_input , .search_input input{
            background-color: ${props => props.theme.colors.gray.gray100};
        }
    }
`

export default Style;
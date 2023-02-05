import styled from "styled-components";

const Style = styled.div`
    .tabs__titles{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 18px;
        border-bottom: 1px solid ${props => props.theme.colors.gray.gray300};
        .tab__title{
            border-bottom: 2px solid transparent;
            transition: 0.3s all ease-in-out;
        }

        .active{
            border-bottom: 2px solid ${props => props.theme.colors.blue};
        }
    }
`

export default Style;
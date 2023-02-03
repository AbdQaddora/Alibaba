import styled from "styled-components";

const Style = styled.div`
    overflow: hidden;
    border-top: 1px solid ${props => props.theme.colors.gray.gray300};
    padding: 10px 0 0;

    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        margin-bottom: 15px;
        user-select: none;
    }

    .content{
        height: 0;
        transition: 0.3s all ease-in-out;

        &.open{
            height: unset;
        }
    }
`

export default Style;
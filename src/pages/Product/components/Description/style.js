import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 20px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
    box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
    border-radius: 6px;
`

export const DescriptionStyle = styled.div`

    .description__table{
        margin: 24px 0;
    }

    .description__table__row{
        display:flex;

        .label {
            width: 150px;
            color: ${props => props.theme.colors.gray.gray600};
            padding: 10px;
            background-color: ${props => props.theme.colors.gray.gray200};
        }

        .content{
            color: ${props => props.theme.colors.gray.gray600};
            padding: 10px;
            border:1px solid ${props => props.theme.colors.gray.gray200};
            width: 50%;
        }
    }
`

export default Style;
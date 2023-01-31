import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.blue100};
    padding: 12px 10px;
    border-radius: 6px;

    .user__header{
        display: flex;
        gap: 9px;

        image{
            flex-grow:1 ;
            aspect-ratio: 1/1;
        }
    }

    .sign_up_button{
        margin: 14px 0 6px;
    }
`

export default Style;
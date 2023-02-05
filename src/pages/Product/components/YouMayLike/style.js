import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.white};
    padding: 10px;
    height: fit-content;
    
    .card{
        display: flex;
        align-items: center;
        margin-bottom: 7px;
        gap: 10px;
        .img{
            padding: 5px;
            border: 1px solid ${props => props.theme.colors.gray.gray300};
            border-radius: 6px;
            img{
                width: 60px;
                height: 60px;
                object-position: center;
            }
        }
    }
`

export default Style;
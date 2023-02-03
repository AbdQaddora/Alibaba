import styled from "styled-components";

const Style = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0 ;

    .clear_btn{
        font-size: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`

export const Tag = styled.div`
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 10px;
    padding: 6.5px 10px;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.blue};
    border-radius: 5px;
    .delete_btn{
        cursor: pointer;
        font-size: 18px;
    }
`
export default Style;
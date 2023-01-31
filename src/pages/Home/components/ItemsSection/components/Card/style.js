import styled from "styled-components";

const Style = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};
        
    img{
        width: 50%;
        mix-blend-mode: multiply;
    }

    @media (max-width:920px){
        min-width: 60%;
    }
`

export default Style;
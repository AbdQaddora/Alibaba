import styled from "styled-components";

const Paper = styled.div`
    background-color:${props => props.theme.colors.white};
    padding: 30px;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.gray.gray300};

    
    @media (max-width:1400px) {

    }

    @media (max-width:800px) {

    }

    @media (max-width:500px) {
        padding: 16px;
    }
`

export default Paper;
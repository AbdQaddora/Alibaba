import styled from "styled-components";

const Style = styled.div`
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding:25px 120px;
    background-color: ${props => props.theme.colors.white};

    >div{
        display: flex;
        gap: 7px;
    }

    .links{
        gap: 15px;
    }

    @media screen and (max-width:800px){
        padding:25px 50px;
        .visa{
            display: none;
        }

        .links{
            flex-grow: 1;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
    
`

export default Style;
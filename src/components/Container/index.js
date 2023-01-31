import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: auto;
    padding-top: 10px;
    padding-bottom: 10px;

    @media screen and (max-width:1200px){
        width: 85%;  
      }

    @media screen and (max-width:1000px){
        width: 90%;  
    }

    @media screen and (max-width:720px){
        width: 95%;      
    }
`

export default Container;
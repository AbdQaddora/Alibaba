import styled from "styled-components";

const Container = styled.div`
    padding: 10px 130px;

    @media screen and (max-width:1200px){
        padding: 10px 70px;
    }

    @media screen and (max-width:1000px){
        padding: 10px 30px;
    }

    @media screen and (max-width:720px){
        padding: 10px 16px;
    }
`

export default Container;
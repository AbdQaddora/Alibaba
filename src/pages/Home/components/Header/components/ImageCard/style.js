import styled from "styled-components";

const ImageCardContainer = styled.div`
    height: 100%;
    background-image: url(${props => props.image});
    background-size:cover;
    background-position: center;
    padding: 60px 44px;
    

    .learn_more{
        background-color: ${props => props.theme.colors.white};
        outline: none;
        border: none;
        padding: 9px 13px;
        border-radius: 6px;
        cursor: pointer;

        transition: 0.3s all ease-in-out ;
        &:hover{
            background-color: ${props => props.theme.colors.blue100};
        }
    }

    @media screen and (max-width:920px){
        padding:40px 18px;
    }
`

export default ImageCardContainer;
import React from 'react'
import { H3, H4 } from '../../../../../../components/Typography'
import ImageCardContainer from './style'

const ImageCard = ({ image , title , subTitle }) => {
    return (
        <ImageCardContainer image={image}>
           <H4 weight={400}>{subTitle}</H4> 
           <H3 margin="0 0 15px">{title}</H3> 
           <button className="learn_more">Learn more</button>
        </ImageCardContainer>
    )
}

export default ImageCard
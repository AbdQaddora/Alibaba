import React from 'react'
import Card from './components/Card'
import Style from './style'
import { H4 } from '../../../../components/Typography';
import { useIsMobile } from '../../../../context/IsMobile';

const ItemsSection = ({ title, leftBackImage, cards }) => {
    const isMobile = useIsMobile();
    return (
        <Style leftBack={leftBackImage}>
            <div className='left'>
                <H4 className="title" margin="0 0 18px">{title}</H4>
                <p className="source_now">
                    Source now
                </p>
            </div>
            {isMobile && <H4 className="title" margin="0 0 18px 18px">{title}</H4>}
            <div className='cards'>
                {cards.map((el , index) => <Card key={index} {...el}/>)}
            </div>
        </Style>
    )
}

export default ItemsSection
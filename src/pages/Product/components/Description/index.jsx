import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import Paper from '../../../../components/Paper'
import Tabs from '../../../../components/Tabs'
import { Body1, H1 } from '../../../../components/Typography'
import Style, { DescriptionStyle } from './style'

const Description = ({ product }) => {
    return (
        <Style>
            <Tabs tabs={[
                {
                    title: "Description", content: <DescriptionStyle>
                        <Body1 color="gray/500">{product.description}</Body1>
                        <div className="description__table">
                            {Object.keys(product.descriptionTable).map(key => {
                                return <div key={key} className="description__table__row">
                                    <div className="label">{key}</div>
                                    <div className="content">{product.descriptionTable[key]}</div>
                                </div>
                            })}
                        </div>
                        {product.features.map((el, index) => <Body1 key={index} margin="10px 0 0" color='gray/600'>
                            <AiOutlineCheck /> {el}
                        </Body1>)}
                    </DescriptionStyle>
                },
                { title: "Reviews", content: <H1>Reviews</H1> },
                { title: "Shipping", content: <H1>Shipping</H1> },
                { title: "About company", content: <H1>About company</H1> },
            ]} />
        </Style>
    )
}

export default Description
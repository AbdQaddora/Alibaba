import React, { useEffect, useState } from 'react'
import { Body1 } from '../../../../components/Typography';
import { getProductById } from '../../../../mock/products';
import Style from './style'

const YouMayLike = ({ similar }) => {
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        // !TODO: API CALL AND GET THE DTA
        setSimilarProducts(similar.map(id => getProductById(id)))
    }, [similar]);

    return (
        <Style>
            <Body1 weight={600}>You may like</Body1>

            {similarProducts.map(product => {
                return <div key={product.id} className="card">
                    <div className="img">
                        <img src={product.mainImage} alt={product.name} />
                    </div>
                    <div>
                        <Body1>{product.name}</Body1>
                        <Body1 color='gray/500'>${product.price} - ${product.priceBeforeDisount} </Body1>
                    </div>
                </div>
            })}
        </Style>
    )
}

export default YouMayLike
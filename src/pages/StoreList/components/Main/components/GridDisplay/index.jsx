import React from 'react'
import ProductCard from './ProductCard'
import Style from './style'

const GridDisplay = ({ products }) => {
    return (
        <Style>
            {products.map(item => <ProductCard
                key={item.id}
                product={item}
            />)}
        </Style>
    )
}

export default GridDisplay
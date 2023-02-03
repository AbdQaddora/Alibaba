import React from 'react'
import ProductCard from './ProductCard'
import Style from './style'

const RowDisplay = ({ products }) => {
    return (
        <Style>
            {products.map(item => <ProductCard
                image={item.mainImage}
                name={item.name}
                price={item.price}
                priceBeforeDiscount={item.priceBeforeDisount}
                rate={item.rate}
                orders={item.orders}
                shipping={item.shipping}
                description={item.description}
                key={item.id}
                id={item.id}
            />)}
        </Style>)
}

export default RowDisplay
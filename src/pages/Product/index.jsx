import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StorePages from '../../layout/StorePages'
import { getProductById } from '../../mock/products'
import Description from './components/Description'
import Header from './components/Header'
import YouMayLike from './components/YouMayLike'
import Style from './style'

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // TODO: make api call
        setProduct(getProductById(id));
    }, [id])

    if (!product) {
        return <></>
    } else {
        return (
            <StorePages>
                <Style>
                    <Header product={product} />
                    <div className="description__container">
                        <Description product={product} />
                        <YouMayLike similar={product.similar} />
                    </div>
                </Style>
            </StorePages>
        )
    }
}

export default Product
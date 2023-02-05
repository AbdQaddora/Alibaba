import React from 'react'
import Paper from '../../components/Paper';
import { H3 } from '../../components/Typography';
import { useCartContext } from '../../context/CartContext'
import StorePages from '../../layout/StorePages';
import Style from './style'

const Cart = () => {
    const { cart, count, removeFromCart, decreaseQuantity, increaseQuantity } = useCartContext();
    return (
        <StorePages>
            <Style>
                <H3 margin="25px 0">My cart ({count})</H3>
                <Paper>
                    {cart.map(el => "asd")}
                </Paper>
            </Style>
        </StorePages>
    )
}

export default Cart
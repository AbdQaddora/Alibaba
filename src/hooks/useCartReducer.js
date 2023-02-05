import React, { useReducer } from 'react'

export const CART_ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    INCREASE_QUANTITY: "INCREASE_QUANTITY",
    DECREASE_QUANTITY: "DECREASE_QUANTITY",
}

const inatialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.ADD_TO_CART:
            if (state.find(el => el.id === action.payload.id)) {
                return state.map((el) => {
                    if (el.id === action.payload.id) {
                        return { ...el, quantity: el.quantity + 1 }
                    }
                    return el;
                })
            }
            return [...state, { id: action.payload.id, quantity: 1 }]
        case CART_ACTIONS.REMOVE_FROM_CART:
            return state.filter((el) => el.id !== action.payload.id)
        case CART_ACTIONS.INCREASE_QUANTITY:
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, quantity: el.quantity + 1 }
                }
                return el;
            })
        case CART_ACTIONS.DECREASE_QUANTITY:
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, quantity: el.quantity - 1 > 0 ? el.quantity - 1 : el.quantity }
                }
                return el;
            })
        default:
            return state;
    }
}
const useCartReducer = () => {
    const [cart, dispatch] = useReducer(reducer, inatialState);

    const addToCart = (id) => dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: { id } });
    const removeFromCart = (id) => dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: { id } });
    const increaseQuantity = (id) => dispatch({ type: CART_ACTIONS.INCREASE_QUANTITY, payload: { id } });
    const decreaseQuantity = (id) => dispatch({ type: CART_ACTIONS.DECREASE_QUANTITY, payload: { id } });

    return { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity };
}

export default useCartReducer
import { useMemo } from 'react';
import { useReducer } from 'react'

export const CART_ACTIONS = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
    INCREASE_QUANTITY: "INCREASE_QUANTITY",
    DECREASE_QUANTITY: "DECREASE_QUANTITY",
    SET_QUANTITY: "SET_QUANTITY",
}

const inatialState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case CART_ACTIONS.ADD_TO_CART:
            if (state.find(el => el.id === action.payload.product.id)) {
                return state.map((el) => {
                    if (el.id === action.payload.product.id) {
                        return { ...el, quantity: el.quantity + 1 }
                    }
                    return el;
                })
            }
            return [...state, { ...action.payload.product, quantity: 1 }]
        case CART_ACTIONS.REMOVE_FROM_CART:
            return state.filter((el) => el.id !== action.payload.id)
        case CART_ACTIONS.CLEAR_CART:
            return [];
        case CART_ACTIONS.INCREASE_QUANTITY:
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, quantity: el.quantity + action.payload.increaseBy }
                }
                return el;
            })
        case CART_ACTIONS.DECREASE_QUANTITY:
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, quantity: el.quantity - action.payload.decreaseBy > 0 ? el.quantity - action.payload.decreaseBy : el.quantity }
                }
                return el;
            })
        case CART_ACTIONS.SET_QUANTITY:
            return state.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, quantity: action.payload.quantity > 0 ? action.payload.quantity : el.quantity }
                }
                return el;
            })
        default:
            return state;
    }
}
const useCartReducer = () => {
    const [cart, dispatch] = useReducer(reducer, inatialState);

    const addToCart = (product) => dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: { product } });
    const removeFromCart = (id) => dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: { id } });
    const clearCart = () => dispatch({ type: CART_ACTIONS.CLEAR_CART });
    const increaseQuantity = (id, increaseBy = 1) => dispatch({ type: CART_ACTIONS.INCREASE_QUANTITY, payload: { id, increaseBy } });
    const decreaseQuantity = (id, decreaseBy = 1) => dispatch({ type: CART_ACTIONS.DECREASE_QUANTITY, payload: { id, decreaseBy } });
    const setQuantity = (id, quantity) => dispatch({ type: CART_ACTIONS.SET_QUANTITY, payload: { id, quantity } });

    const total = useMemo(() => {
        return cart.reduce((prev, cur) => prev += cur.price * cur.quantity, 0);
    }, [cart])

    const totalBeforeDiscount = useMemo(() => {
        return cart.reduce((prev, cur) => prev += cur.priceBeforeDisount * cur.quantity, 0);
    }, [cart])

    const totalDiscount = useMemo(() => {
        return totalBeforeDiscount - total;
    }, [totalBeforeDiscount, total])

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        setQuantity,
        total,
        totalDiscount,
        totalBeforeDiscount
    };
}

export default useCartReducer
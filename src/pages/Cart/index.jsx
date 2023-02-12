import React from 'react'
import Button from '../../components/Button';
import CustomLink from '../../components/CustomeLink';
import Divider from '../../components/Divider';
import Paper from '../../components/Paper';
import RelatedProducts from '../../components/RelatedProducts';
import { Body1, H3, H5, Span } from '../../components/Typography';
import { useCartContext } from '../../context/CartContext'
import StorePages from '../../layout/StorePages';
import Card from './components/Card';
import Style from './style'

const Cart = () => {
    const { cart, count, clearCart } = useCartContext();
    return (
        <StorePages>
            <H3 margin="25px 0">My cart ({count})</H3>
            <Style>
                <Paper className='cards'>
                    {cart.map(el => <Card key={el.id} {...el} />)}
                    <div className="bottom">
                        <CustomLink to="/">
                            <Button size='medium'>
                                Back to shop
                            </Button>
                        </CustomLink>
                        <Button size='medium' varient="secondary" onClick={clearCart}>Remove all</Button>
                    </div>
                </Paper>

                <div className="checkout">
                    <div className="coupon">
                        <Body1 margin="0 0 9px" color="gray/500">
                            Have a coupon?
                        </Body1>
                        <div className="coupon_input">
                            <input />
                            <Button varient="secondary">Apply</Button>
                        </div>
                    </div>
                    <div className="total">
                        <Body1 className="total_info" margin="0 0 5px">
                            <Span color="gray/600">
                                Subtotal:
                            </Span>
                            <Span color="gray/600">
                                $1403.97
                            </Span>
                        </Body1>
                        <Body1 className="total_info" margin="0 0 5px">
                            <Span color="gray/600">
                                Discount:
                            </Span>
                            <Span color="red">
                                - $60.00
                            </Span>
                        </Body1>
                        <Body1 className="total_info" margin="0 0 5px">
                            <Span color="gray/600">
                                Tax:
                            </Span>
                            <Span color="green">
                                + $14.00
                            </Span>
                        </Body1>
                        <Divider margin={17} />
                        <H5 weight={600} className="total_info" margin="0 0 5px">
                            <Span>
                                Total:
                            </Span>
                            <Span>
                                $1357.97
                            </Span>
                        </H5>

                        <Button size="large" className={"checkout_btn"}>Checkout</Button>
                    </div>
                </div>
            </Style>
            <RelatedProducts title={"Saved for later"} />
        </StorePages>
    )
}

export default Cart
import React from 'react'
import { Button } from '@material-ui/core';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItemComponent from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdownComponent = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItemComponent key={cartItem.id} item={cartItem}/>
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button variant="contained" className="checkout-btn" onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>Go to Checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdownComponent));

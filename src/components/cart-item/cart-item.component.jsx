import React from 'react';
import './cart-item.styles.scss';

const CartItemComponent = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={imageUrl} alt="cart-item"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price-quantity">{quantity} x PHP{price}</span>
            </div>
        </div>
    )
}

export default CartItemComponent

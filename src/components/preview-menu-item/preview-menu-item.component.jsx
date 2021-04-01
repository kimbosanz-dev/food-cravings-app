import { Button } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './preview-menu-item.styles.scss';

const PreviewMenuItem = ({
    item,
    addItem
}) => {
    const { name, price, imageUrl,} = item;
    return (
        <div className="preview-menu-item">
            <div 
            className="image-holder"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="preview-menu-item-footer">
                <span className="preview-menu-item-name">{ name }</span>
                <span className="preview-menu-item-price">{ price }</span>
            </div>
            <Button onClick={() => addItem(item)} className="add-cart-btn" size="large">Add to Cart</Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(PreviewMenuItem);
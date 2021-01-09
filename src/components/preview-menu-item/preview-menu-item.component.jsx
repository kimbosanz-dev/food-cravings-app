import React from 'react'
import './preview-menu-item.styles.scss';

const PreviewMenuItem = ({
    id,
    name,
    price,
    imageUrl,
}) => {
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
        </div>
    )
}

export default PreviewMenuItem;
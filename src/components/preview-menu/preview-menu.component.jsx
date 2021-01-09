import React from 'react';
import PreviewMenuItem from '../preview-menu-item/preview-menu-item.component';
import './preview-menu.styles.scss';

const PreviewMenu = ({title, items}) => {
    return (
        <div className="preview-menu">
            <h1 className="preview-menu-title">{title.toUpperCase()}</h1>
            <div className="preview">
                { items.map(({id, name, price, imageUrl}) => (
                    <PreviewMenuItem key={id} name={name} price={price} imageUrl={imageUrl}/>
                ))}
            </div>
        </div>
    )
}

export default PreviewMenu

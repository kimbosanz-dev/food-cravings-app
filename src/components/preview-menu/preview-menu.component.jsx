import React from 'react';
import PreviewMenuItem from '../preview-menu-item/preview-menu-item.component';
import './preview-menu.styles.scss';

const PreviewMenu = ({title, items}) => {
    return (
        <div className="preview-menu">
            <h1 className="preview-menu-title">{title.toUpperCase()}</h1>
            <div className="preview">
                { items.map(item => (
                    <PreviewMenuItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default PreviewMenu

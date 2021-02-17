import React, { Component } from 'react';
import DUMMY_SHOP_DATA from'./dummy-data';
import PreviewMenu from '../../components/preview-menu/preview-menu.component';

export default class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shop_menu: DUMMY_SHOP_DATA,
        };
    }

    render() {
        const {shop_menu} = this.state;
        return (
            <>
                <div className="shop-page">
                {
                    shop_menu.map(({id, ...otherShopmenu}) => (
                        <PreviewMenu key={id} {...otherShopmenu}/>
                    ))
                }
                </div>
            </>
        );
    }
}

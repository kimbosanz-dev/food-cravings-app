import React from 'react';
import './directory-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

export class DirectoryMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [
                {
                    id: 1,
                    title: 'Filipino',
                    imgUrl: 'https://i.ibb.co/LY8Gt2s/filipino-food.jpg',
                    linkUrl: 'filipino'
                },
                {
                    id: 2,
                    title: 'American',
                    imgUrl: 'https://i.ibb.co/fNv90js/american-food.jpg',
                    linkUrl: 'american'
                },
                {
                    id: 3,
                    title: 'Burgers',
                    imgUrl: 'https://i.ibb.co/GJk4MMk/burgers-food.jpg',
                    linkUrl: 'burgers'
                },
                {
                    id: 4,
                    title: 'Chicken',
                    imgUrl: 'https://i.ibb.co/n1z3VzF/chicken-food.jpg',
                    linkUrl: 'chicken',
                    // size: 'large'
                },
                {
                    id: 5,
                    title: 'Seafood',
                    imgUrl: 'https://i.ibb.co/NnzL9BM/seafood-food.jpg',
                    linkUrl: 'seafood',
                    // size: 'large'
                },
                {
                    id: 5,
                    title: 'Bar',
                    imgUrl: 'https://i.ibb.co/BtdXQb5/alcohol-bar-beverage-beverages.jpg',
                    linkUrl: 'bar',
                    // size: 'large'
                }
            ],
        }
    }

    render() {
        return(
            <>
                <div className="directory-menu">
                    {
                        this.state.categories.map(({id, ...otherSectionProps}) => (
                            <MenuItem key={id} {...otherSectionProps}/>
                        ))
                    }
                </div>

                <div className="directory-menu-sub">

                </div>
            </>
        )
    }
}
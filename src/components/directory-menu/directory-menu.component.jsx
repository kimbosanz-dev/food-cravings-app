import React from 'react';
import './directory-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

export class DirectoryMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Filipino',
                    imgUrl: 'https://i.ibb.co/LY8Gt2s/filipino-food.jpg',
                },
                {
                    id: 2,
                    title: 'American',
                    imgUrl: 'https://i.ibb.co/fNv90js/american-food.jpg',
                },
                {
                    id: 3,
                    title: 'Burgers',
                    imgUrl: 'https://i.ibb.co/GJk4MMk/burgers-food.jpg',
                },
                {
                    id: 4,
                    title: 'Chicken',
                    imgUrl: 'https://i.ibb.co/n1z3VzF/chicken-food.jpg',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'Seafood',
                    imgUrl: 'https://i.ibb.co/NnzL9BM/seafood-food.jpg',
                    size: 'large'
                }
            ],
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, id, imgUrl, size}) => (
                        <MenuItem key={id} title={title} image={imgUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}
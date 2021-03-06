import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { firebaseAuth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIconComponent from '../cart-icon/cart-icon.component';
import CartDropdownComponent from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const HeaderComponent = ({ currentUser, hidden }) => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

    return (
        <>
        <div className="header">
            <div className="header-container">
                <Link to='/' className="header-logo" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
                    {/* <div className="header-icon" /> */}
                    <span className="header-brand-name">Food Cravings PH</span>
                </Link>
                <div className="header-menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'header-menu active' : 'header-menu'}>
                    <li className="header-item">
                        <NavLink to="/" className="header-links" onClick={closeMobileMenu} activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/activity" className="header-links" onClick={closeMobileMenu}>
                            Activity
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/explore" className="header-links" onClick={closeMobileMenu}>
                            Explore
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/help" className="header-links" onClick={closeMobileMenu}>
                            Help
                        </NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/shop" className="header-links" onClick={closeMobileMenu}>
                            Shop
                        </NavLink>
                    </li>
                    <li className="header-item">
                        {
                            currentUser ? 
                            <Link className="header-links" onClick={() => firebaseAuth.signOut()}>Sign Out</Link>
                            :
                            <Link to="/signin" className="header-links" onClick={closeMobileMenu}>Sign In</Link>
                        }
                    </li>
                    <li className="header-item">
                        <div className="header-links">
                            <CartIconComponent className="cart-icon-component"/>
                        </div>
                    </li>
                </ul>
                    {
                        hidden ? null :
                        <CartDropdownComponent className="cart-dropdown-component"/>
                    }
            </div>
        </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})

export default connect(mapStateToProps) (HeaderComponent);

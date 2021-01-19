import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.styles.scss';
import { firebaseAuth } from '../../firebase/firebase.utils';

const HeaderComponent = ({ currentUser }) => {

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
                                <div className="header-links" onClick={() => firebaseAuth.signOut()}>Sign Out</div>
                                :
                                <Link to="/signin" className="header-links" onClick={closeMobileMenu}>Sign In</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent

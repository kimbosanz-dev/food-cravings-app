import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.styles.scss';

function HeaderComponent() {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const history = localStorage.clear();
//   signOut = () => {
//     localStorage.removeItem("token");
//     this.setState({
//       islogout: true
//     });
//   };

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
                            <Link to="/" className="header-links" onClick={closeMobileMenu} activeClassName="active">
                                Home
                            </Link>
                        </li>
                        <li className="header-item">
                            <Link to="/activity" className="header-links" onClick={closeMobileMenu}>
                                Activity
                            </Link>
                        </li>
                        <li className="header-item">
                            <Link to="/explore" className="header-links" onClick={closeMobileMenu}>
                                Explore
                            </Link>
                        </li>
                        <li className="header-item">
                            <Link to="/help" className="header-links" onClick={closeMobileMenu}>
                                Help
                            </Link>
                        </li>
                        {/* <li className="header-item">
                            <button onClick={history} style={{
                                background: '#ffc43d',
                                marginTop: '15px',
                                padding: '10px',
                                borderWidth: '1px',
                                borderRadius: '10px'
                            }}>
                                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Logout</Link>
                            </button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent

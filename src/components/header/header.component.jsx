import React from 'react';
import { Link } from 'react-router-dom';
import Logo  from './logo.png'
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss'

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <img className='logo'  src={Logo} alt="Brand Logo" />
            </Link>
        
            <div className='options'>
                <Link className='option' to='/' >
                    HOME
                </Link>
                <Link className='option' to='shop' >
                    SHOP
                </Link>

                {currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN-OUT
                </div> :
                <Link to="sign-In">
                    SIGN-IN
                </Link>

                }
                <Link className='option' to='contact'>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;
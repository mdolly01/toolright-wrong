import React from 'react';
import './Header.css';
import logo from './logo.jpg'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/index.html'>
                <img
                    className="header__icon"
                    src={logo}
                    alt="Tool Right Logo"
                />
            </Link>
        <div className='header__center'>
            <input type="text" />
            <SearchIcon />
        </div>
        <div className='header__right'>
            <p>Become a Tool Tycoon</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Link to='/account'>
            <AccountCircleIcon />
            </Link>
        </div>

        </div>
    )
}

export default Header; 
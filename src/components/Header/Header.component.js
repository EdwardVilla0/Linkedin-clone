import React from 'react'
import './Header.styles.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import HeaderOption from '../HeaderOption/HeaderOption.component';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__logo" src="https://dwglogo.com/wp-content/uploads/2020/06/Linkedin_symbol_transparent-2048x1453.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            </div>
        </div>
    )
}

export default Header

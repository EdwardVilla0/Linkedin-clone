import React from 'react'
import './Header.styles.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import NotificationIcon from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Chat';
import HeaderOption from '../HeaderOption/HeaderOption.component';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__logo" src="https://dwglogo.com/wp-content/uploads/2020/06/Linkedin_symbol_transparent-2048x1453.png" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>

            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationIcon} title="Notifications" />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQGxhJKSQurNHw/profile-displayphoto-shrink_100_100/0/1604963079350?e=1617840000&v=beta&t=uiMTVLUnxFQTJIQqx5Vu3EfOZ6rEjdO_cnqIl0libiY"
                    title="me" />
            </div>
        </div>
    )
}

export default Header

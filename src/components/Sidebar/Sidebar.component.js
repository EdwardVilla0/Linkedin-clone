import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.styles.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>testing</h2>
                <h4>testing more</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,456</p>
                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">2,455</p>
                </div>
                <div className="sidebar__bottom">
                    <p>Recent</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

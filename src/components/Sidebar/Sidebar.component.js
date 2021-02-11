import { Avatar } from '@material-ui/core'
import React from 'react'
import { selectUser } from '../../features/userSlice';
import './Sidebar.styles.css';
import { useSelector } from 'react-redux'

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1612455897608-ea374d1e87f2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTd8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Eduardo Villasenor</h2>
                <h4>eduardovillasenor@gmail.com</h4>
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
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('frontend')}
            </div>
        </div>
    )
}

export default Sidebar

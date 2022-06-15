import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';

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
        <img src="https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2460.jpg?t=st=1652103398~exp=1652103998~hmac=4b9ece89b2202c9fe64804c47cb2de5950736067b823eab1e54dbc7c83d8d1eb&w=996" alt="" />
        <Avatar className="sidebar__avatar">
         {user.email[0]} </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email} </h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
              <p>Who viewd you</p>
              <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
              <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('desing')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar;
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  const handleCourtsClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  const handleAddClick = (e) => {
    e.preventDefault();
    history.push('/create')
  }

  return (
    <div className="navRight">
      <button type= 'button' onClick={handleCourtsClick}>Courts</button>
      <button type='button' onClick={handleAddClick}>Add Court</button>
      <button className='profile-icon' onClick={openMenu}>
        <i className="fa-regular fa-user"></i>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <ul>Logged in as: {user.username}</ul>
          <ul>Email: {user.email}</ul>
          <ul>
            <button onClick={logout}>Log Out</button>
          </ul>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;

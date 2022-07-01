import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  const handleLoginClick = (e) => {
    e.preventDefault();
    history.push('/login')
  }

  const handleSignupClick = (e) => {
    e.preventDefault();
    history.push('/signup')
  }

  const handleCourtsClick = (e) => {
    e.preventDefault();
    history.push('/courts')
  }

  const handleHomeClick = (e) => {
    e.preventDefault();
    history.push('/')
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="navOut">
      <button type='button' onClick={handleLoginClick}>Log In</button>
      <button type='button' onClick={handleSignupClick}>Sign Up</button>
      <button type='button' onClick={handleCourtsClick}>Courts</button>
      </div>
    );
  }

  return (
    <>
    <ul>
      <img className='logo' src="https://i.imgur.com/2tjwA1G.png" onClick={handleHomeClick}/>
        {isLoaded && sessionLinks}
    </ul>
    </>
  );
}

export default Navigation;

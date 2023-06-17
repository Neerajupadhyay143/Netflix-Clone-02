import React from 'react'
import'./NavBar.css';

function NavBar() {
  return (
    <div className='navbar'>
        <img 
        className='navbar_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png'
        alt='Netflix-logo' />
         <img 
        className='navbar_avatar'
        src='https://loodibee.com/wp-content/uploads/Netflix-avatar-1.png'
        alt='Netflix-logo' />
    </div>
  )
}

export default NavBar;
import React, { useState } from 'react'
import'./NavBar.css';

import SignupScreen from './SignupScreen';

function NavBar({logoutEvent}) {
 
  // const logoutEvent=()=>{
  //   if(token !== null){
  //     <SignupScreen/>
  //   }else{
    
  //   }
  //   console.log(logoutEvent)
  //   // if(token !== null?(
  //   //   <LoginScreen/>
  //   // ):(
  //   //   null
  //   // ))

  // }
  return (
    <div className='navbar'>
        <img 
        className='navbar_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png'
        alt='Netflix-logo' />
        <div className="navbar__logout">
          <button onClick={()=>{logoutEvent()}} className="logout">Logout</button>
        </div>
         {/* <img 
        className='navbar_avatar'
        src='https://loodibee.com/wp-content/uploads/Netflix-avatar-1.png'
        alt='Netflix-logo' /> */}
    </div>
  )
}

export default NavBar;
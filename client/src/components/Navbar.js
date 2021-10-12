import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbarx () {
  return (
    <div className='navbar'>
      <div className="navbar_left">
        <Link style={{textDecoration:"none",color:'white'}}  to={'/'} >
          StreamEzy
        </Link>
      </div>
      <div className="navbar_right">

          <Link style={{textDecoration:"none"}} to={'/login'} >
            <div title="Profile" className="navbar_icons navbar_user">
                <i class="navbar_icons far fa-user-circle"></i>
            </div>
          </Link>

          <Link style={{textDecoration:"none"}} to={'/login'} >
            <div title="Sign In" className="navbar_icons navbar_user">
                <i class="fas fa-sign-in-alt"></i>
              
            </div>
          </Link>

          <Link style={{textDecoration:"none"}} to={'/signup'} >
            <div title="Register" className="navbar_icons navbar_user">
            <i class="navbar_icons fas fa-user-plus"></i>
            </div>
          </Link>


          <Link  style={{textDecoration:"none"}} to={'/'} >
            <div title="Notifications" className="navbar_icons navbar_notification">
                <i class="far fa-bell"></i>
                <div className="navbar_notificationCount">5</div>
            </div>
          </Link>

          <Link style={{textDecoration:"none"}}  to={'/GoLive'} >
            <div title="Go Live" className="navbar_icons navbar_user">
                <i class="navbar_icons fas fa-satellite-dish"></i>
            </div>
          </Link>
          <Link style={{textDecoration:"none"}}  to={'/about'} >
            <div title="About Us" className="navbar_icons navbar_user">
                <i class="navbar_icons fas fa-question-circle"></i>
            </div>
          </Link>

      </div>
  </div>
  );
};



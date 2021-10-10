import React from "react";
import { Button ,Nav,Navbar,Container} from "react-bootstrap";
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
                <i class="navbar_icons fa fa-sign-in"></i>
            </div>
          </Link>

          <Link style={{textDecoration:"none"}} to={'/login'} >
            <div title="Register" className="navbar_icons navbar_user">
                <i class="navbar_icons far fa-registered"></i>
            </div>
          </Link>


          <Link  style={{textDecoration:"none"}} to={'/'} >
            <div title="Notifications" className="navbar_icons navbar_notification">
                <i class="far fa-bell"></i>
                <div className="navbar_notificationCount">5</div>
            </div>
          </Link>

          <Link style={{textDecoration:"none"}}  to={'/viewpage'} >
            <div title="Go Live" className="navbar_icons navbar_user">
                <i class="navbar_icons fas fa-satellite-dish"></i>
            </div>
          </Link>

      </div>
  </div>
  );
};



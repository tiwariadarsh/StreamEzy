import React from "react";
import { div } from "react-router-dom";
import "../style/Navbar.css";

export default function Navbarx ({onRouteChange}) {
  return (
    <div className='navbar'>
      <div className="navbar_left">
        <div style={{textDecoration:"none",color:'white'}}  onClick={()=>onRouteChange('/')} >
          StreamEzy
        </div>
      </div>
      <div className="navbar_right">

          <div style={{textDecoration:"none"}} onClick={()=>onRouteChange('/About')} >
            <div title="About Us" className="navbar_icons navbar_user">
                <i class="navbar_icons fas fa-question-circle"></i>
            </div>
          </div>

          <div style={{textDecoration:"none"}} onClick={()=>onRouteChange('/profile')} >
            <div title="Profile" className="navbar_icons navbar_user">
                <i className="navbar_icons far fa-user-circle"></i>
            </div>
          </div>

          <div style={{textDecoration:"none"}} onClick={()=>onRouteChange('/login')} >
            <div title="Sign In" className="navbar_icons navbar_user">
                <i className="fas fa-sign-in-alt"></i>
              
            </div>
          </div>

          <div style={{textDecoration:"none"}} onClick={()=>'/signup'}>
            <div title="Register" className="navbar_icons navbar_user">
            <i className="navbar_icons fas fa-user-plus"></i>
            </div>
          </div>


          <div  style={{textDecoration:"none"}} onClick={()=>'/'} >
            <div title="Notifications" className="navbar_icons navbar_notification">
                <i className="far fa-bell"></i>
                <div className="navbar_notificationCount">5</div>
            </div>
          </div>

          <div style={{textDecoration:"none"}}  onClick={()=>'/GoLive'} >
            <div title="Go Live" className="navbar_icons navbar_user">
                <i className="navbar_icons fas fa-satellite-dish"></i>
            </div>
          </div>

          <div style={{textDecoration:"none"}} onClick={()=>'/upload'}>
            <div title="Upload Video" className="navbar_icons navbar_user">
                <i class="fas fa-video"></i>
            </div>
          </div>

      </div>
  </div>
  );
};



import React from 'react'
import "../style/UserProfile.css";
export default function UserProfile() {
    return (
        <div className="container" style={{backgroundColor:"black", marginTop: "8%", width:"70%"}}>
        <div className="container" style={{width:"99%"}}>
            <div className="row sh" style={{backgroundColor:"white"}}>
             
              <div className="col-lg-4">
              <div className="card-img1" style={{height:"17rem"}} ></div>
              
              </div>
               
              <div className = "col-lg-2">
              <p><i className="fas fa-user" style={{color:"violet"}}></i> Abdullah</p>
               {/* <p><i class="fa fa-map-marker"></i>Abdullah</p> */}
              </div>
       
             <div className="col-lg-2">
               <p><i className="fas fa-calendar-week" style={{color:"orange"}}></i> 1/1/1986</p>
             </div>  
       
             <div className="col-lg-2">
             <p><i className="fas fa-location-arrow" style={{color:"blue"}}></i> Bihar</p>
             </div>

             <div className="col-lg-2">
             <p><i className="fas fa-globe-asia" style={{color:"green"}}></i> India</p>
             </div>
             <br/>
             <div className="col-lg-2" style={{marginLeft:"23rem", marginTop : "-14rem"}}>
             <p><i className="fas fa-users" style={{color:"gold"}}></i> Subscribers: 10</p>
             </div>
             <br/>
             <div className="col-lg-2" style={{marginLeft:"21rem", marginTop : "-12rem"}}>
             <p><i className="fas fa-video" style={{color:"red"}}></i> Videos</p>
             </div>
            </div>
          </div>
          </div>
    )
}

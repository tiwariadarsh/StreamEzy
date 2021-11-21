import React from 'react';

import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import profile from '../assets/01.jpg';

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;
    border-radius: 50%;
`;

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
     
        <Container 
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <StyledH1>Rathin R</StyledH1>
            <StyledH3>Welcom to my Channel<br/> and Full Stack Developer</StyledH3>
        </Container>
      
    );
}

export default GlassCard;



































// import React from 'react'
// import "../style/UserProfile.css";
// export default function UserProfile() {
//     return (
//         <div className="container" style={{backgroundColor:"black", marginTop: "8%", width:"70%"}}>
//         <div className="container" style={{width:"99%"}}>
//             <div className="row sh" style={{backgroundColor:"white"}}>
             
//               <div className="col-lg-4">
//               <div className="card-img1" style={{height:"17rem"}} ></div>
              
//               </div>
               
//               <div className = "col-lg-2">
//               <p><i className="fas fa-user" style={{color:"violet"}}></i> Abdullah</p>
//                {/* <p><i class="fa fa-map-marker"></i>Abdullah</p> */}
//               </div>
       
//              <div className="col-lg-2">
//                <p><i className="fas fa-calendar-week" style={{color:"orange"}}></i> 1/1/1986</p>
//              </div>  
       
//              <div className="col-lg-2">
//              <p><i className="fas fa-location-arrow" style={{color:"blue"}}></i> Bihar</p>
//              </div>

//              <div className="col-lg-2">
//              <p><i className="fas fa-globe-asia" style={{color:"green"}}></i> India</p>
//              </div>
//              <br/>
//              <div className="col-lg-2" style={{marginLeft:"23rem", marginTop : "-14rem"}}>
//              <p><i className="fas fa-users" style={{color:"gold"}}></i> Subscribers: 10</p>
//              </div>
//              <br/>
//              <div className="col-lg-2" style={{marginLeft:"21rem", marginTop : "-12rem"}}>
//              <p><i className="fas fa-video" style={{color:"red"}}></i> Videos</p>
//              </div>
//             </div>
//           </div>
//           </div>
//     )
// }

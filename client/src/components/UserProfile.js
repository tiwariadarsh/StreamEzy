import React, { useEffect, useState } from 'react'
import "../style/UserProfile.css";
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import {db} from '../firebase'

export default function UserProfile() {

  const [address, setaddress] = useState('address')
  const [name, setname] = useState('')
  const [dob, setdob] = useState('')
  const [bio, setbio] = useState('')

  const [displayname, setdisplayname] = useState('')
  const [displaybio, setdisplaybio] = useState('')
  const [displaydob, setdisplaydob] = useState('')
  const [displaysubscribe, setdisplaysubscribe] = useState(0)

  const [edit, setedit] = useState(false)

  const loadUserDetails = async () => {
    try {
      const docRef = doc(db, "users", address);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
      setdisplayname(docSnap.data().name)
      setdisplaysubscribe(docSnap.data().subscribers?.length)
      setdisplaybio(docSnap.data().bio)
      setdisplaydob(docSnap.data().dob)
      window.localStorage.setItem('currentuser',JSON.stringify(docSnap.data()))
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    loadUserDetails();
  }, [])

  const updateDetails = async () =>{
    try {
      const docRef = await setDoc(doc(db, "users", address), {
        name:name,
        dob:dob,
        bio:bio,
        comments:[],
        likedVideos:[],
        subscribers:[],
        address:address
      });
      setdob('')
      setname('')
      setbio('')
      loadUserDetails();
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div className="container" style={{backgroundColor:"black", marginTop: "8%", width:"70%"}}>
        <div className="container" style={{width:"99%"}}>
          <div className="row sh" style={{backgroundColor:"white"}}>
            
            <div className="col-lg-4">
              <div className="card-img1" style={{height:"17rem"}} ></div>
            </div>
              
            <div className = "col-lg-2">
              <p><i className="fas fa-user" style={{color:"violet"}}></i> {displayname}</p>
            </div>
      
            <div className="col-lg-2">
              <p><i className="fas fa-calendar-week" style={{color:"orange"}}></i>{displaydob}</p>
            </div>  
      
            <div className="col-lg-2">
              <p><i className="fas fa-location-arrow" style={{color:"blue"}}></i>{displaybio}</p>
            </div>

            <br/>
            <div className="col-lg-2" style={{marginLeft:"23rem", marginTop : "-14rem"}}>
              <p><i className="fas fa-users" style={{color:"gold"}}></i> Subscribers: {displaysubscribe}</p>
            </div>
            <br/>
            <div className="col-lg-2" style={{marginLeft:"21rem", marginTop : "-12rem"}}>
              <p><i className="fas fa-video" style={{color:"red"}}></i> Videos</p>
            </div>
          </div>
        </div>
      </div>
      <div className='formUserEdit'>
        <button className='editUserProfile' onClick={updateDetails}>Edit</button>
        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" name='name' />
        <input value={bio} onChange={(e)=>setbio(e.target.value)} type="text" name='bio' />
        <input value={dob} onChange={(e)=>setdob(e.target.value)} type="date" name='dob' />
      </div>
    </>
  )
}
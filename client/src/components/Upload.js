import React, { useState } from 'react';
import "../style/Upload.css";
//import { MDBBtn } from "mdbreact";
import { create } from 'ipfs-http-client';
import loader from '../assets/loader.gif' 


const client = create('https://ipfs.infura.io:5001/api/v0')
//var Buffer = require('buffer/').Buffer 




export default function Upload()
{
  
  // const [fileUrl, updateFileUrl] = useState(``)
  // const [Buffer, updateBuffer] = useState(null) 
  
  // async function onChange(e) {
  //   const file = e.target.files[0]
  //   try {
  //     const added = await client.add(file)
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`
  //     updateFileUrl(url)
      
  //   } catch (error) {
  //     console.log('Error uploading file: ', error)
  //   }  
  const [videoData, setvideoData] = useState(null)
  const [thumbnailData, setthumbnailData] = useState(null)
  
  //Get video
  const captureFile = (event,type) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () =>{
      if(type==='video'){
        setvideoData(reader.result)
      }else if(type==='thumb'){
        setthumbnailData(reader.result)
      }
    }
  }

  //Upload video

  const uploadVideo = async (title) => {
    var time1 = new Date();
    console.log('Submitting to ipfs...');
    document.querySelector('.loaderUpload').style.display = 'flex'
    const videoUpload = await client.add(videoData)
    const thumbnailUpload = await client.add(thumbnailData)
    document.querySelector('.loaderUpload').style.display = 'none'
    console.log('Upload Complete',videoUpload,thumbnailUpload);
    var time2 = new Date();
    console.log(time2-time1);
    console.log(time2.getTime()-time1.getTime());
  }
  
  return (
      <div className="upload">
        <div className='loaderUpload'>
          <img src={loader}/>
        </div>
        <div className="section-title">
          <h1
            style={{
              fontFamily: "Roboto Mono",
              paddingBottom: "15px",
              marginTop: "3rem",
            }}
          >
            Upload your video below
          </h1>
          <a
            className="bounce fa fa-arrow-down fa-2x"
            style={{ paddingBottom: "20px", color: "red" }}
          ></a>
          <div
            style={{
              paddingLeft: "10%",
              width: "50rem",
              padding:"2em",
              boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)"
            }}
          >
            <form className="form-inline" style={{ paddingBottom: "40px" }}>
              <h6 style={{ fontFamily: "Roboto Mono", marginRight: "45px" }}>
                Video Title:
              </h6>
              <input
                style={{ fontFamily: "Roboto Mono" }}
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Title"
                aria-label="Search"
              />
            </form>
            <form className="form-inline" style={{ paddingBottom: "40px" }}>
              <h6 style={{ fontFamily: "Roboto Mono" }}>Video Description:</h6>
              <input
                style={{ fontFamily: "Roboto Mono" }}
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Description"
                aria-label="Search"
              />
            </form>
            <form className="form-inline" style={{ paddingBottom: "20px" }}>
              <h6 style={{ fontFamily: "Roboto Mono" }}> Thumbnail: </h6>
              <input
                style={{
                  fontFamily: "Roboto Mono",
                  paddingLeft: "60px",
                  fontSize: "15px",
                }}
                type="file"
                accept='image/*'
                onChange={(event,) => captureFile(event,'thumb')}

              />
            </form>
            <form className="form-inline mt-4 mb-4">
              <h6 style={{ fontFamily: "Roboto Mono" }}> Video File: </h6>
              <input
                style={{
                  fontFamily: "Roboto Mono",
                  paddingLeft: "60px",
                  fontSize: "15px",
                }}
                type="file"
                accept='video/*'
                onChange={(event) => captureFile(event,'video')}
              />
            </form>
            <form className="form-inline" style={{ paddingBottom: "40px" }}>
              <h6 style={{ fontFamily: "Roboto Mono", marginRight: "3rem" }}>
                Category:
              </h6>
              <select style={{ marginLeft: "1rem" }}>
                <option disabled="true">Select category</option>
                <option value="gaming">Game</option>
                <option value="sport">Sport</option>
                <option value="music">Music</option>
                <option value="education">Education</option>
              </select>
            </form>
            <div>
              <button id="myBtn" className="upload-submit-button" onClick={uploadVideo}>
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
    </div>
  );

}



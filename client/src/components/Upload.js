import React, { useState } from 'react';
import "../style/Upload.css";
//import { MDBBtn } from "mdbreact";
import { create } from 'ipfs-http-client';
import loader from '../assets/loader.gif' 
import Compressor from 'compressorjs';



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
  const [compressedVideo, setcompressedVideo] = useState(null)
  const [videoToCompress, setvideoToCompress] = useState(null)
  
  //Get video
  const captureFile = (event,type) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () =>{
      if(type==='video'){
        setvideoData(reader.result)
        setvideoToCompress(file)
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

    new Compressor(videoToCompress, {
      quality: 0.1,
    
      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
        const formData = new FormData();
        setcompressedVideo(result)
        console.log(result);
      },
      error(err) {
        console.log(err.message);
      },
    });

  }
  
  return (
      <div className="upload">
      <video src={compressedVideo}></video>
        <div className='loaderUpload'>
          <img src={loader}/>
        </div>
        <div className="section-title">
          <h1
            style={{
              fontFamily: "Roboto Mono",
              paddingBottom: "15px",
              marginTop: "4.8rem",
              marginLeft:"14rem",
            }}
          >
            Upload your video below
          </h1>
          <a
            className="bounce fa fa-arrow-down fa-2x"
            style={{ paddingBottom: "20px", color: "red", marginLeft:"16rem"}}
          ></a>
          <div
            style={{
              paddingLeft: "2%",
              padding:"2em",
              boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)"
            }}
            className="uf"
          >
            <form className="form-inline" style={{ paddingBottom: "40px" }}>
              <h6 className="uf-lable">
                Video Title:
              </h6>
              <input
                style={{ marginLeft:"6.3rem" }}
                className="uf-input"
                type="text"
                placeholder="Title"
                aria-label="Search"
              />
            </form>
            <form className="form-inline" style={{ paddingBottom: "40px" }}>
              <h6 className="uf-lable">Video Description:</h6>
              <input
                style={{  }}
                className="uf-input"
                type="text"
                placeholder="Description"
                aria-label="Search"
              />
            </form>
            <form className="form-inline" style={{ paddingBottom: "20px" }}>
              <h6 className="uf-lable"> Thumbnail: </h6>
              <input
                style={{
                  paddingLeft: "60px",
                  fontSize: "15px",
                  marginLeft:"2.6rem"
                }}
                type="file"
                accept='image/*'
                onChange={(event,) => captureFile(event,'thumb')}

              />
            </form>
            <form className="form-inline mt-4 mb-4">
              <div className="uf-lable"> Video File: </div>
              <input
                style={{
                  paddingLeft: "60px",
                  fontSize: "15px",
                  marginLeft:"2.9rem"
                }}
                type="file"
                accept='video/*'
                onChange={(event) => captureFile(event,'video')}
              />
            </form>
            <form className="form-inline" style={{ paddingBottom: "40px" }}>
              <h6 style={{marginTop:"1.1rem" }} className="uf-lable">
                Category:
              </h6>
              <select style={{ marginLeft: "7rem" }}>
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



import React, { useState } from 'react';
import "../style/Upload.css";
import { MDBBtn } from "mdbreact";
import { create } from 'ipfs-http-client';

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
  const [fileUrl, updateFileUrl] = useState(``)
  const [buffer, updateBuffer] = useState(null) 
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }

  
  //Get video
  const captureFile = event => {
    event.preventDefault()
    const file = event.target.files[0]
    console.log(event.target , file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () =>{
      updateBuffer(reader.result)
      console.log(event ,buffer ,reader)
     // updateBuffer(Buffer(reader.results))
      // console.log('buffer', this.state.buffer);
    }
  }

  //Upload video
  
  const uploadVideo = title => {

    console.log('Submitting to ipfs...');
    client.add(buffer).then((result) => {console.log(result)}).catch((error) => {alert(error.msg)})
  }
  
  
  
  
  
  
  
  
  
  
  
  return (
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
          backgroundColor: "#fdcc0d",
          borderRadius: "20px",
          paddingTop: "60px",
          paddingBottom: "40px",
          paddingRight: "80px",
          width: "50rem",
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
            onChange={(event) => captureFile(event)}

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
  );

}


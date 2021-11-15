import React, { Fragment } from "react";
import "../style/Upload.css";
export default function Upload() {
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
          <button id="myBtn" className="upload-submit-button">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

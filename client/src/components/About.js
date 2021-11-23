import React from "react";
import "../style/About.css";
import "../assets/bg3.jpg";

export default function About({ routeChange }) {
  return (
    <div className="about">
      <div clasName="anime">
        {/* <img src="../assets/bg3.jpg" alt="background"/> */}
        <div className="about-us">
          <div className="who-we-are">
            <h3>Who we are</h3>
            <span>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </span>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img card-img1"></div>
              <div className="card-body">
                <h3>Rathin R</h3>
                <span>Web developer</span>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-img card-img2"></div>
              <card className="card-body">
                <h3>Tiwari Adarsh</h3>
                <span>Web developer</span>
                <p>
                  MERN stack Developer.Expert in implementation of each step of
                  the project. Eager to learn new technologies and
                  methodologies.
                </p>
              </card>
            </div>

            <div className="card">
              <div className="card-img card-img3"></div>
              <card className="card-body">
                <h3>Ankit Rastogi</h3>
                <span>Web developer</span>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </card>
            </div>

            <div className="card">
              <div className="card-img card-img4"></div>
              <card className="card-body">
                <h3>Amritanshu</h3>
                <span>Web developer</span>
                <p>
                  orem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
              </card>
            </div>
          </div>

          <div className="social-media">
            <i className="fa fa-github "> </i>
            <i className="fa fa-linkedin "></i>
            <i className="fa fa-twitter "></i>
            <i className="fa fa-facebook "></i>
          </div>
        </div>
        <div style={{ marginLeft: "44%" }}>
          <p>Made with 💖 in India</p>
        </div>
      </div>
    </div>
  );
}

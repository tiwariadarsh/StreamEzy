import React from 'react'
import "../style/Sidebar.css";
import {  MusicNoteBeamed, PhoneFill, TrophyFill } from "react-bootstrap-icons";

export default function Sidebar() {

    return (
        <div id="sidebar">
        <a ><MusicNoteBeamed style={{ color: "gold" , fontSize:"2rem" }} /> <span>Music</span></a>
        <a><TrophyFill style={{ color: "tomato" , fontSize:"2rem" }} /> <span>Sport</span></a>
        <a ><PhoneFill style={{ color: "pink" , fontSize:"2rem" }} /> <span>Gaming</span></a>
    </div>
    )
}

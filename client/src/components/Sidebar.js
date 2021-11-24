import React from "react";
import "../style/Sidebar.css";
import { MusicNoteBeamed, PhoneFill, TrophyFill } from "react-bootstrap-icons";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <p>
        <MusicNoteBeamed style={{ color: "gold", fontSize: "2rem" }} />{" "}
        <span>Music</span>
      </p>
      <p>
        <TrophyFill style={{ color: "tomato", fontSize: "2rem" }} />{" "}
        <span>Sport</span>
      </p>
      <p>
        <PhoneFill style={{ color: "pink", fontSize: "2rem" }} />{" "}
        <span>Gaming</span>
      </p>
    </div>
  );
}

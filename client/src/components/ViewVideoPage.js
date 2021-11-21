import React from "react";
//import { Button } from "react-bootstrap";
import "../style/ViewVideo.css";
class ViewVideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLink: props.videoLink,
      title: props.title,
    };
  }
  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="ViewVideo">
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            marginTop: "1rem",
            marginRight: "2rem",
          }}
        >
          <button
            onClick={() => this.props.onRouteChange("home")}
            className="ViewVideo_All_Button"
          >
            All Videos
          </button>
        </div>
        <div className="ViewVideo_left">
          <div className="ViewVideo_video">
            <video
              className="ViewVideo_videoPlayer"
              src={this.state.videoLink}
              controls
            />
          </div>
          <div className="ViewVideo_dashboard">
            <div className="ViewVideo_title">
              PUBG: NEW STATE - Launch Week Stream Party! Ft. Ankkita, Payal,
              Krutika, Samay, Bhuvan, Raftaar
            </div>
            <div className="ViewVideo_icons">
              <div className="liveStreamCreator_like">
                <i class="far fa-thumbs-up"></i>
              </div>
              <div className="ViewVideo_share">
                <i class="fas fa-share"></i>
              </div>
              <div className="ViewVideo_comment">
                <i class="fas fa-comment"></i>
              </div>
            </div>
            <div className="ViewVideo_items">
              <div className="ViewVideo_dp">
                <i class="fas fa-user-astronaut"></i>
                <span>Tanmay Bhat</span>
              </div>
              <div className="ViewVideo_subscribe">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="ViewVideo_description">
            PUBG: NEW STATE, is a new Battle Royale developed by PUBG STUDIOS,
            the company <br />
            behind PLAYERUNKNOWN'S BATTLEGROUNDS (PUBG). <br />
            In PUBG: NEW STATE, 100 players will fight on a new battleground
            with various weapons and <br />
            strategies until only one party remains. Utilize gear, vehicles, and
            consumables to survive the <br />
            shrinking battleground to become the last Survivor standing! Find
            out more about the game <br />
            here: https://newstate.pubg.com <br />
          </div>
        </div>
        <div className="ViewVideo_rigth">
          <div className="ViewVideo_chats">
            <div style={{ marginBottom: "0.5em", fontSize: "1.5em" }}>
              Comments
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
            <div className="chat">
              <i class="far fa-user-circle"></i>&nbsp;
              <span>Ankit Rastogi</span>&nbsp;:&nbsp;
              <span>
                how it would be looking on airport samaya saying bhuvan bhai
                nange aayen hain
              </span>
            </div>
          </div>
          <div className="liveStreamCreator_nextVideos">
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewVideoPage;

import React from "react";
//import { Button } from "react-bootstrap";
import "../style/ViewVideo.css";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import {db} from '../firebase'

class ViewVideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLink: props.videoLink,
      title: props.title,
      liked:false
    };
  } 

  async componentDidMount(){
    const userref = doc(db, "users",JSON.parse(window.localStorage.getItem('currentuser'))['address']);
    const userdata = await getDoc(userref);
    console.log(this.state.liked);
    if(userdata.data()['likedVideos'].includes(this.props.videoId)){
      this.setState({liked:true})
    }else{
      this.setState({liked:false})
    }
  }

  render() {
    const likeVideo = async () => {
      // const videoref = doc(db, "videos");
      console.log(this.props.currentVideo);
      const userref = doc(db, "users",JSON.parse(window.localStorage.getItem('currentuser'))['address']);
      const userdata = await getDoc(userref);
      if(userdata.data()['likedVideos'].includes(this.props.videoId)){
        this.setState({liked:false})
        await updateDoc(userref,{
          likedVideos: arrayRemove(this.props.videoId)
        })
      }else{
        this.setState({liked:true})
        await updateDoc(userref,{
          likedVideos: arrayUnion(this.props.videoId)
        })
      }
    }

    const { onRouteChange } = this.props;
    return (
      <>
      <div className='allVideoButton'>
        <button onClick={() => this.props.onRouteChange("home")} className="ViewVideo_All_Button">
          All Videos
        </button>
      </div>
      <div className="ViewVideo">
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
              {this.props.currentVideo[0]}
            </div>
            <div className="ViewVideo_icons">
              <div className="liveStreamCreator_like" onClick={likeVideo}>
                {
                  this.state.liked?<i class="fas fa-thumbs-up"></i>:<i class="far fa-thumbs-up"></i>
                }
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
          PUBG: NEW STATE, is a new Battle Royale developed by PUBG STUDIOS, the company <br />
                    behind PLAYERUNKNOWN'S BATTLEGROUNDS (PUBG). <br />

                    In PUBG: NEW STATE, 100 players will fight on a new battleground with various weapons and               <br />
                    strategies until only one party remains. Utilize gear, vehicles, and consumables to survive the                 <br />
                    shrinking battleground to become the last Survivor standing! Find out more about the game               <br />
                    here: https://newstate.pubg.com                 <br />
                    <br />
                    Download the game now: https://pubgnewstate.onelink.me/7alc/...                 <br />
                    <br />
                    Song Credits - Bad Boy x Bad Girl by Badshah ft. Nikhita Gandhi
                    <br />
                    PUBG: NEW STATE Social Media Handles:               <br />
                    Facebook - https://www.facebook.com/OfficialPUBG...                 <br />
                    Instagram - https://www.instagram.com/pubgnewstat...                <br />
                    YouTube - https://www.youtube.com/channel/UCnEa...              <br />
                    Twitter - https://twitter.com/PUBG_NEWSTATE                 <br />
                    <br />
                    <br />
                    Check out my second channel: https://www.youtube.com/honestlybytan...               <br />
                    <br />
                    Follow me on Instagram: https://instagram.com/tanmaybhat                <br />
                    Follow me on my Discord: https://discordapp.com/invite/6Jf4de9              <br />
                    Submit your memes on Reddit: https://www.reddit.com/r/TanmayBhatKe...               <br />
                    <br />
                    Become a member for exclusive content and privileges: https://www.youtube.com/channel/UC0rE...              <br />
                    <br />
                    Channel Manager: Revant Talekar | https://www.instagram.com/revanttalekar/              <br />
                    <br />
                    My videos use Epidemic sounds. Visit this link for a 30 day free trial: http://share.epidemicsound.com/38jcPQ               <br />
                    <br />
                    Click here to live my life: https://amazon.in/shop/tanmaybhat               <br />
                    <br />
                    #NewStateTime #PUBGNEWSTATE #NextGenBattleRoyale                <br />
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
          </div>
          <div className="liveStreamCreator_nextVideos">
            <div></div>
          </div>
        </div>
      </div>     
      </>
    );
  }
}

export default ViewVideoPage;

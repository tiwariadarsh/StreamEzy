import React from "react";
//import { Button } from "react-bootstrap";
import "../style/ViewVideo.css";
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, onSnapshot, increment  } from "firebase/firestore";
import {db} from '../firebase'

class ViewVideoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoLink: props.videoLink,
      title: props.title,
      liked:false,
      subscribed:false,
      author:null,
      comment:'',
      comments:null,
      likes:0
    };
  } 

  async componentDidMount(){
    const userref = doc(db, "users",JSON.parse(window.localStorage.getItem('currentuser'))['address']);
    const userdata = await getDoc(userref);
    // console.log(this.state.liked);
    if(userdata.data()['likedVideos']?.includes(this.props.videoId)){
      this.setState({liked:true})
    }else{
      this.setState({liked:false})
    }
    if(userdata.data()['subscribed']?.includes(this.props.currentVideo.creator)){
      this.setState({subscribed:true})
    }else{
      this.setState({subscribed:false})
    }

    // TODO : replace addres with this.props.currentvideo.creator
    const authorRef = doc(db, "users",'address');  
    getDoc(authorRef).then(authorData=>{
      // console.log(authorData.data());
      this.setState({author:authorData.data()})
    })
        
    // TODO : this.props.currentVideo.id
    const videoRef = doc(db, "videos",'5');  
    onSnapshot(videoRef,videoData=>{
      // console.log(authorData.data());
      this.setState({comments:videoData.data().comments}) 
      this.setState({likes:videoData.data().likes})    
      console.log(this.state.likes); 
    })
  }

  render() {
    const likeVideo = async () => {
      // const videoref = doc(db, "videos");
      // console.log(this.props.currentVideo);
      const userref = doc(db, "users",JSON.parse(window.localStorage.getItem('currentuser'))['address']);
      const videoRef = doc(db, "videos",'5');
      const userdata = await getDoc(userref);
      if(userdata.data()['likedVideos']?.includes(this.props.currentVideo.id)){
        this.setState({liked:false})
        await updateDoc(userref,{
          likedVideos: arrayRemove(this.props.currentVideo.id)
        })
        await updateDoc(videoRef,{
          likes:increment(-1)
        })
      }else{
        this.setState({liked:true})
        await updateDoc(userref,{
          likedVideos: arrayUnion(this.props.currentVideo.id)
        })
        await updateDoc(videoRef,{
          likes:increment(1)
        })
      }
    }

    const subscribeCreator = async () => {
      // const videoref = doc(db, "videos");
      // console.log(this.props.currentVideo);
      const userref = doc(db, "users",JSON.parse(window.localStorage.getItem('currentuser'))['address']);
      const userdata = await getDoc(userref);
      // console.log(this.props.currentVideo);
      // console.log(userdata.data()['subscribed']);
      if(userdata.data()['subscribed']?.includes(this.props.currentVideo.creator)){
        this.setState({subscribed:false})
        await updateDoc(userref,{
          subscribed: arrayRemove(this.props.currentVideo.creator)
        })
      }else{
        this.setState({subscribed:true})
        await updateDoc(userref,{
          subscribed: arrayUnion(this.props.currentVideo.creator)
        })
      }
    }

    const commentOnVideo = async () => {
      if(this.state.comment === ''){
        return;
      }
      try {
        // TODO : this.props.currentVideo.id
        const videoRef = doc(db, "videos",'5');
        await updateDoc(videoRef,{
          comments: arrayUnion({
            userId:JSON.parse(window.localStorage.getItem('currentuser'))['address'],
            name:JSON.parse(window.localStorage.getItem('currentuser'))['name'],
            content:this.state.comment
          })
        })
        this.setState({comment:''})
      } catch (error) {
        alert(error.message)
      }
    }

    const clickToCopy = (e) => {
      navigator.clipboard.writeText(e);
      alert('copied!')
    }

    // console.log(this.state.author);
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
              {this.props.currentVideo.title}
            </div>
            <div className="ViewVideo_icons">
              <div className="liveStreamCreator_like" onClick={likeVideo}>
                {
                  this.state.liked?<i class="fas fa-thumbs-up"></i>:<i class="far fa-thumbs-up"></i>
                }
                {/* {this.state.likes} */}
              </div>
              <div className="ViewVideo_share">
                <i class="fas fa-share" onClick={()=>clickToCopy(this.state.videoLink)}></i>
              </div>
            </div>
            <div className="ViewVideo_items">
              <div className="ViewVideo_dp">
                <i className="fas fa-user-astronaut"></i>
                <span>{this.state.author?.name}</span>
              </div>
              <div className='ViewVideo_subscribe'>
                <button onClick={subscribeCreator} className={`${this.state.subscribed?'subscribed':'notsubscribed'}`}>{this.state.subscribed?'Subscribed':'Subscribe'}</button>
              </div>
            </div>
          </div>
          <div className="ViewVideo_description">
            {this.props.currentVideo.description}
          </div>
        </div>
        <div className="ViewVideo_rigth">
          <div className="ViewVideo_chats">
            <div style={{ marginBottom: "0.5em", fontSize: "1.5em" }}>
              Comments
            </div>
            <div style={{flex:1}}>
            {
              this.state.comments && this.state.comments.map((c,k)=>(
                <div key={k} className="chat">
                          <i className="far fa-user-circle"></i>&nbsp;
                          <span>{`${c.name}`}</span>&nbsp;:&nbsp;
                          <span>{`${c.content}`}</span>
                        </div>
              ))
            }
            </div>
            <div className='ViewVideo_commentInput'>
              <input 
                value={this.state.comment} 
                onInput={(event)=>this.setState({comment:event.target.value})} 
                style={{flex:1}} type="text"
                placeholder='Enter Comment here...' />
              <button onClick={commentOnVideo}>comment</button>
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

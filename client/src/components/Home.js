import React ,{Component} from 'react'
import VideoCard from "./VideoCard";
import '../style/Home.css'
import ViewVideoPage from './ViewVideoPage';
import loader from '../assets/loader.gif';

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/7b973cc4e4f04c9081ead788d635c300'));

const contractAddress = '0x0447031221801f53dEbf8ba99A11d5e564D4d574';
const abi = [{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_thumbnailHash","type":"string"},{"internalType":"string","name":"_videoHash","type":"string"}],"name":"addVideo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getArrayLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getVideo","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_thumbnailHash","type":"string"},{"internalType":"string","name":"_videoHash","type":"string"}],"name":"isExisting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"videoArray","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"thumbnailHash","type":"string"},{"internalType":"string","name":"videoHash","type":"string"}],"stateMutability":"view","type":"function"}];

const contract = new web3.eth.Contract(abi, contractAddress); 


async function rpc(func) {
    while (true) {
        try {
            return await func.call();
        }
        catch (error) {
            if (!error.message.startsWith("Invalid JSON RPC response"))
                throw error;
        }
    }
}

class Home extends Component {

  constructor() {
      super();
      this.state = {
        route: 'home', // handles and captures routing state. Begin at sign in form
        videoLink: '', // used to pass IPFS video link to 'View' component
        videoId:'',
        currentVideo:null
      }
    }
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  onVideoView = (videoLink,id,obj) => {
    this.setState({videoLink: videoLink});
    this.setState({videoId:id})
    this.setState({currentVideo:obj})
  }
  componentDidMount() {
    this.createVideos(); // retrieve video thumbnails and titles after DOM has rendered
  }

  createVideos = async () => {
    let videos = [];
    var videoTitle;
    var thumbnailHash; var thumbnailLink;
    var videoHash; var videoLink;
    var result;
    var stringex;
    var length = await rpc(contract.methods.getArrayLength()); // get number of videos uploaded to website
    for (var i = 0; i < length; i++) {
      result = await rpc(contract.methods.getVideo(i)); // contract function returns a string containing video title, thumbnail hash, and video hash
      result = result.split("/");
      videoTitle = result[0];
      thumbnailHash = result[1];
      videoHash = result[2];
      stringex = "https://ipfs.io/ipfs/"
      thumbnailLink = stringex.concat(thumbnailHash); // construct link to thumbnail that users can navigate to
      videoLink = stringex.concat(videoHash); // construct link to video that users can navigate to
      videos.push(
        <VideoCard 
          key={i}
          onRouteChange={this.onRouteChange} 
          onVideoView={this.onVideoView} 
          imglink={thumbnailLink} 
          title={videoTitle} 
          videoLink={videoLink}
          videoId={i}
          videoObj={result}
        /> );
    }
    this.setState({
      Videos: videos
    })
  }
    
  render() {

    return (
      <>
      {this.state.route !== 'view'
        ?<div className="home">
          {
            this.state.Videos?
            this.state.Videos:
            <div className='loaderHome'>
              <img src={loader}/>
            </div>
          }
        </div>
        :<ViewVideoPage onRouteChange={this.onRouteChange} currentVideo={this.state.currentVideo} videoLink={this.state.videoLink} videoId={this.state.videoId}/>
      }
      </>
    );
  }
}


export default Home;


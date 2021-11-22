import React , {Fragment} from 'react';
import "../style/Upload.css";
import { MDBBtn } from "mdbreact";
import { create } from 'ipfs-http-client';
import loader from '../assets/loader.gif' 

import { ethers } from "ethers";

/*
The code below connects to Infura IPFS node via 'ipfs-http-client' library
*/
// const client = create('https://ipfs.infura.io:5001/api/v0')
//var Buffer = require('buffer/').Buffer 


// const ipfsClient = require('ipfs-http-client');
const ipfs = new create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });




/*
The code below connects to Rinkeby Ethereum network via Infura node and creates a contract object for 'playlist' contract.
The code also contains private key information of account responsible for paying for all contract state changes
*/

const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;

const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/3495fbda871a4432809be9ee44d6dc0a'));

const fromAddress = '0xe90596a9aa399c8193f3623bed2e11687c0dca6e';
const privateKey = new Buffer('2f7bc694ae41c8dfea02b8628dfb5326dff34dbdb9cb0f03f15909d03c32b1b2', 'hex');

const contractAddress = '0xc223fb0bcc860dc91937ad1b3063c25fa3b15d78';
//const abi = [{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_thumbnailHash","type":"string"},{"internalType":"string","name":"_videoHash","type":"string"}],"name":"addVideo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getArrayLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getVideo","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_thumbnailHash","type":"string"},{"internalType":"string","name":"_videoHash","type":"string"}],"name":"isExisting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"videoArray","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"thumbnailHash","type":"string"},{"internalType":"string","name":"videoHash","type":"string"}],"stateMutability":"view","type":"function"}];

const abi = [{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_thumbnailHash","type":"string"},{"internalType":"string","name":"_videoHash","type":"string"}],"name":"addVideo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getArrayLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getVideo","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_thumbnailHash","type":"string"},{"internalType":"string","name":"_videoHash","type":"string"}],"name":"isExisting","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"videoArray","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"thumbnailHash","type":"string"},{"internalType":"string","name":"videoHash","type":"string"}],"stateMutability":"view","type":"function"}];
// const playlist = JSON.parse(abi);
const contract = new web3.eth.Contract(abi, contractAddress);


/*
The function 'createRawTransaction' contains transaction-related information for the creation of a raw, unsigned transaction.
The function also encodes the data for a function call to 'playlist' smart contract that adds video title, thumbnail hashes, and video hashes to array 
*/


function createRawTransaction(videoTitle, thumbnailHash, videoHash ,categories,description,creator) {
  const txData = {
    gasLimit: web3.utils.toHex(3000000),
    gasPrice: web3.utils.toHex(10e9),
    to: contractAddress,
    from: fromAddress,
    data: contract.methods.addVideo(videoTitle, thumbnailHash, videoHash ,categories,description,creator).encodeABI()
  }
  sendRawTransaction(txData);
}




/*
The function 'sendRawTransaction' signs raw transaction with inputted private key so that new contract state can finally be processed and confirmed to blockchain
*/
const sendRawTransaction = txData => web3.eth.getTransactionCount(fromAddress).then(txCount => {
  const newNonce = web3.utils.toHex(txCount);
  const transaction = new Tx({ ...txData, nonce: newNonce }, { chain: 'rinkeby' });
  transaction.sign(privateKey);
  const serializedTx = transaction.serialize().toString('hex');
  return web3.eth.sendSignedTransaction('0x' + serializedTx)
})


/*
Function below handles asynchronous function calls to, in this case, 'playlist' contract
*/

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

/*
Function below utilizes 'playlist' smart contract function to check to see whether thumbnail or video have already been uploaded.
Returned output is either 'true' or 'false'
*/

async function run(thumbnailHash, videoHash) {
  const result = await rpc(contract.methods.isExisting(thumbnailHash, videoHash));
  return result;
}


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Submit', // manages text contained within submit button
      videoTitle: '', // contains video title inputed by user
      thumbnailBuffer: '', // holds thumbnail buffer that is then processed and uploaded to IPFS
      videoBuffer: '', // holds video buffer that is then processed and uploaded to IPFS
      thumbnailHash: '', // contains thumbnail hash
      videoHash: '' ,// contains video hash
      description:'', //contains description of the viedeo
      categories:'' //contains category of the video being uploaded
    }
  }
  onTitleChange = (event) => {
    this.setState({videoTitle: event.target.value})
  }
  onDescriptionChange = (event) => {
    this.setState({description: event.target.value})
  }
  onCategoriesChange = (event) => {
    this.setState({categories: event.target.value})
  }
  onThumbnailUpload = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ thumbnailBuffer: Buffer(reader.result) })
      console.log('thumbnailBuffer', this.state.thumbnailBuffer)
    }
  }
  onVideoUpload = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ videoBuffer: Buffer(reader.result) })
      console.log('videoBuffer', this.state.videoBuffer)
    }
  }
  onSubmit = async (event) => {
    event.preventDefault()
    if (this.state.videoTitle == '' || this.state.thumbnailBuffer == '' || this.state.videoBuffer == '') {
      alert("No video title, attached thumbnail, or attached video!");
    } else if (await run(this.state.thumbnailHash, this.state.videoHash)) {
      alert("Thumbnail and/or video already exists!");
    } else {
      this.setState({status: 'Uploading...'})
      document.getElementById("myBtn").disabled = true; // disable submit button
      for await (const file of ipfs.add(this.state.thumbnailBuffer)) {
        this.setState({ thumbnailHash: file.path })
        console.log('thumbnailHash', this.state.thumbnailHash)
      }
      for await (const file of ipfs.add(this.state.videoBuffer)) {
        this.setState({ videoHash: file.path })
        console.log('videoHash', this.state.videoHash)
        this.setState({status: 'Done!'}) // notify user of completion after both thumbnail and video have been uploaded to IPFS
      }
      createRawTransaction(this.state.videoTitle, this.state.thumbnailHash, this.state.videoHash);
    }
  }









  
  render() {
    //const { onRouteChange } = this.props;

    return (
    //   <div>
    //   <Fragment>
    //   <div className="navigation-bar-2">
    //     <MDBBtn onClick={() => onRouteChange('home')} color="mdb-color">Home</MDBBtn>
    //   </div>
    // </Fragment>
        <div className="upload">        
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
                onChange={this.onTitleChange}
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
                onChange={this.onDescriptionChange}
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
                onChange={this.onThumbnailUpload}

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
                onChange={this.onVideoUpload}
              />
            </form>
            <form className="form-inline" style={{ paddingBottom: "40px" }}>
              <h6 style={{marginTop:"1.1rem" }} className="uf-lable">
                Category:
              </h6>
              {/* onchange(category)  */}

              <select style={{ marginLeft: "7rem" }}>
                <option disabled="true">Select category</option>
                <option value="gaming">Game</option>
                <option value="sport">Sport</option>
                <option value="music">Music</option>
                <option value="education">Education</option>
              </select>
             
            </form>
            
            <div>
              <button id="myBtn" className="upload-submit-button" onClick={this.onSubmit} value={this.state.status}>
                {" "}
                Submit{" "}
              </button>
            </div>
          </div>
        </div>
    </div>
      
    );
  }
}

export default Upload;

































































// export default function Upload()
// {
  
//   // const [fileUrl, updateFileUrl] = useState(``)
//   // const [Buffer, updateBuffer] = useState(null) 
  
//   // async function onChange(e) {
//   //   const file = e.target.files[0]
//   //   try {
//   //     const added = await client.add(file)
//   //     const url = `https://ipfs.infura.io/ipfs/${added.path}`
//   //     updateFileUrl(url)
      
//   //   } catch (error) {
//   //     console.log('Error uploading file: ', error)
//   //   }  
//   const [videoData, setvideoData] = useState(null)
//   const [thumbnailData, setthumbnailData] = useState(null)
  
//   //Get video
//   const captureFile = (event,type) => {
//     event.preventDefault()
//     const file = event.target.files[0]
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onloadend = () =>{
//       if(type==='video'){
//         setvideoData(reader.result)
//       }else if(type==='thumb'){
//         setthumbnailData(reader.result)
//       }
//     }
//   }

//   //Upload video

//   const uploadVideo = async (title) => {
//     var time1 = new Date();
//     console.log('Submitting to ipfs...');
//     document.querySelector('.loaderUpload').style.display = 'flex'
//     const videoUpload = await client.add(videoData)
//     const thumbnailUpload = await client.add(thumbnailData)
//     document.querySelector('.loaderUpload').style.display = 'none'
//     console.log('Upload Complete',videoUpload,thumbnailUpload);
//     var time2 = new Date();
//     console.log(time2-time1);
//     console.log(time2.getTime()-time1.getTime());
//   }
  
//   return (
//       <div className="upload">
//         <div className='loaderUpload'>
//           <img src={loader}/>
//         </div>
//         <div className="section-title">
//           <h1
//             style={{
//               fontFamily: "Roboto Mono",
//               paddingBottom: "15px",
//               marginTop: "4.8rem",
//               marginLeft:"14rem",
//             }}
//           >
//             Upload your video below
//           </h1>
//           <a
//             className="bounce fa fa-arrow-down fa-2x"
//             style={{ paddingBottom: "20px", color: "red", marginLeft:"16rem"}}
//           ></a>
//           <div
//             style={{
//               paddingLeft: "2%",
//               padding:"2em",
//               boxShadow: "0 6px 16px 0 rgb(0 0 0 / 20%)"
//             }}
//             className="uf"
//           >
//             <form className="form-inline" style={{ paddingBottom: "40px" }}>
//               <h6 className="uf-lable">
//                 Video Title:
//               </h6>
//               <input
//                 style={{ marginLeft:"6.3rem" }}
//                 className="uf-input"
//                 type="text"
//                 placeholder="Title"
//                 aria-label="Search"
//               />
//             </form>
//             <form className="form-inline" style={{ paddingBottom: "40px" }}>
//               <h6 className="uf-lable">Video Description:</h6>
//               <input
//                 style={{  }}
//                 className="uf-input"
//                 type="text"
//                 placeholder="Description"
//                 aria-label="Search"
//               />
//             </form>
//             <form className="form-inline" style={{ paddingBottom: "20px" }}>
//               <h6 className="uf-lable"> Thumbnail: </h6>
//               <input
//                 style={{
//                   paddingLeft: "60px",
//                   fontSize: "15px",
//                   marginLeft:"2.6rem"
//                 }}
//                 type="file"
//                 accept='image/*'
//                 onChange={(event,) => captureFile(event,'thumb')}

//               />
//             </form>
//             <form className="form-inline mt-4 mb-4">
//               <div className="uf-lable"> Video File: </div>
//               <input
//                 style={{
//                   paddingLeft: "60px",
//                   fontSize: "15px",
//                   marginLeft:"2.9rem"
//                 }}
//                 type="file"
//                 accept='video/*'
//                 onChange={(event) => captureFile(event,'video')}
//               />
//             </form>
//             <form className="form-inline" style={{ paddingBottom: "40px" }}>
//               <h6 style={{marginTop:"1.1rem" }} className="uf-lable">
//                 Category:
//               </h6>
//               <select style={{ marginLeft: "7rem" }}>
//                 <option disabled="true">Select category</option>
//                 <option value="gaming">Game</option>
//                 <option value="sport">Sport</option>
//                 <option value="music">Music</option>
//                 <option value="education">Education</option>
//               </select>
//             </form>
//             <div>
//               <button id="myBtn" className="upload-submit-button" onClick={uploadVideo}>
//                 {" "}
//                 Submit{" "}
//               </button>
//             </div>
//           </div>
//         </div>
//     </div>
//   );

// }



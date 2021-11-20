import './App.css';
import Formate from './utils/Formate';
import { BrowserRouter, Switch, Router,Route, Link, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import GoLive from './components/GoLive';
import UserProfile from './components/UserProfile';
import Upload from './components/Upload';
import LiveStreamCreator from './components/LiveStreamCreator';
import LiveStreamViewer from './components/LiveStreamViewer';
import Test from './components/Test';
import ViewVideoPage from './components/ViewVideoPage';
import React, { Component } from "react";
import web3Connection from './web3Connection';

import Contract from './Contract';




class App extends Component {
  state = {
    web3: null,
    account: null,
    contract: null,
    balance: null,
    signedUp: false,
    loggedIn: false,
    email: ''
    //color: 'teal'
  };

  constructor() {
    super();
    this.state = {
      route: 'register', // handles and captures routing state. Begin at sign in form
      videoLink: '' // used to pass IPFS video link to 'View' component
    }
  }
  onRouteChange = (route) => {
    this.setState({route: route});
  }
  //handleItemClick = (e, { name }) => this.setState({ activeItem: name, color: 'teal' })

  componentDidMount = async () => {
    try {
      const web3 = await web3Connection();
      const contract = await Contract(web3);
      const accounts = await web3.eth.getAccounts();

      this.setState({ web3, contract, account: accounts[0] }, this.start);
    } catch (error) {
      alert(
        `Failed to load web3`,
      );
      console.error(error);
    }

    await this.getAccount();
  };

  start = async () => {
    await this.getAccount();
    const { web3, contract , account } = this.state;

    console.log("web3 =", web3);
    console.log("Contract =", contract);
    console.log("Acoount =", account);
  };

  getAccount = async () => {
    if (this.state.web3 !== null || this.state.web3 !== undefined) {
      await window.ethereum.on('accountsChanged', async (accounts) => {
        this.setState({
          account: accounts[0],
          loggedIn: false
        });

        this.state.web3.eth.getBalance(accounts[0], (err, balance) => {
          if (!err) {
            this.setState({ balance: Formate(this.state.web3.utils.fromWei(balance, 'ether')) });
          }
        });
      });
    }
  }

  accountCreated = async (signedUp) => {
    this.setState({ signedUp });
  }

  userSignedIn = async (loggedIn, email) => {
    this.setState({ loggedIn, email });
  }

  loggedOut = async (loggedIn) => {
    this.setState({ loggedIn });
  }

  
  render() {
   

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    const  rathin =()=> {
      switch(this.state.route) {
        case "/":
          <Home onRouteChange={this.onRouteChange} />
        break;
       case "/About":
<About onRouteChange={this.onRouteChange} />
        break;

        case "/GoLive":
          <GoLive onRouteChange={this.onRouteChange} />
         break;
         case "/login":
          <login onRouteChange={this.onRouteChange} />
           break;
           case "/signup":
            <Signup onRouteChange={this.onRouteChange} />
             break;
             case "/upload":
              <Upload onRouteChange={this.onRouteChange} />
               break;
               case "/profile":
                <UserProfile onRouteChange={this.onRouteChange} />
                 break;
                 case "/stream-creator":
              <LiveStreamCreator onRouteChange={this.onRouteChange} />
                   break;
                   case "/test":
                <Test onRouteChange={this.onRouteChange} />
                     break;
         
   
}
    }

  return (
    <div className="App">
    
      {window.innerWidth>650?<Sidebar/>:''}
      <Navbar onRouteChange={this.onRouteChange} />
      
    { rathin()}

      {/* }
        { this.state.route !== 'Login' & this.state.route !== 'Signup'
          ? ( this.state.route === 'Home'
            ?
            : ( this.state.route === 'ViewVideoPage'
              ? <ViewVideoPage onRouteChange={this.onRouteChange} videoLink={this.state.videoLink}/>
              : <Upload onRouteChange={this.onRouteChange} /> )
              )
          : ( this.state.route === 'Login'
            ? <Login onRouteChange={this.onRouteChange}/>
            : <Signup onRouteChange={this.onRouteChange}/> )
        } */}
    
    </div>
  );
}
}
export default App;



























// import './App.css';
// import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Signup from './components/Signup';
// import Login from './components/Login';
// //import Home from './components/Home';
// import About from './components/About';
// import GoLive from './components/GoLive';
// import UserProfile from './components/UserProfile';
// import Upload from './components/Upload';
// import LiveStreamCreator from './components/LiveStreamCreator';
// import LiveStreamViewer from './components/LiveStreamViewer';
// import Test from './components/Test';


// function App() {
//   return (
//     <div className="App">

//             {window.innerWidth>650?<Sidebar/>:''}
//       <Router>
//         <Navbar/>
//         <Switch>
//             <Route exact path="/">
//               {/* <Home/> */}
//             </Route>
//             <Route exact path="/About">
//               <About/>
//             </Route>
//             <Route exact path="/GoLive">
//               <GoLive/>
//             </Route>
//             <Route exact path="/login">
//               <div className="d-flex justify-content-center align-item-center mt-5">
//               <Login/>
//               </div>
//             </Route>
//             <Route exact path="/signup">
//               <div className="d-flex justify-content-center align-item-center mt-5">
//               <Signup/>
//               </div>
//             </Route>
//             <Route exact path="/upload">
//               <div className="d-flex justify-content-center align-item-center mt-5">
//                 <Upload />
//               </div>
//             </Route>
//             <Route exact path = '/profile'>
//               <UserProfile/>
//             </Route>
//             <Route exact path = '/stream-creator'>
//               <LiveStreamCreator/>
//             </Route>
//             <Route exact path = '/test'>
//               <Test/>
//             </Route>
//           </Switch>
//          </Router>
//     </div>
//   );
// }

// export default App;


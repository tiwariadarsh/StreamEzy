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
      route: '/',
      videoLink: ''
    }
  }
  // onRouteChange = (route) => {
  //   console.log('route change');
  //   this.setState({route: route});
  // }

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

    const routeChange = (route) => {
      this.setState({route})
    }

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    const  rathin = ( )=> {
      switch(this.state.route) {
        case "/":
          return <Home routeChange={routeChange} />
          break;
        case "/about":
          return <About routeChange={routeChange} />
          break;
        case "/golive":
          return <GoLive routeChange={routeChange} />
          break;
        case "/login":
          return <Login routeChange={routeChange} />
          break;
        case "/signup":
          return <Signup routeChange={routeChange} />
          break;
        case "/upload":
          return <Upload routeChange={routeChange} />
          break;
        case "/profile":
          return <UserProfile routeChange={routeChange} />
          break;
        case "/stream-creator":
          return <LiveStreamCreator routeChange={routeChange} />
          break;
        case "/test":
          return <Test routeChange={routeChange} />
          break; 
      }
    }
  return (
      <div className="App">
        {window.innerWidth>650?<Sidebar/>:''}
        <Navbar routeChange={routeChange} />
        { rathin()}
      </div>
    );
  }
}
export default App;
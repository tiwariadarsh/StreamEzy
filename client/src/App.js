import './App.css';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import GoLive from './components/GoLive';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        {window.innerWidth>650?<Sidebar/>:''}
        <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/About">
              <About/>
            </Route>
            <Route exact path="/GoLive">
              <GoLive/>
            </Route>
            <Route exact path="/login">
              <div className="d-flex justify-content-center align-item-center mt-5">
              <Login/>
              </div>
            </Route>
            <Route exact path="/signup">
              <div className="d-flex justify-content-center align-item-center mt-5">
              <Signup/>
              </div>
            </Route>
            <Route exact path="/upload">
              <div className="d-flex justify-content-center align-item-center mt-5">
              </div>
            </Route>
            <Route exact path = '/profile'>
              <UserProfile/>
            </Route>
          </Switch>
         </Router>
    </div>
  );
}

export default App;

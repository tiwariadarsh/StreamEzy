import './App.css';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Navbarx from './components/Navbar';
import Sidebar from './components/Sidebar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbarx/>
      <Sidebar/>
      <Switch>
          <Route exact path="/">
         <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
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
        </Switch>
         </Router>
     
    </div>
  );
}

export default App;

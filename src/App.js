import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './components/Home';
import Chat from './components/Chat';
import Signup from './components/Signup';
import Login from './components/Login';
import { auth } from './services/firebase';

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthenticated(true);
                setLoading(false);
            } else {
                setAuthenticated(false);
                setLoading(false);
            }
        })
    }, [])

  const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
  }

  const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === false
                ? <Component {...props} />
                : <Redirect to='/chat' />}
        />
    )
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    loading === true ? <h2>Loading...</h2> :
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute path="/chat" authenticated={authenticated} component={Chat}></PrivateRoute>
            <PublicRoute path="/signup" authenticated={authenticated} component={Signup}></PublicRoute>
            <PublicRoute path="/login" authenticated={authenticated} component={Login}></PublicRoute>
          </Switch>
        </Router>
  );
}

export default App;

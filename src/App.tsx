import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Ask from './Components/Pages/Ask';
import Cars from './Components/Pages/Cars';
import ContactUs from './Components/Pages/ContactUs';
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cars' component={Cars} />
        <Route path='/ask' component={Ask} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
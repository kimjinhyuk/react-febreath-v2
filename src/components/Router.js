import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from '../routes/Auth';
// import App from './App';
import Navbar from './Navbar';
import Footer from './pages/Footer.js/Footer';
import Home from './pages/HomePage/Home';


const AppRouter = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Navbar />
      <Switch>
        {isLoggedIn ? 
        <>
          <Route>
            <Home />
          </Route>
        </> : <Route><Auth /></Route>}
      </Switch>
      <Footer />
    </Router>
  )
}
export default AppRouter;
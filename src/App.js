import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
// import Services from './components/pages/Services/Services';
// import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import Record from './components/pages/Record/Record';
import CxrTest from './components/pages/CxrTest/CxrTest';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/services' component={Services} /> */}
        <Route path='/record' component={Record} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/cxrtest' component={CxrTest} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
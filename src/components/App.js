import React from 'react';
import './App.css';
import Home from './pages/HomePage/Home';
import About from './pages/About/About';
// import Products from './components/pages/Products/Products';
// import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './pages/Footer.js/Footer';
import Record from './pages/Record/Record';
import CxrTest from './pages/CxrTest/CxrTest';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/record' component={Record} />
        {/* <Route path='/sign-up' component={SignUp} /> */}
        <Route path='/cxrtest' component={CxrTest} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
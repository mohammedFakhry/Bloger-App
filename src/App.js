import React, { useState, useReducer, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/footer';

import TopBar from './components/topBar'
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/error';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Settings from './pages/settings';
import Single from './pages/single';
import Write from './pages/write';


function App() {
  const [user, setUser] = useState(false);

  return (
    <Router>
      <TopBar user={user} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={user? <Home />: <Register />} />
        <Route path='/login' element={user? <Home />: <Login />} />
        <Route path='/write' element={user? <Write />: <Login />} />
        <Route path='/settings' element={user? <Settings />: <Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
// import Service from './pages/Service.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Error from './pages/Error.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (<>
  
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/service" element={<Service/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
       <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;

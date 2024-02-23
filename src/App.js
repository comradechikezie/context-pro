import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/navbar";
import Content from "./components/ui/content";
import { AuthProvider } from "./context/authContext";
import Home from "./pages/home";
import About from "./pages/about";
import Community from "./pages/community";
import Faq from "./pages/faq";

// import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/community' element={<Community />}/>
            <Route path='/faq' element={<Faq />}/>
        </Routes>
        {/* <Content /> */}
      </AuthProvider>
    </Router>
       
  );
};

export default App;

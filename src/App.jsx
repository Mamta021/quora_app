import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Navbar from './quora/Navbar';
import Sidebar from './quora/Sidebar';
import Header from './quora/Header';
import Footer from './quora/Footer';
import Notification from './quora/Notification';

function App() {
  return (
    <>
    <Navbar/>
       <BrowserRouter> 
         <Routes> 
                 < Route exact path='/'></Route>
                 < Route exact path='/notification' element={< Notification />}></Route> 
     </Routes>      
     </BrowserRouter>
     <Sidebar />
       <Header />
       <Footer /> 
    </>
  )
}
export default App

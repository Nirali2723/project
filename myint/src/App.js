import React from 'react'
import Home from './Home';
import "./App.css"
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Hireartist from './Hireartist';
import Login from './Login';
import Service from './Service';
// import Log from './Log'
import Tailwind from './Tailwind';
import About from './About';
import Signup from './Signup';

import Signin from './Signin';
import Navbar from './Navbar';
import Logout1 from './Logout1';
import Contact from './Contact';
import Footer from './Footer';
import Stepper from "./Stepper";
import Swipper from './Swipper';
import Testimonial from './Testimonial';

// import ProgressBar from './Progressbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Home/>}></Route>    
       <Route path='/Hireartist' element={<Hireartist/>}> </Route>
      <Route path='/Login' element={<Login/>}> </Route>
      <Route path='/Service' element={<Service/>}> </Route>
      <Route path='/Signup' element={<Signup/>}></Route>      
           
      <Route path='/Tailwind' element={<Tailwind/>}> </Route>
      <Route path='/About' element={<About/>}> </Route>
      <Route path='/Signin' element={<Signin/>}> </Route>
      <Route path='/Navbar' element={<Navbar/>}> </Route>
      <Route path='/Logout1' element={<Logout1/>}> </Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Footer' element={<Footer/>}> </Route>
      <Route path='/Stepper' element={<Stepper/>}> </Route>
      <Route path='/Swipper' element={<Swipper/>}></Route>
      <Route path='/Testimonial' element={<Testimonial/>}></Route>
      {/* <Route path='/Progressbar' element={<ProgressBar/>}></Route> */}
    
      </Routes>
      </BrowserRouter>

     
    </div>
  )
}

export default App

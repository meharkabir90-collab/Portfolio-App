import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import Project from './Pages/Projects/Project'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <Navbar />
    <Routes>
      <Route 
        path="/" 
        element={<Home />} 
      />

      <Route 
      path= '/home'
       element={
              <Home />
       }
      
      />
      <Route 
      path= '/contact'
       element={
              <Contact />
       }
      
      />

      <Route 
       path= '/project'
       element={
              <Project />
       }
      
      />


    </Routes>
    <Footer />
    
      
    </>
  )
}

export default App;

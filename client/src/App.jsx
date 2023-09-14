import { useState } from 'react'

// import './index.css'
import Header from './components/Header'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer'
import Home from './pages/Home';
import Login from './pages/Login';
import Tour from './pages/Tour';
import About from './pages/About';
import Register from './pages/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className=''>
      <Header/>
      
      
          <Routes>
                <Route index element={<Home/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/tour' element={<Tour/>}/>
              <Route path='/register' element={<Register/>} />
          </Routes>




      
      


      
      <Footer/>
      
    </div>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Exprience from './components/Exprience'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Exprience/>
      <Subscription/>
      <Footer/>
      
    </div>
  )
}

export default App

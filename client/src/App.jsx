import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './index.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-700'>
      <Header/>
      
    </div>
  )
}

export default App

import React from 'react'
import Hero from '../components/Hero'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Exprience from '../components/Exprience'
import Subscription from '../components/Subscription'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div>

      <Hero/>
      <Exprience/>
      <Gallery/>
      <Subscription/>
      
    </div>
  )
}

export default Home

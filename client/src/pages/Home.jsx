import React from 'react'
import Hero from '../components/Hero'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Exprience from '../components/Exprience'
import Subscription from '../components/Subscription'
import Offer from '../components/Offer'
import Gallery from '../components/Gallery'
import Comments from '../components/Comments'

function Home() {
  return (
    <div>

      <Hero/>
      <Offer/>
      <Exprience/>
      
      <Gallery/>
      <Comments/>
      <Subscription/>
      
    </div>
  )
}

export default Home

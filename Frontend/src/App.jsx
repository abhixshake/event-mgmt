import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Homecard from './components/Homecard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Homecard/>
      <Footer/>
    </div>
  )
}

export default App
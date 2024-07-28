import React from 'react'
import Navbar from '../components/Navbar'
import Homecard from '../components/Homecard'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Navbar/>
                <Banner />
                <Homecard/>
                <Footer/>
            </div>
        </>
    )
}

export default Home

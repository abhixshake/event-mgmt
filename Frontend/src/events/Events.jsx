import React from 'react'
import Navbar from '../components/Navbar'
import Eventspage from '../components/Eventspage'
import Footer from '../components/Footer'

const Events = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <Eventspage />
            </div>
            <Footer />
        </>
    )
}

export default Events

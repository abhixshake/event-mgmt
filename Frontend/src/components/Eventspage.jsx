import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

const Eventspage = () => {
    return (
        <>
            {/* Display the card */}
            <div className="max-w-screen-2xl container mx-auto md:px-4">
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>
                        We're delighted to have you <span className='text-pink-500'>Here !</span>
                    </h1>
                    <p className='mt-12'>"Welcome to our Events page, where unforgettable experiences come to life! Whether you're looking to celebrate a milestone, host a corporate gathering, or immerse yourself in community festivities, we’ve got you covered. Our expertly curated events are designed to engage, inspire, and create lasting memories. Join us as we bring people together and make every moment count!"</p>
                    <Link to="/">
                        <button className='mt-6 bg-pink-500 rounded-md hover:bg-pink-700 duration-300 text-whit px-4 py-2'>Back</button>
                    </Link>
                </div>
                <div className="mt-12 flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-full">


                        {
                            list.map((item) => (
                                <Cards key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eventspage

import React from 'react'

function Cards ({item}) {
    
    return (
        <>
        <div className='mt-4 my-5 p-3'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={item.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>Make your moments special.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline p-3">Trend</div>
                        <div className="badge badge-outline badge-accent hover:text-pink-500 duration-200 cursor-pointer p-3">Details</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards

import React from 'react';

function Cards({ item }) {
    return (
        <div className='mt-4 mx-auto'>
            <div className="card bg-base-100 w-full max-w-xs shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"> {/* Use full width and max width for responsiveness */}
                <figure>
                    <img
                        src={item.image}
                        alt={item.title} // Changed alt to item.title for better accessibility
                        className="object-cover h-48 w-full" // Set image height and width
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>Make your moments special.</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline p-2">Trend</div>
                        <div className="badge badge-outline badge-accent hover:text-pink-500 duration-200 cursor-pointer p-2">Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;

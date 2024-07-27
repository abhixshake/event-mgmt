import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';

function Homecard() {
    const filterData = list.filter((data) => data.category === "Offer");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <h1 className="font-bold text-2xl pt-1 pb-6"> Events</h1>
                    <p className="pb-6"> Explore, Engage, and Elevate your experience with our events! </p>
                </div>
            </div>
            <div className="px-20"> {/* Added padding for spacing */}
                <Slider {...settings} className="mx-auto"> {/* Center the slider */}
                    {filterData.map((item) => (
                        <div className="flex justify-center" key={item.id}> {/* Center each card */}
                            <Cards item={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Homecard;

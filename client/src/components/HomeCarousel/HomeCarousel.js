import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeCard from '../HomeCards/HomeCard';



function HomeCarousel({data, sectionName}) {

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items:4 },
    };

    const items = data.slice(0,10).map((item) => <HomeCard product ={item}/>)

    return (
        <div >
            <div>
                <h1  className='text-3xl mt-4 text-center font-bold'>{sectionName}</h1>
                <AliceCarousel
                   autoPlay
                   autoPlayInterval={1000}
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
            </div>

        </div>
    )
}

export default HomeCarousel




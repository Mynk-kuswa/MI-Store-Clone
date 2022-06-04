import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/Banner.css'

const Banner = ({ banner }) => {
    return (
        <div className='Banner'>
            <Carousel fade>
                {banner.end.map((item, index) => (
                    <Carousel.Item key={item.image} id="banner" interval={1000} keyboard={true}>
                        <img src={item.image} alt={`${index} banner`} />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <div></div>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read More</u>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>
        </div>
    )
}

export default Banner
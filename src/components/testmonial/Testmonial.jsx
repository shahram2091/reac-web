import React from 'react'
import './testmonial.css'
import ATRA1 from '../../assets/avatar1.png'
import ATRA2 from '../../assets/avatar2.png'
import ATRA3 from '../../assets/avatar3.png'
import ATRA4 from '../../assets/avatar4.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar : ATRA1 ,
        name : 'Tina Snow' ,
        review : 'Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ex ea commodo consequat. '
    },
    {
        avatar : ATRA2 ,
        name : 'Shata wale',
        review : 'Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ex ea commodo consequat.'
    },
    {
        avatar : ATRA3 ,
        name : 'Kwome Despite',
        review : 'Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ex ea commodo consequat.'
    },
    {
        avatar : ATRA4 ,
        name : 'NINA Ama',
        review : 'Lorem ipsum dolor sit amet,  ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ex ea commodo consequat.'
    },
]
const testmonials = () => {
    return (
    <section id='testimonials'>
        <h5>Rewiw from clients</h5>
        <h2>Testimonials</h2>
       <Swiper className="container testimonial_container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerview={1}
            pagination={{clickable: true}}                                          
            >{
                data.map(({avatar,name,review},index)=>{
                    return (
                        <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src= {avatar} />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client_review'>
                                    {review}
                                </small>
                        </SwiperSlide>
                    )
                })
            }
       </Swiper> 
    </section>
    )
}
export default testmonials;
import React from 'react'

import './profile.css';
import { Carousel } from 'react-bootstrap';
import MOTOGP from '../../Images-Videos/videos/MOTOGP.mp4';

const slideImages = [
  {
    src: require('../../Images-Videos/images/motogp/ktm-motogp.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-1.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-2.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-3.jpg')
  },
  {
    src: require('../../Images-Videos/images/motogp/motogp-4.jpg')
  }
];

function Profile() {

  return (
    <div>
      <h1 className='profile-head'>Ready to Race</h1>
      <h2 className='profile-subhead'>We are motogp</h2>
      <Carousel touch='true' interval={4000}>
        {slideImages.map((slide) => {

          return <Carousel.Item id="item">
            <img src={slide.src} className="ima" />
          </Carousel.Item>

          })}
      </Carousel>

      <h2 className='profile-subhead'>We are ready for 2023</h2>

      <video width='100%' loop playsinline controls className='video-ktm'>
        <source src={MOTOGP} type="video/mp4"></source>
      </video>
    </div>
  )
}

export default Profile;
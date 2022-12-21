import React from 'react'

import './profile.css';
import { Carousel, Card, Button } from 'react-bootstrap';
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

const riders = [
  {
    name: 'Brad Binder',
    class: 'MotoGP',
    number: 33,
    country: 'South Africa',
    birthday: 'August 11th, 1995',
    src: require('../../Images-Videos/images/motogp/riders/brad.jpg')
  },
  {
    name: 'Miguel Oliveira',
    class: 'MotoGP',
    number: 88,
    country: 'Portugal',
    birthday: 'January 1st, 1995',
    src: require('../../Images-Videos/images/motogp/riders/miguel.jpg')
  },
  {
    name: 'Raul fernandez',
    class: 'MotoGP',
    number: 25,
    country: 'Spain',
    birthday: 'October 23rd, 2000',
    src: require('../../Images-Videos/images/motogp/riders/raul.jpg')
  },
  {
    name: 'Remy Gardner',
    class: 'MotoGP',
    number: 87,
    country: 'Australia',
    birthday: 'February 24th, 1998',
    src: require('../../Images-Videos/images/motogp/riders/remy.jpg')
  },
  {
    name: 'Jaume Masia',
    class: 'Moto3',
    number: 5,
    country: 'Spain',
    birthday: 'October 31st, 2000',
    src: require('../../Images-Videos/images/motogp/riders/masia.jpg')
  },
  {
    name: 'Pedro Acosta',
    class: 'Moto2',
    number: 51,
    country: 'Spain',
    birthday: 'May 25th, 2005',
    src: require('../../Images-Videos/images/motogp/riders/pedro.jpg')
  },
  {
    name: 'Deniz Oncu',
    class: 'Moto3',
    number: 53,
    country: 'Turkey',
    birthday: 'July 26th, 2003',
    src: require('../../Images-Videos/images/motogp/riders/deniz.jpg')
  },
]

function Profile() {

  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
        <img src={require('../../Images-Videos/images/Factory Racing Logo.jpg')} className='factory'/>
      </div>
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

      <h1 className='profile-head'>Meet our Riders</h1>

      <div className='rider'>
          {riders.map((rider) => {

            return <Card className='kartu'>
              <Card.Img src={rider.src} className='img-card'/>
              <Card.ImgOverlay>
                <div className='rider-img-text'>
                  <div className='d-flex flex-column'>
                    <h1>
                      {rider.name}
                    </h1>
                    <Button className='rider-details'>Rider Details</Button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          })}
      </div>
    </div>
  )
}

export default Profile;
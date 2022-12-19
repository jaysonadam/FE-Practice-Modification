import React from 'react';

import './home.css';
import { Button } from 'react-bootstrap';
import KTMINTRO from '../../Images-Videos/videos/KTMINTRO.mp4';
import DUKERIDER from '../../Images-Videos/videos/DUKERIDER.mp4'

function Home() {
  return (
    <div className='d-flex justify-content-center w-100'>

      <div className='d-flex flex-column'>
        <div className='cont'>
          <video width='100%' src={KTMINTRO} autoPlay loop playsinline className='video-ktm' />
          <div className='w'>
            <h1>Welcome to KTM</h1>
            <h3 className='sub'>Ready to Race</h3>
            <Button className='button-home' href="/products">
              Our Bikes
            </Button>
            <Button className='button-home' href="/products">
              Racing Profile
            </Button>
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          <video width='100%' src={DUKERIDER} autoPlay loop playsinline className='video-ktm' />
        </div>
      </div>

    </div>
  )
}

export default Home;

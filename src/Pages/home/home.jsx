import React from 'react';
import { useInView } from 'react-intersection-observer';

import './home.css';
import { Button } from 'react-bootstrap';
// import KTMINTRO from '../../Images-Videos/videos/KTMINTRO.mp4';
// import DUKERIDER from '../../Images-Videos/videos/DUKERIDER.mp4';

function Home() {
  const { ref: myRef, inView: myComponentIsVisible } = useInView();

  return (
    <div className='d-flex justify-content-center w-100'>

      <div className='d-flex flex-column'>
        <div className='cont'>
          {/* <video width='100%' loop playsinline controls className='video-ktm'>
            <source src={KTMINTRO} type="video/mp4"></source>
          </video> */}
          <img src={require('../../Images-Videos/images/rc/rc.jpg')} className='bg-home' />
          <div className='w'>
            <h1>Welcome to KTM</h1>
            <h3 className='sub'>Ready to Race</h3>
            <Button className='button-home' href="/products">
              Our Bikes
            </Button>
            <Button className='button-home' href="/profile">
              Racing Profile
            </Button>
          </div>
        </div>

        <div className='d-flex justify-content-center'>
          {/* <video width='100%' loop playsinline controls className='video-ktm'>
            <source src={DUKERIDER} type="video/mp4"></source>
          </video> */}
          <img src={require('../../Images-Videos/images/rc/rc390.jpg')} className={`${ myComponentIsVisible ? 'bg-390 bg-animated' : 'bg-390' }`} ref={myRef} />
        </div>
      </div>

    </div>
  )
}

export default Home;

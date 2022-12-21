import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import './home.css';
import { Button } from 'react-bootstrap';
// import KTMINTRO from '../../Images-Videos/videos/KTMINTRO.mp4';
// import DUKERIDER from '../../Images-Videos/videos/DUKERIDER.mp4';

function Home() {
  const { ref: myRef, inView: isVisible } = useInView();
  const { ref: textRef, inView: textIsVisible } = useInView();

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

          {/* <video width='100%' loop playsinline controls className='video-ktm'>
            <source src={DUKERIDER} type="video/mp4"></source>
          </video> */}
          <div className='cont'>
            <img src={require('../../Images-Videos/images/rc/rc390.jpg')} className={`${ isVisible ? 'bg-390 bg-animated' : 'bg-390' }`} ref={myRef}/>
            <div className='text-390'>
              <h1>Feel the power</h1>
              <h3 className='sub'>Experience the torque</h3>
              <h3 className='sub'>#getDUKED #weRC</h3>
            </div>
          </div>

          <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='cnt'>
              <a href='/products'>
                <img src={require('../../Images-Videos/images/duke/duke390-10.jpg')} className='img-click'></img>
                <div className='img-text'>
                    <h1 className='img-sub'>Get Naked</h1>
                    <h5 className='click'>Click to see</h5>
                </div>
              </a>
            </div>
            
            <div className='cnt'>
              <a href='/profile'>
                <img src={require('../../Images-Videos/images/motogp/rc16.jpg')} className='img-click'></img>
                <div className='img-text'>
                  <h1 className='img-sub'>Racing</h1>
                  <h5 className='click'>Click to see</h5>
                </div>
              </a>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Home;

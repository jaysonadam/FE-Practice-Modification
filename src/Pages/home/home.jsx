import React from 'react';
import { useInView } from 'react-intersection-observer';

import './home.css';
import { Button } from 'react-bootstrap';

function Home() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <div className='d-flex justify-content-center w-100 overflow-hidden mb-4'>

      <div className='d-flex flex-column'>
          <div className='cont'>
            <img src={require('../../Images-Videos/images/rc/rc.jpg')} className='bg-home' />
            <div className='w'>
              <h1 className='welcome'>Welcome to KTM</h1>
              <h3 className='sub'>Ready to Race</h3>
              <Button className='button-home' href="/products">
                Our Bikes
              </Button>
              <Button className='button-home' href="/profile">
                Racing Profile
              </Button>
            </div>
          </div>

          <div className='cont'>
            <img src={require('../../Images-Videos/images/rc/rc390.jpg')} className={`${ isVisible ? 'bg-390 bg-animated' : 'bg-390' }`} ref={myRef}/>
            <div className='text-390'>
              <h1>Feel the power</h1>
              <h3 className='sub'>Experience the torque</h3>
              <h3 className='sub'>#getDUKED #weRC</h3>
            </div>
          </div>

          <div className='d-flex justify-content-evenly flex-wrap'>
            <div className='cnt top'>
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

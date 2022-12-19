import React from 'react';

import './home.css';
import KTMINTRO from '../../Images-Videos/videos/KTMINTRO.mp4';

function Home() {
  return (
    <div className='con'>
      <video width='100%' height='70%' src={KTMINTRO} autoPlay loop className='video-ktm' />
      <div className='w'>
        <h1>Welcome to KTM</h1>
        <h3 className='sub'>Ready to Race</h3>
      </div>
    </div>
  )
}

export default Home;

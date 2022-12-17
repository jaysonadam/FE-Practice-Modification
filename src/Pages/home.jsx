import React from 'react';
import KTMINTRO from '../Images-Videos/videos/KTMINTRO.mp4';

function Home() {
  return (
    <div>
      <video width='100%' height='70%' src={KTMINTRO} autoPlay loop />
    </div>
  )
}

export default Home;

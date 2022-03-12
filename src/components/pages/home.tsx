import React from 'react';
import profile from '../../assets/images/HolmesProfileSmall.jpeg';

export default function Home() {

  const profile = require('../../assets/images/HolmesProfileSmall.jpeg');

  return (
    <div className="Home" style={{display:'flex', flexDirection:'row', overflow:'nowrap'}}>
      <div style={{display:'flex', padding:'10px'}}>
        I am Ben Holmes a software developer in the Greater Seattle area specializing in the future resource intensive applications. 
        I am currently working at Doosan GridTech as the primary front-end developer of Site Manager 2.0. 
        I am interested in the migration of highly reliable applications movement towards API/Web front-end architecture and how quantum computers could change the future of software development and aid us in our fight against climate change.
      </div>
      <div style={{display:'flex'}}>
        <img src={profile} />
      </div>
    </div>
  );
}

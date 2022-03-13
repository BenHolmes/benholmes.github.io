import React from 'react';
import { Link } from 'react-router-dom';
//import profile from '../../assets/images/HolmesProfileSmall.jpeg';
import styles from './home.module.scss';

export default function Home() {

  const profileSm = require('../../assets/images/HolmesProfileSm.jpeg');
  const profileLg = require('../../assets/images/HolmesProfileLg.jpeg');

  return (
    <div className={styles.HomeContent}>
      <div className={styles.TopBarLeft} >
        <div className={styles.TopBarLeftContent}>
          <div>
          I am <text style={{fontWeight: "bold"}}>Ben Holmes</text> a software developer in the Greater Seattle area specializing in the future resource intensive applications. 
          I am currently working at Doosan GridTech as the primary front-end developer of Site Manager 2.0. 
          I am interested in the migration of highly reliable applications movement towards API/Web front-end architecture and how quantum computers could change the future of software development and aid us in our fight against climate change.
          </div>
          {/* <button onClick={'https://github.com/BenHolmes/benholmes.github.io/raw/main/src/assets/images/Holmes_Resume_v4.5.pdf'}>Download Resume</button> */}
        </div>
      </div>

      <div className={styles.HomeRightContent}>

        <img 
          //className={styles.detail}
          src={profileSm} 
          srcSet={`${profileSm} 400w,
            ${profileSm} 600w,
            ${profileLg} 800w,
            ${profileLg} 1200w`}
          sizes ="(min-width:1336px) 75vw, 50vw"
          //or max
          alt="Ben Holmes" 
        />
      </div>
    </div>
  );
}

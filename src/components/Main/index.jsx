import React from 'react';
import styles from './index.module.css';
import mainImg from '../../image/main-image.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Description */}
      <div className={styles.description}>
        <h1>Full-Stack developer</h1>
        <p>
          React developer with experience building websites and web applications using
          ReactJS and modern JavaScript tools/frameworks. Front End Developer with 2+
          years of JavaScript, HTML/CSS experience. I do projects on React, I build
          websites confidently. I improve hard & soft skills by learning new technologies.
        </p>
        <Link to="/about">Написать</Link>
      </div>

      {/* Photo with rotating border */}
      <div className={`${styles.photo}`}>
        <img src={mainImg} alt="Description of the" />
      </div>
    </div>
  );
};

export default Main;

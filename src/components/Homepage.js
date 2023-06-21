import React from 'react';
import styles from '../styles/Homepage.module.css';
import cat from '../images/catcomp.gif'
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Homepage() {

  return (
    <div className={styles.bigContainer}>
      <div className={styles.pinkContainer}>
        <div className={styles.cyberpunk}>
        <div className={styles.left}>
          <div className={styles.purpleCircle}>
            <img src={cat} alt='meow!'/>
                <div className={styles.overText}>He</div>
                <div className={styles.overText2}>W</div>
              <div className={styles.nextText}>llo</div>
              <div className={styles.nextText2}>orld!</div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className= {styles.introText}>
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter.pauseFor(1000)
                  .typeString("welcome to my website!")
                  .pauseFor(1000)
                  .typeString(' my name is <span style="color: #FC9BFF">nhu</span>.')
                  .pauseFor(1000)
                  .typeString(' where would you like to go?')
                  .start();
                }}
                options={{
                  delay: 50,
                  html: true,
                }}
              />
            </div>
          </div>
          <div className={styles.selectBar}>
            <NavLink to='/projects' className={styles.selection}>Projects</NavLink>
            <NavLink to='/experience' className={styles.selection}>Experience</NavLink>
            <NavLink to='/contacts' className={styles.selection}>Contacts</NavLink>
          </div>
        </div>
      </div>
    </div>
    
  )
}

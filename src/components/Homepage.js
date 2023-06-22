import React from 'react';
import styles from '../styles/Homepage.module.css';
import cat from '../images/catcomp.gif'
import Typewriter from 'typewriter-effect';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import arrow from '../images/arrow.png';

export default function Homepage() {

const [isHoveredP, setIsHoveredP] = useState(false);
const [isHoveredE, setIsHoveredE] = useState(false);
const [isHoveredC, setIsHoveredC] = useState(false);



function forP() {
  setIsHoveredP(true)
}

function forE() {
  setIsHoveredE(true)
}

function forC() {
  setIsHoveredC(true)
}

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
            <div className={styles.pContainer}>
            <NavLink to='/projects' className={styles.selection}
            onMouseEnter={() => forP()}
            onMouseLeave={() => setIsHoveredP(false)} 
            >Projects</NavLink>
            {isHoveredP && (
              <img src={arrow} className={styles.pArrow}/>
            )}
            </div>
            <div className={styles.eContainer}>
            <NavLink to='/experience' className={styles.selection}
            onMouseEnter={() => forE(true)}
            onMouseLeave={() => setIsHoveredE(false)}
            >Experience</NavLink>
            {isHoveredE && (
              <img src={arrow} className={styles.eArrow}/>
            )}
            </div>
            <div className={styles.eContainer}>
            <NavLink to='/contacts' className={styles.selection}
            onMouseEnter={() => forC(true)}
            onMouseLeave={() => setIsHoveredC(false)}
            >Contacts</NavLink>
            {isHoveredC && (
              <img src={arrow} className={styles.cArrow}/>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

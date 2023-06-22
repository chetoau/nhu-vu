import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../images/logo.png';

export default function Header() {

  const activeLink = ({ isActive }) => isActive ? `${styles.activeLink}` : '';




  return (
    <header className={styles.header} id="header">
      <div className={styles.left}>
      <div className={styles.title}><NavLink to="/">nhu's portfolio</NavLink></div>
      <NavLink to="/" className={styles.logo}><img src={logo} alt="logo"/></NavLink>
      </div>
      <div className={styles.right}>
        <div className={active ? `${styles.activeLinks}` : `${styles.links}`}>
          <NavLink to="/projects" className={activeLink}>Projects</NavLink>
          <NavLink to="/experience" className={activeLink}>Experience</NavLink>
          <NavLink to="contacts" className={activeLink}>Contact Me</NavLink>
        </div>
      </div>
      
    </header>
  )
}

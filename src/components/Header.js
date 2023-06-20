import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={styles.navBar}>
      <div className={styles.left}>
        <div className={styles.siteTitle}>
          nhu's portfolio
        </div>
        <div className={styles.logo}>
          logo
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.textButton}>
          Home
        </button>
        <button className={styles.textButton}>
          Experience
        </button>
        <button className={styles.textButton}>
          Projects
        </button>
        <button className={styles.textButton}>
          Contact Me
        </button>
      </div>
    </div>
  )
}

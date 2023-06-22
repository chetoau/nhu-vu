import React from 'react'
import loadingGif from '../images/loading.gif'
import styles from '../styles/Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.container}>
        <img src={loadingGif} alt="loading"/>
    </div>
  )
}

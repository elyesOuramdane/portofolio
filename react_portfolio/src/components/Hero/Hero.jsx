import React from 'react'
import { getImageUrl } from '../../utils'
import styles from '../Hero/Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Elyes Ouramdane</h1>
            <p className={styles.description}>I'm a Developer and  love what I do</p>
            <a href='mailto:elyes.ouramdane@gmail.com' className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero Image' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

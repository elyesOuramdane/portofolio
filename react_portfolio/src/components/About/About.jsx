import React from 'react'
import styles from "../About/About.module.css"
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt='me setting with a laptop'/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor'/>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I have experience building websites and web applications using JavaScript, React, and Node.js.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='server'/>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Deveoper</h3>
                        <p>I have experielnce building web applications using python</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='ui'/>
                    <div className={styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>I have experience building websites and web applications using figma.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

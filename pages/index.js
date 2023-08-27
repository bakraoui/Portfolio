import React from 'react'
import styles from '../styles/home.module.css'
import profile from "../public/picture/ayoub-bakraoui.jpg";
import Image from 'next/image'
function index() {

  return (
     
    <div className={styles.home + ' container'}>
      <div className={styles.content}>
        <div className={styles.intro}>
            <p>I&apos;m <span><span>B</span>akraoui Ayoub</span></p>
            <div className={styles.animation_text}>
              <p className={styles.static_text}>I am </p> 
              <ul>
                <li><span>Software Engineer</span></li>
                <li><span>Developer</span></li>
              </ul>
              
            </div>
            <p>
                I&apos;m a from Morocco, I am {new Date().getUTCFullYear() - 2000} years old,
                I am a junior software engineer freshly graduted From the National School of Applied Science Agadir.
            </p>
            <div className={styles.btn}>
                <a
                  href="/CV_AYOUB_BAKRAOUI.pdf"
                  alt="Download CV"
                  target="_blank"
                  rel="noopener noreferrer"
                > Download CV </a>
            </div>

           
        </div>

        <div className={styles.image_container}>
              <Image src={profile} alt="Personal Image" className={styles.image} />
        </div>
        
      </div>
    </div>
      
   
  )
}

export default index


import React from 'react'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import img from '../public/img.jpg'
function index() {

  return (
     
    <div className={styles.home + ' container'}>
      <div className={styles.content}>
        <div className={styles.intro}>
            <p>I`&apos;m <span><span>B</span>akraoui Ayoub</span></p>
            <div className={styles.animation_text}>
              <p className={styles.static_text}>I am </p> 
              <ul>
                <li><span>Software Engineer</span></li>
                <li><span>Developer</span></li>
              </ul>
              
            </div>
            <p>
                I'm a software engineer from Morocco, I am 22 years old,
                currently, I am a student in the Natioanl School of Applied Sciences Agadir (ENSAA) 
                where I am studying about software engineering.
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
              <Image src={img} alt="Personal Image" className={styles.image} />
        </div>
        
      </div>
    </div>
      
   
  )
}

export default index


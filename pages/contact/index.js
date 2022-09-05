import styles from '../../styles/contact.module.css'
import Link from 'next/link';
import Image from'next/image' ;
import contact from '../../public/contact-us.png' 


export default function index() {
  return (
    <section className={styles.contact + ' container'} id='contact'>
        <h1> <span>Co</span>ntact Me<span className={styles.underline}></span></h1>
        <div className={styles.row}>

            <div className={styles.col}>
                <Image src={contact} width='500' height='600' />
              
            </div>

            <div className={styles.col + ' ' + styles.media_contacts}>
               
               <div className=' '>
                <Link href='tel:0651584863' target='_blank'>
                    <a className={ ' w-100 '}>
                        <span><i className="fas fa-phone"></i></span>
                        <span>+212 651 58 48 63</span>
                    </a>
                </Link>
                <Link href='mailto:ayyoub.bakraoui@gmail.com' target='_blank' rel="noreferrer">
                    <a className={' '}>
                        <span><i className="fab fa-google"></i></span>
                        <span>ayyoub.bakraoui@gmail.com</span>
                    </a>
                </Link>
               </div>

                
                <div>
                    <a href='https://linkedin.com/in/ayoub-bakraoui'  rel="noreferrer" target='_blank' className={styles.card}>
                        <span><i className="fab fa-linkedin-in"></i></span>
                    </a>

                    <a href='https://github.com/bakraoui' target='_blank' rel="noreferrer" className={styles.card}>
                        <span><i className="fab fa-github"></i></span>
                    </a>

                    <a href='https://www.hackerrank.com/ayoubbakraoui' target='_blank' rel="noreferrer" className={styles.card}>
                        <span><i className="fab fa-hackerrank"></i></span>
                    </a>
                </div>

            </div>
            
        </div>
    </section>
  )
}

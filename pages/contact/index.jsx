import styles from '../../styles/contact.module.css'
import Link from 'next/link';
import Image from'next/image' ;
import contact from '../../public/contact-us.png' 
import Title from '../../components/Title';


export default function index() {
  return (
    <section className={styles.contact + ' container'} id='contact'>

        <Title title='Contact me' />
        <div className={styles.contact_container}>

            <div className={styles.background}>
                <Image src={contact} width='500' alt='' height='600' />
            </div>

            <div className={styles.media_contacts}>
               
               <div className={styles.email_phone}>
                    <div>
                        <Link href='tel:0651584863' target='_blank'>
                            <a className={ ' w-100 '}>
                                <span><i className="fas fa-phone"></i></span>
                                <span>+212 651 58 48 63</span>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='mailto:ayyoub.bakraoui@gmail.com' target='_blank' rel="noreferrer">
                            <a className={' '}>
                                <span><i className="fab fa-google"></i></span>
                                <span>ayyoub.bakraoui@gmail.com</span>
                            </a>
                        </Link>
                    </div>
               </div>

                
                <div className={styles.social_media}>
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

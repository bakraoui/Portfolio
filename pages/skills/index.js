import styles from "../../styles/skills.module.css";
import Image from "next/image";

export default function index() {
  return (
    <section className={styles.skills + ' container'} id='skills'>
        <h1> <span>My</span> Skills<span className={styles.underline}></span></h1>
        
        <div className={styles.skills_container} >
            <div className={styles.card}>
                <h4>Technologies</h4>
                <p>
                    Bootstrap,  
                    MERN, JEE, Spring Boot, 
                    PHP. 
                </p>
            </div>

            <div className={styles.card}>
                <h4>Modeling</h4>
                <p>
                    Merise, UML
                </p>
            </div>
            
            <div className={styles.card}>
                <h4>Databases</h4>
                <p>
                    MySQL, Oracle
                    MongoDB
                </p>
            </div>


            <div className={styles.card}>
                <h4>Tools</h4>
                <p>
                    NPM, Git, Github<br />
                </p>
            </div>
        </div>

    </section>
  )
}

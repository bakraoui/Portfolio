import styles from '../../styles/projects.module.css'
// import Image from 'next/image';
import Title from '../../components/Title';


export default function index() {
  return (
    <section className={styles.projects + ' container'} id='projects'>


        <Title title='Projects' />
        
        <div className={styles.card_container}>

            <div className={styles.card}>
                <div className={styles.description}>
                    <div className={styles.title}>Ecommerce</div>
                    <div className={styles.location}>01-03 -- 01-05-2022 |ENSA AGADIR</div>
                    <div className={styles.text}>
                        <p>
                            Multi-user project for selling terroir Products
                        </p>
                        <p> <b>Modules :</b>  cooperatives management, products managament, payments, commands management...</p>
                        <p><b>Technologies&tools:</b> Spring boot, Spring JPA, MySQL, Git, Postman </p>
                    </div>
                    
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.description}>
                    <div className={styles.title}>Building Constructor</div>
                    <div className={styles.location}>01-11-2021 -- 10-01-2022 | ENSA AGADIR</div>
                    <div className={styles.text}>
                        <p> project for managing companies with more employees. </p>
                        <p> <b>Modules :</b>  employees management, salaries, absences, projects management</p>
                        <p><b>Technologies :</b> JEE, HIBERNATE, MySQL, HQL, Bootstrap</p>
                    </div>
                    
                </div>
            </div>


            <div className={styles.card}>
                <div className={styles.description}>
                    <div className={styles.title}>Ecommerce</div>
                    <div className={styles.location}>01-6 -- 15-6-2020 | ENSA AGADIR</div>
                    <div className={styles.text}>
                        <p> project for buying and selling products.  </p><br />
                        <p> <b>Modules :</b>  products managament, payments, commands management...</p>
                        <p><b>Technologies :</b> HTML, CSS, Javascript, PHP, MySQL, SQL</p>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </section>
  )
}

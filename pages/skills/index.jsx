import styles from "../../styles/skills.module.css";
import Title from "../../components/Title";
import Skill from "../../components/skills/Skill";
import Badge from "../../components/skills/Badge";
import { Fragment } from "react";
import Certificate from "../../components/skills/Certificate";

export default function index() {
  return (
    <Fragment>
        <section className={styles.skills + ' container'}>

            <Title title='Skills' /> 

            <div className={styles.skills_container} >

                <Skill
                    icon='fa-solid fa-code'
                    title='Web Development'
                    content='Bootstrap - MERN - JEE - Spring Boot - PHP.'
                />

                <Skill
                    icon='fa-solid fa-route'
                    title='Modeling'
                    content='Merise - UML'
                />

                <Skill
                    icon='fa-solid fa-database'
                    title='Databases'
                    content='MySQL - Oracle - MongoDB'
                />

                <Skill
                    icon='fa-solid fa-toolbox'
                    title='Tools'
                    content='NPM - Git - Github'
                />

            </div>

        </section>

        <section className={styles.badges + ' container'}>
            
            <Title title='Badges' />
            <div className={styles.badges_container} >
            
                <Badge 
                    src='/java-badge.jpeg'
                    from="Hackerrank"
                    url='https://www.hackerrank.com/ayoubbakraoui'
                />

                <Badge 
                    src='/python-badge.jpeg'
                    from="Hackerrank"
                    url='https://www.hackerrank.com/ayoubbakraoui'
                />
                

            
            </div>

        </section>

        <section className={styles.certificates + ' container'}>


            <Title title='Certificates' />  

            <div className={styles.certificates_container} >

                <Certificate src='/java-basics.png' />

                <Certificate src='/jee-certificate.jpeg' />

                <Certificate src='/springboot-certificate.jpeg' />
                

            </div>

        </section> 
    </Fragment>
  )
}

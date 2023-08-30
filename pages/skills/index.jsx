import styles from "../../styles/skills.module.css";
import Title from "../../components/Title";
import Skill from "../../components/skills/Skill";
import { Fragment } from "react";
import Certificate from "../../components/skills/Certificate";
import certificates from "../../json-data/certificates.json";

export default function index() {
  return (
    <Fragment>
        <section className={styles.skills + ' container'}>

            <Title title='Skills' /> 

            <div className={styles.skills_container} >

                <Skill
                    icon='fa-solid fa-code'
                    title='Programming'
                    content='Java - Javascript - Typescript - C - CPP - Python '
                />

                <Skill
                    icon='fa-solid fa-server'
                    title='Back-End Development'
                    content='JEE - Spring(Boot - security - data) - .NET - Nodejs - PHP.'
                />

                <Skill
                    icon='fa-brands fa-firefox'
                    title='Front-End Development'
                    content='React - Angular - Bootstrap5 - HTML5 '
                />

                <Skill
                    icon='fa-solid fa-timeline'
                    title='DevOps'
                    content='Docker - Kubernetes - Jenkins'
                />
                
                <Skill
                    icon='fa-solid fa-cloud'
                    title='Cloud'
                    content='OCI - AWS - GCP'
                />

                <Skill
                    icon='fa-solid fa-route'
                    title='Modeling'
                    content='Merise - UML'
                />

                <Skill
                    icon='fa-solid fa-database'
                    title='Databases'
                    content='MySQL - Oracle - SQL server - MongoDB'
                />

                <Skill
                    icon='fa-solid fa-toolbox'
                    title='Build Tools'
                    content='Linux CLI - NPM - Yarn - Gradle - Maven'
                />

                <Skill
                    icon='fa-solid fa-toolbox'
                    title='Management Tools'
                    content='Git - Github - Bitbucket - Jira - Confluence'
                />

            </div>

        </section>


        <section className={styles.certificates + ' container'}>


            <Title title='Certificates' />  

            <div className={styles.certificates_container} >
                {
                    certificates.map(certificate => {
                        return <Certificate key={certificate.id} title={certificate.title} src={certificate.path} />
                    })
                }
                
                
            </div>

        </section> 
    </Fragment>
  )
}

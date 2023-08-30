import styles from "../../styles/about.module.css";
import Link from "next/link";
import Title from "../../components/Title";

export default function about() {
  return (
    <section className={`${styles.about} container`} id='about'>
        

        <Title title='About Me' />
        <div className={styles.about_content}>


          <div className={styles.text}>
              <h4> Hello!</h4>
              <h3>I&apos;m Bakraoui Ayoub,</h3>
              <p>
                I am 23 years old. Motivated and self-driven software engineer with passion for building high-quality software, and excited to contribute collaboratively to impactful real-world projects.
              </p>
              <div className={styles.media_links}>
               
                <Link  href="https://linkedin.com/in/ayoub-bakraoui" className={styles.link} rel="noreferrer" target='_blank'>
                    <span><i className="fab fa-linkedin-in"></i></span>
                </Link>

                <Link  href="https://github.com/bakraoui" className={styles.link} rel="noreferrer" target="_blank">
                    <span><i className="fab fa-github"></i></span>
                </Link>

                <Link  href="https://www.hackerrank.com/ayoubbakraoui" className={styles.link} rel="noreferrer"  target='_blank'>
                    <span><i className="fab fa-hackerrank"></i></span>
                </Link>

                
                    
              </div>
          </div>

          <div className={styles.details}>
            <ul>
              <li>Title :    <span>Software Engineer</span>  </li>
              <li>Email:  <span>ayyoub.bakraoui@gmail.com</span> </li>
              <li>Phone :  <span> +212 651-584863</span> </li>
            </ul>
            <ul>
              <li>Age :  <span>{new Date().getFullYear() - 2000} years old</span></li>
              <li>Country : <span>Morocco</span></li>
              <li>Option : </li>
            </ul>
          </div>

          <div className={styles.studies_experiences}>
            <div className={styles.card}>
              <h2>Experiences</h2>

              <div className={styles.card_body}>

              <div className={styles.card_child}>
                  <h4>Research Assistant</h4>
                  <div className={styles.description}>
                    <p>Oracle | internship | March - August 2023 </p>
                    <p>developing VSCode extensions for Graal Cloud Native Tools and Assuring High product quality via different testing Tools.</p>
                    <p><b>Technologies: </b> Typescript, Mocha framework, VSCode API, Docker, Kubernetes, OCI, GCP (Cloud run, GKE) </p>
                    <p>Developing a tool for extracting licenses, copyrights and dependencies for a given NPM package and all its dependencies in recursive way.</p>
                    <p><b>Technologies: </b> HTML, CSS, JS, Java, Micronaut, JSoup, Rest API.</p>
                  </div>
                </div>


                <div className={styles.card_child}>
                  <h4>Software Developer</h4>
                  <div className={styles.description}>
                    <p>NAVA BUSINESS | internship | March - Mai 2022 </p>
                    <p>The conception and implementation of the LuneParc application for managing a vehicle fleet.</p>
                    <div>
                        <p>The modules covered:</p>      
                        <ul>
                            <li>
                              <b>Legal : </b> 
                              concerns the management of vehicle documents; contracts, technical visits, insurance, claims...
                            </li>
                            <li>
                                <b>Intervention : </b> 
                                is divided into two types; Periodicals: the management of oil change and tyre operations.
                                Technical problems it follows a process that begins with the declaration of the breakdown, 
                                a request for intervention, a maintenance and finally the internal or external maintenance.
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>

                <div className={styles.card_child}>
                  <h4>Software Developer</h4>
                  <div className={styles.description}>
                    <p>SMART SOLUCE | Internship | July - August 2021 </p>
                    <p>School Management System project. implementation of a web application for managing private schools.</p>
                    <p>4 roles: super admin, normal admin, teacher, student.</p>
                    
                    <div>
                        <p>The modules covered :</p>
                        <ul>
                            <li>Personnel management (administrators, professors, students)</li>
                            <li>marks management (semester grade, final grade)</li>
                            <li>Daily absence management</li>
                            <li>Schedules management and Assignments of rooms, courses, groups, subjects...</li>
                        </ul>
                    </div>
                    <p> <b>technologies</b>  : HTML, CSS, Bootstrap, PHP, MySQL and SQL.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <h2>Studies</h2>
              <div className={styles.card_body}>
                <div className={styles.card_child}>
                  <h4>Engineering cycle</h4>
                  <div className={styles.description}>
                    <p>2020 - present | ENSA AGADIR</p>
                    <p>This period is very important in my career, I continue my studies as software engineer.</p>
                    <p>I have learnt web development (frontend - backend), Networking, Operating System (Linux)...and more.</p>
                  </div>
                </div>

                <div className={styles.card_child}>
                  <h4>Preparatory classes</h4>
                  <div className={styles.description}>
                    <p>2018 - 2020 | ENSA AGADIR</p>
                    <p>this period helpt me discovering programming and algorithms, at 2018 I write my very first programme using algorithms and C language.</p>
                  </div>
                </div>

                <div className={styles.card_child}>
                  <h4>Baccalaureat</h4>
                  <div className={styles.description}>
                    <p>2017 - 2018 | BIRANZARAN FKIH BEN SALAH</p>
                    <p>I graduated from Biranzaran at 2018, I get my Baccalaureat certificate in physical science branch with a respectful mark.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
    </section>
  )
}

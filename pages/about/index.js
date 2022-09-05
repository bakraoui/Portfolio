import styles from "../../styles/about.module.css";
import Link from "next/link";
import {links} from '../../json-data/about.json'

export default function about() {
  return (
    <section className={`${styles.about} container`} id='about'>
        <h1> 
          <span>Ab</span>out Me<span className={styles.underline}></span>
        </h1>
        <div className={styles.about_content}>


          <div className={styles.text}>
              <h4> Hello!</h4>
              <h3>I`&apos;m Bakraoui Ayoub,</h3>
              <p>
                 I am a software engineer. I am from Morocco, I am 22 years old.
                currently, I am a student in the Natioanl School of Applied Sciences Agadir (ENSAA) 
                where I am studying about software engineering.
              </p>
              <div className={styles.media_links}>
               

                {
                  links.map(link => {
                    return(
                      <Link key={link.id} href={link.href} rel="noreferrer">
                          <a className={styles.link} target='_blank'>
                            <span><i className={link.icon}></i></span>
                          </a>
                      </Link>
                    )
                  })
                }
                    
              </div>
          </div>

          <div className={styles.details}>
            <ul>
              <li> Birthday : <span>21-02-2000</span> </li>
              <li>Website :  <span> <a href="http://bakraoui.vercel.app" target='_blank'>bakraoui.vercel.app</a> </span> </li>
              <li>Option :   <span>Software Developer</span>  </li>
            </ul>
            <ul>
              <li>Age :  <span>22 yo</span></li>
              <li>Country : <span>Morocco</span></li>
              <li>Option : </li>
            </ul>
          </div>

          <div className={styles.studies_experiences}>
            <div className={styles.card}>
              <h2>Experiences</h2>
              <div className={styles.card_body}>
                <div className={styles.card_child}>
                  <h4>Software Developer</h4>
                  <div className={styles.description}>
                    <p>NAVA BUSINESS | internship | March - Mai 2022 </p>
                    <p>The conception and implementation of the LuneParc application for managing a vehicle fleet.</p>
                    <div>
                        <p>The modules covered:</p>      
                        <ul>
                            <li>
                              <b>Legal :</b> 
                              concerns the management of vehicle documents; contracts, technical visits, insurance, claims...
                            </li>
                            <li>
                                <b>Intervention :</b> 
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
                    <p>School Management System project.implementation of a web application for managing private schools.</p>
                    <p>4 roles: super admin, normal admin, teacher, student.</p>
                    
                    <div>
                        <p>The modules covered:</p>
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

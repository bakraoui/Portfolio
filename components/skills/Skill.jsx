
import styles from '../../styles/skills/skill.module.css'


function Skill({icon, title, content}) {
  return (
    <div className={styles.card}>
        <h1><i className={icon}></i></h1>
                
        <h4>{title}</h4>
        <p> {content} </p>

    </div>
  )
}

export default Skill
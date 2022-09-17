
import styles from '../styles/title.module.css';
function Title(props) {
  return (
    <h1 className={styles.title}> 
        {props.title}
        <span className={styles.underline}></span>
    </h1>

  )
}

export default Title
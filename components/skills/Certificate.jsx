import styles from '../../styles/skills/certificate.module.css'

function Certificate({title, src}) {
  return (
    <div className={styles.card}>
        <p className="title">{title}</p>
        <a href={src} target="_blank">preview</a>  
    </div>
  )
}

export default Certificate
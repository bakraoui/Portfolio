import styles from '../../styles/skills/certificate.module.css'
import Image from 'next/image'

function Certificate({src}) {
  return (
    <div className={styles.card}>
        <Image src={src} width='300' height='200' alt='' />
    </div>
  )
}

export default Certificate
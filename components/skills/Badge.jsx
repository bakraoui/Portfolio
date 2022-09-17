
import styles from '../../styles/skills/badge.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Badge({src, url, from}) {
  return (
        <div className={styles.card}>
            <Image src={src} width='150' height='150' alt='' />
            <div className={styles.description}>
                <Link href={url}>
                    <a target='_blank'> {from}</a>
                </Link>
            </div>
        </div>
  )
}

export default Badge
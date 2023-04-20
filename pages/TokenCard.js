
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Monkey from '../public/monkey.jpeg'

export default function TokenCard(){
    return (
        <div className={styles.tokenCard}>
            <div className={styles.tokenUp}>
            <Image className={styles.tokenImage} src={Monkey} width={50} height={50} />

            <div className={styles.tokenText}>
                <p>Best Flip</p>
                <p>Minty</p>
            </div>
            </div>

            <div className={styles.tokenValues} >
            <div className={styles.tokenLine}>
                <p>dingling.eth</p>
                <p>1.882</p>
            </div>
            <div className={styles.tokenLine}>
                <p>2 months ago</p>
                <p>+250XP</p>
            </div>
            </div>
        </div>
    )
}
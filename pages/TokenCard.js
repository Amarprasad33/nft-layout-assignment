
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Monkey from '../public/monkey.jpeg'
import Eth from '../public/icons/ethereum.png';

export default function TokenCard(){
    const random_colors = [
        styles.tokenCard1,
        styles.tokenCard2,
        styles.tokenCard3
    ]
    const ran = Math.floor(Math.random()*3);
    return (
        <div className={random_colors[ran]}>
            <div className={styles.tokenUp}>
            <Image className={styles.tokenImage} src={Monkey} width={50} height={50} />

            <div className={styles.tokenText}>
                <p className={styles.lightText2}>Best Flip</p>
                <p className={styles.lightColorText}>Minty</p>
            </div>
            </div>

            <div className={styles.tokenValues} >
            <div className={styles.tokenLine}>
                <p className={styles.weakText}>dingling.eth</p>
                <div className={styles.nftLineM}>
                    <p className={styles.lightText}>1.82</p>
                    <Image className={styles.ethSymbol} src={Eth} width={13} height={13}/>
                </div>
            </div>
            <div className={styles.tokenLine}>
                <p className={styles.timeText}>2 months ago</p>
                <p className={styles.gains}>+250XP</p>
            </div>
            </div>
        </div>
    )
}
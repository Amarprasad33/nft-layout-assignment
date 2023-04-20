
import styles from '@/styles/NFTCard.module.css'
import Image from 'next/image'
import NFT from '../public/NFT.jpg'


export default function NFTCard(){
    return (
        <div className={styles.nftLayout}>
            <div className={styles.tokenUp}>
            <Image className={styles.nftImage} src={NFT} width={190} height={200} />

            <div className={styles.nftText}>
                <p>Azuki #9839</p>
            </div>
            </div>

            <div className={styles.nftValues} >
                <div className={styles.nftLine}>
                    <p>Bought</p>
                    <p>02.82</p>
                </div>
                <div className={styles.nftLine}>
                    <p>Floor</p>
                    <div className={styles.nftLineM}>
                        <p className={styles.item}>12.74</p>
                        <p className={styles.item}>I</p>
                        <p className={styles.item}>+21.6%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
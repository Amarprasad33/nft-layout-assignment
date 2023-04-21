
import styles from '@/styles/NFTCard.module.css'
import Image from 'next/image'
// import NFT from '../public/NFT.jpg'
import Eth from '../public/icons/ethereum.png';

export default function NFTCard({ image }){
    return (
        <div className={styles.nftLayout}>
            <div className={styles.tokenUp}>
            <div className={styles.topContent}>
                <Image className={styles.nftImage} src={image} width={190} height={200} />
                <div className={styles.imageText}>3 Months</div>
            </div>

            <div className={styles.nftText}>
                <p className={styles.lightText2}>Azuki #9839</p>
            </div>
            </div>

            <div className={styles.nftValues} >
                <div className={styles.nftLine}>
                    <p className={styles.weakText}>Bought</p>
                    <div className={styles.nftLineM}>
                        <p>02.82</p>
                        <Image className={styles.ethSymbol} src={Eth} width={13} height={13}/>
                    </div>
                    
                </div>
                <div className={styles.nftLine}>
                    <p  className={styles.weakText}>Floor</p>
                    <div className={styles.nftLineM}>
                        <p className={styles.item}>12.74</p>
                        <Image className={`${styles.ethSymbol} ${styles.item}`} src={Eth} width={13} height={13}/>
                        <p className={`${styles.gains} ${styles.item}`}>+21.6%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
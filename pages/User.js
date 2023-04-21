
import styles from '@/styles/User.module.css'
import Image from 'next/image'
import Eth from '../public/ETH.jpg';
import Character from '../public/character.jpg';
import Monkey from '../public/monkey.jpeg';
import Traveller from '../public/traveller.jpg';
import Twitter from '../public/icons/twitter.png';
import Globe from '../public/icons/globe.png';



export default function User(){
    return (
        <div className={styles.userLayout}>
            <div className={styles.profile}>
                <div className={styles.userImage}>
                    <div className={styles.eclipseFill}>
                    </div>
                    <div className={styles.dp}>
                    </div>

                    <div className={styles.level}>
                        LVL 2
                    </div>
                </div>
                {/* The test beside of avatar image */}

                <div className={styles.profileText}>
                    <p className={styles.strongText}>dingaling.eth</p>
                    <p className={styles.weakText}>0xadgf....jkld</p>
                </div>
            </div>

            {/* Twitter Info */}
            <div className={styles.twitterInfo}>
                <div className={styles.frame}>
                    <Image src={Twitter} height={24} width={24}/>
                    <p>dingalingTwTs</p>
                </div>
                <Image className={styles.frameGlobe} src={Globe} height={32} width={32} />
            </div>

            {/* Bio */}
            <div className={styles.bio}>
                <p>An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦 @nftboxes </p>
            </div>

            {/* Communities */}
            <div className={styles.communities}>
                <h4 className={styles.comText}>Common communities(3)</h4>
                <div className={styles.comIcons}>
                    <Image src={Eth} className={styles.iconImage}/>
                    <Image src={Traveller} className={styles.iconImage}/>
                    <Image src={Monkey} className={styles.iconImage}/>
                    <Image src={Character} className={styles.iconImage}/>
                </div>
            </div>


            {/* Stats */}
            <div className={styles.stats}>
                <div className={styles.statsRow}>
                    <div className={`${styles.statItem} ${styles.selectItem}`}>Art 12%</div>
                    <div className={`${styles.statItem} ${styles.selectItem}`}>Utility 12%</div>
                    <div className={styles.statItem}>PFP 12%</div>
                </div>

                <div className={styles.statsRow}>
                    <div className={styles.statItem}>Metaverse 12%</div>
                    <div className={styles.statItem}>Gaming 12%</div>
                </div>

                <div className={styles.statsRow}>
                    <div className={styles.statItem}>PFP 12%</div>
                    <div className={styles.statItem}>ens 12%</div>
                </div>
            </div>

            {/* Subscribe Button */}
            <div className={styles.subscribe}>
                <h3>Subscribe {`>>`}</h3>
            </div>

        </div>
    )
}
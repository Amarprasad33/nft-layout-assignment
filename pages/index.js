import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TokenCard from './TokenCard'
import NFTCard from './NFTCard'
import User from './User'
import Nft from '../public/characters/NFT.jpg';
import Dragon from '../public/characters/dragon.jpg';
import Ninja from '../public/characters/ninja.jpg';
import Ramdan from '../public/characters/ramdan.jpg';
import Sprit from '../public/characters/sprit.jpg';


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.layout}>
        {/* User details on left side of page */}
        <div className={styles.sidebar}>
          <User />
        </div>

        <div className={styles.body}>
          <div className={styles.show}>
            {/* Upper body on right side I call it tokens --->  */}
            <div className={styles.token}>
              <p className={styles.heading}>Highlights</p>
              <TokenCard />
              <TokenCard />
              <TokenCard />
              <TokenCard />
              <TokenCard /> 
           
            </div>

             {/* Lower body on right side I call it NFTs --->  */}

            <div className={styles.users}>
                <NFTCard image={Nft}  />
                <NFTCard image={Dragon}/>
                <NFTCard image={Ninja}/>
                <NFTCard image={Ramdan}/>
                <NFTCard image={Sprit}/>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

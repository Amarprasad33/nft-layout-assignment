import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TokenCard from './TokenCard'
import NFTCard from './NFTCard'
import User from './User'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.layout}>
        <div className={styles.sidebar}>
          <User />
        </div>

        <div className={styles.body}>
          <div className={styles.show}>
            {/* Upper body on right side I call it tokens ---> It might not be :) */}
            <div className={styles.token}>
             
              <TokenCard />
              <TokenCard />
              <TokenCard />
              <TokenCard />
              <TokenCard /> 
           
            </div>

             {/* Lower body on right side I call it Users ---> It might not be :) */}

            <div className={styles.users}>
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

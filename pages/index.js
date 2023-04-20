import Head from 'next/head'
import styles from '@/styles/Home.module.css'


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
          1
        </div>

        <div className={styles.body}>
          <div className={styles.show}>
            {/* Upper body on right side I call it tokens ---> It might not be :) */}
            <div className={styles.token}>
              <div className={styles.tokenCard}>
                Basic Info about the token please align yourself to make it easy
              </div>

              <div className={styles.tokenCard}>
                Basic Info about the token please align yourself to make it easy
              </div>

              <div className={styles.tokenCard}>
                Basic Info about the token please align yourself to make it easy
              </div>

              <div className={styles.tokenCard}>
                Basic Info about the token please align yourself to make it easy
              </div>

              <div className={styles.tokenCard}>
                Basic Info about the token please align yourself to make it easy
              </div>
            </div>

             {/* Lower body on right side I call it Users ---> It might not be :) */}

            <div className={styles.users}>
                Users
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

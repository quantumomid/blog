import Head from 'next/head'
import Hero from '../components/home-page/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Omid's blog</title>
        <meta name="description" content="Some of Omid's thoughts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
    </div>
  )
}

import Head from 'next/head'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import Hero from '../components/home-page/Hero'
import { getFeaturedPosts } from '../helpers/postsUtils'
import styles from '../styles/Home.module.css'

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default function HomePage({posts}) {
  // console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Omid's blog</title>
        <meta name="description" content="Some of Omid's thoughts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  )
}

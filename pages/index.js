import Head from 'next/head'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import Hero from '../components/home-page/Hero'
import styles from '../styles/Home.module.css'

const DUMMY_POSTS = [
  {title: "Getting Started with Next.js", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js"},
  {title: "Getting Started with Next.js1", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js1"},
  {title: "Getting Started with Next.js2", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js2"},
  {title: "Getting Started with Next.js3", image: "getting-started-with-next-js.png", excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", date: "2021-10-16", slug: "getting-started-with-next-js3"},

]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Omid's blog</title>
        <meta name="description" content="Some of Omid's thoughts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  )
}

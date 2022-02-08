import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "../helpers/postsUtils";
import styles from "../styles/Home.module.css";

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
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  )
}

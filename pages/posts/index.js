import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/postsUtils";

export const getStaticProps = () => {
    const allPosts = getAllPosts()
    return {
      props: {
        posts: allPosts
      }
    }
  }

const AllPostsPage = ({posts}) => {
    return (
        <AllPosts posts={posts} />
    )
}

export default AllPostsPage;
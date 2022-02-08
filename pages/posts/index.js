import { Fragment } from "react";
import CustomHead from "../../components/meta/CustomHead";
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
      <Fragment>
        <CustomHead title="Omid's blog | All Posts" />
        <AllPosts posts={posts} />
      </Fragment>
    )
}

export default AllPostsPage;
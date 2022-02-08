import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../helpers/postsUtils";

export const getStaticPaths = () => {
    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map(filename => filename.replace(/\.md$/, ""));
    const paths = slugs.map(slug => ({ params: { slug: slug } }))
    return {
        paths: paths,
        fallback: false
    }
    // If you DONT want to pregenerate any posts pages i.e. if you have thousands of articles etc.
    // then do something like below 
    // return {
    //     paths: [],
    //     fallback: true // or "blocking"
    // }
}

export const getStaticProps = (context) => {
    const { params: { slug } } = context;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData
        }, 
        revalidate: 600
    }
}

const PostDetailPage = ({ post }) => {
    // console.log(post);
    return (
        <PostContent post={post} />
    )
}

export default PostDetailPage;
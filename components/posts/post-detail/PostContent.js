import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";

// const DUMMY_POST = {
//     title: "Getting Started with Next.js",
//     image: "getting-started-with-next-js.png", 
//     excerpt: "Next.js is a React framework for production, which makes building full stack applications easy!", 
//     date: "2021-10-16", 
//     slug: "getting-started-with-next-js",
//     content: "# This is a post"
// }


const PostContent = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;
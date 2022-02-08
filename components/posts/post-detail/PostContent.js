import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Fragment } from "react";

const PostContent = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        // img(image){
        //     return (
        //         <Image
        //             src={`/images/posts/${post.slug}/${image.src}`}
        //             alt={image.alt}
        //             width={600}
        //             height={300} 
        //         />
        //     )
        // },
        p(paragraph) {
            const { node } = paragraph;
            console.log(node.children[0])
            if(node.children[0].tagName === "img"){
                const image = node.children[0];
                return (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.properties.alt}
                            width={600}
                            height={300} 
                        />
                    </div>
                )
            }
            return <p>{paragraph.children}</p>
        },

        code(code){
            // console.log(code)
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return <SyntaxHighlighter style={atomDark} language={language} children={children} />
        }
    }

    return (
        <Fragment>
            <PostHeader title={post.title} image={imagePath} />
            <article className={styles.content}>
                <ReactMarkdown components={customRenderers} >{post.content}</ReactMarkdown>
            </article>
        </Fragment>
    )
}

export default PostContent;
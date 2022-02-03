import Image from "next/image";
import Link from "next/link";
import styles from "./PostItem.module.css";

const PostItem = ({ post: { title, image, excerpt, date, slug } }) => {

    const formattedDate = new Date(date).toLocaleDateString("en-UK", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`
    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image 
                            src={imagePath} 
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem;
import Image from "next/image";
import styles from "./PostHeader.module.css";

const PostHeader = ({ title, image }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Image 
                src={image} 
                alt={title} 
                width={200}
                height={150}
                objectFit="cover"
            />
        </header>
    )
}

export default PostHeader;
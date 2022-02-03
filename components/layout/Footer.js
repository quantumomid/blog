import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://github.com/quantumomid"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.image}>
                    <Image src="/images/github-logo.png" alt="GitHub Logo" width={40} height={40} layout="responsive" />
                </div>
            </a>
            <a
                href="https://uk.linkedin.com/in/omid-wakili-34781b12a"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.image}>
                    <Image src="/images/linkedin.png" alt="LinkedIn Logo" width={40} height={40} layout="responsive" />
                </div>
            </a>
            <a
                href="mailto:omid.wakili@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.image}>
                    <Image src="/images/email.png" alt="Front view of a close post representing an electronic mail or email" width={40} height={40} layout="responsive" />
                </div>
            </a>
        </footer>
    )
}

export default Footer;
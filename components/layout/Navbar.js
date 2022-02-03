import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}><Link href="/">👨‍💻</Link></div>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;
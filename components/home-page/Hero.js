import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image 
                    src="/images/omid.jpg"
                    alt="Headshot of Omid with a colour effect"
                    width={200}
                    height={200}
                    objectPosition="center"
                />
            </div>
            <article>
                <h1>Hi, I am <span className={styles.gradient}>Omid</span></h1>
                <p>I am a web developer 👨‍💻 and love working with <span className={styles.gradient}>React</span> and <span className={styles.gradient}>Angular</span>!</p>
            </article>
        </section>
    )
}

export default Hero;
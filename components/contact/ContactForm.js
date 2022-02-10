import styles from "./Contact.module.css";


const ContactForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="name">Your name</label>
                    <input name="name" id="name" type="text" required/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="email">Your email</label>
                    <input name="email" id="email" type="email" required/>
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your message</label>
                    <textarea name="message" id="message" rows="5" required/>
                </div>
                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;
import { useState } from "react";
import styles from "./Contact.module.css";


const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const contactData = {name, email, message}
        const postResponse = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(contactData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const postResponseData = await postResponse.json();
        // console.log(postResponseData);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="name">Your name</label>
                    <input 
                        name="name" id="name" type="text" required
                        value={name} 
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="email">Your email</label>
                    <input name="email" id="email" type="email" required
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your message</label>
                    <textarea 
                        name="message" id="message" rows="5" required
                        value={message} 
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </div>
                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;
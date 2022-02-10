import { Fragment, useEffect, useState } from "react";
import Notification from "../ui/Notification";
import styles from "./Contact.module.css";

const sendContactData = async(contactData) => {
    const postResponse = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const postResponseData = await postResponse.json();
    // console.log(postResponseData);

    if (!postResponse.ok) {
        throw new Error(postResponseData.message || 'Something went wrong!');
    }

    return postResponseData;
}

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submissionStatus, setSubmissionStatus] = useState({}); //pending, success or error
    const [submissionError, setSubmissionError] = useState("");

    useEffect(() => {
        if (submissionStatus === 'success' || submissionStatus === 'error') {
            const timer = setTimeout(() => {
              setSubmissionStatus(null);
              setSubmissionError(null);
            }, 3000);
      
            return () => clearTimeout(timer);
        }
    }, [submissionStatus])

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubmissionStatus("pending");

        try {
            const contactData = {name, email, message};
            await sendContactData(contactData);
    
            setSubmissionStatus("success");
            //RESET
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            setSubmissionStatus("error");
            setSubmissionError(error.message);
        }
    }

    let notification;

    if (submissionStatus=== "pending") {
        notification = {
          status: "pending",
          title: "Sending message...",
          message: "Your message is on its way!",
        };
      }
    
      if (submissionStatus=== "success") {
        notification = {
          status: "success",
          title: "Success!",
          message: "Message sent successfully!",
        };
      }
    
      if (submissionStatus=== "error") {
        notification = {
          status: "error",
          title: "Error!",
          message: submissionError,
        };
      }

    return (
        <Fragment>
            {   notification
                    &&
                <Notification 
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            }
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
        </Fragment>
    )
}

export default ContactForm;
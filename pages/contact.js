import { Fragment } from "react";
import ContactForm from "../components/contact/ContactForm";
import CustomHead from "../components/meta/CustomHead";
import styles from "../components/contact/Contact.module.css";

const ContactPage = () => {
    return (
        <Fragment>
            <CustomHead title="Omiblog | Contact" />
            <section className={styles.contact}>
                <h1>Get in touch!</h1>
                <ContactForm />
            </section>
        </Fragment>
    )
}

export default ContactPage;
import styles from "./Notification.module.css";

const Notification = ({ title, message, status }) => {

    let statusClasses = "";

    if (status === "success") {
      statusClasses = styles.success;
    }
  
    if (status === "error") {
      statusClasses = styles.error;
    }

    const cssClasses = `${styles.notification} ${statusClasses}`;

    return (
        <aside className={cssClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </aside>
    )
}

export default Notification;
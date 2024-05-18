import styles from "./styles.module.scss";

const ContactUs = () => {
  return (
    <>
      <section id="contact" className={`container ${styles.contactBg}`}>
        <div className={styles.contactSec}>
          <div className={styles.ttl}>
            <h4>
              Ready to Build a <em>world-class</em> solution{" "}
            </h4>
            <span>
              with a pocket friendly <em>budget</em>?
            </span>
          </div>
          <button>Contact Us</button>
        </div>
      </section>
    </>
  );
};

export { ContactUs };

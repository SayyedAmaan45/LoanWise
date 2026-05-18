"use client";
import styles from "./Contact.module.css";


export default function Contact() {
  return (
    <section className={styles.wrapper}>
      <div className="container">

        <div className={styles.hero}>
          <span className={styles.badge}>
            Loanwise Support
          </span>

          <h1>
            Contact <span>Us</span>
          </h1>

          <p>
            Have questions about loans, EMI calculations,
            or consultations? Our team is here to help you
            with quick and reliable support.
          </p>
        </div>

        <div className={styles.grid}>

          {/* LEFT */}

          <div className={styles.infoCard}>

            <div className={styles.infoBox}>
              <div className={styles.icon}>
                📧
              </div>

              <div>
                <h3>Email Support</h3>
                <p>support@loanwise.com</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.icon}>
                📞
              </div>

              <div>
                <h3>Phone Number</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.icon}>
                📍
              </div>

              <div>
                <h3>Office Address</h3>
                <p>
                  Mumbai, Maharashtra, India
                </p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.icon}>
                ⏰
              </div>

              <div>
                <h3>Working Hours</h3>
                <p>Mon - Sat • 9:00 AM - 7:00 PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT */}

          <div className={styles.formCard}>

            <h2>Send us a Message</h2>

            <p>
              Fill out the form below and we’ll get back
              to you as soon as possible.
            </p>

            <form className={styles.form}>

              <div className={styles.inputGroup}>
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className={styles.row}>

                <div className={styles.inputGroup}>
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter email"
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Phone Number</label>

                  <input
                    type="text"
                    placeholder="Enter number"
                  />
                </div>

              </div>

              <div className={styles.inputGroup}>
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Message</label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button className={styles.btn}>
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};



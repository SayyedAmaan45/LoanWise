"use client";
import React, { useState } from "react";
import styles from "./Consultation.module.css";

const Consultation = () => {
  const initialValue = {
    fullName: "",
    mobileNumber: "",
    email: "",
    loanType: "",
    loanAmount: "",
    yourMessage: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.card}>
          {/* LEFT SIDE */}
          <div className={styles.leftContainer}>
            <div className={styles.overlay}></div>

            <div className={styles.leftContent}>
              <span className={styles.badge}>Expert Help</span>

              <h2>Get Expert Loan Consultation</h2>

              <p>
                Our certified loan experts are here to help you choose the
                right loan and save more money.
              </p>

              <ul>
                <li>✓ Personalized Advice</li>
                <li>✓ Best Interest Rates</li>
                <li>✓ Quick Approval Help</li>
                <li>✓ 100% Confidential</li>
              </ul>

              <div className={styles.illustration}>
                💼🤝
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.rightContainer}>
            <h2>Book a Free Consultation</h2>
            <p>
              Fill in your details and our expert will get in touch with you.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Mobile Number</label>
                <div className={styles.phoneWrap}>
                  <span>+91</span>
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Enter mobile number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Loan Type</label>
                  <select
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleChange}
                  >
                    <option value="">Select loan type</option>
                    <option>Home Loan</option>
                    <option>Car Loan</option>
                    <option>Personal Loan</option>
                    <option>Business Loan</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>Loan Amount</label>
                  <input
                    type="text"
                    name="loanAmount"
                    placeholder="Enter amount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Your Message</label>
                <textarea
                  rows={4}
                  name="yourMessage"
                  placeholder="How can we help you?"
                  value={formData.yourMessage}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className={styles.btn}>
                Request Callback
              </button>

              <p className={styles.note}>
                🔒 We respect your privacy. Your information is safe with us
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
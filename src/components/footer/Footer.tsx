import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topGrid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              LoanWise
            </Link>

            <p className={styles.brandText}>
              Smart loan calculators and expert consultation
              to help you borrow better and plan confidently.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linkCol}>
            <h4>Company</h4>
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/consultation">Consultation</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={styles.linkCol}>
            <h4>Calculators</h4>
            <Link href="/calculators">All Tools</Link>
            <Link href="/calculators/home-loan">
              Home Loan
            </Link>
            <Link href="/calculators/personal-loan">
              Personal Loan
            </Link>
            <Link href="/calculators/car-loan">
              Car Loan
            </Link>
          </div>

          <div className={styles.linkCol}>
            <h4>Legal</h4>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link href="/terms">
              Terms & Conditions
            </Link>
            <Link href="/refund-policy">
              Refund Policy
            </Link>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h4>Stay Updated</h4>
            <p>
              Get updates on tools, offers and smart loan tips.
            </p>

            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
              />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 LoanWise. All rights reserved.
          </p>

          <span>
            Built for smarter borrowing.
          </span>
        </div>
      </div>
    </footer>
  );
}
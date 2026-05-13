import Link from "next/link"
import styles from "./Navbar.module.css"


export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>LoanWise</Link>


                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/calculators">Calculators</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/consultation">Consultation</Link></li>
                    </ul>

                    <div className={styles.actions}>
                        <Link href="/pricing" className={styles.login}>
                            Login</Link>
                        <Link href="/pricing" className={styles.cta}>
                            Start Free</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}